import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Item } from './shared/item.model';
import { Order } from './shared/order.model';
import { OrderItem } from './shared/orderitem.model';

import { ItemService } from './item.service';
import { ErrorService } from './errors/error.service';
import { ItemmodalService } from './itemmodal/itemmodal.service';
import { OrdermodalService } from './ordermodal/ordermodal.service';

@Injectable()
export class CartService {
    //shoppingCart : Item[] = [];
    mapShoppingCart : Map<string, OrderItem> = new Map();

    total : number = 0;
    totalChanged = new Subject<number>();
    private orders: Order[] = [];

    //retrievedData = localStorage.getItem("localCart");
    //storedCart = JSON.parse(this.retrievedData);

    cartChanged = new Subject<Map<string, OrderItem>>();

    private items: Item[] = this.itemService.getLocalItems();

    constructor(
        private http: Http, 
        private itemService: ItemService,
        private errorService: ErrorService,
        private itemmodalService: ItemmodalService,
        private ordermodalService: OrdermodalService) 
    {}

    addProduct(item : Item){
        var itemId = item.itemId;
        console.log("newItem",item);
        console.log("cart", this.mapShoppingCart);
        if (this.mapShoppingCart.has(itemId)) {
            var amount = this.mapShoppingCart.get(itemId).amount;
            this.mapShoppingCart = this.mapShoppingCart.set(item.itemId, new OrderItem(item, amount+1));
            //localStorage.setItem("localCart", JSON.stringify(this.mapShoppingCart));
            //localStorage.myMap = JSON.stringify(Array.from(this.mapShoppingCart.entries()));
        } else {
            this.mapShoppingCart = this.mapShoppingCart.set(item.itemId, new OrderItem(item, 1));
            //localStorage.setItem("localCart", JSON.stringify(this.mapShoppingCart));
            //localStorage.myMap = JSON.stringify(Array.from(this.mapShoppingCart.entries()));
        }
        console.log(item.name,this.mapShoppingCart.get(itemId), itemId, this.mapShoppingCart);
        //alert(item.name + ' added to shopping cart!')
        this.itemmodalService.addItem(item);
        this.calculateTotal();
    }

    changeAmount(event: Event, shopitem: Item) {
        var itemId = shopitem.itemId; 
        var amount = Number((<HTMLInputElement>event.target).value);
        // if (amount === 0) {
        //     this.mapShoppingCart.delete(itemId);
        // }
        if (amount === 0) {
            amount = null;
        }

        this.mapShoppingCart.set(itemId, new OrderItem(shopitem, amount));

        //localStorage.clear();
        //localStorage.setItem("localCart", JSON.stringify(this.mapShoppingCart));
        console.log(shopitem.name,this.mapShoppingCart.get(itemId));
        this.calculateTotal();
        this.totalChanged.next(this.total);
        this.cartChanged.next(this.mapShoppingCart);
      }

    deleteProduct(shopitem: Item, index){
        var itemId = shopitem.itemId;
        //this.shoppingCart.splice(index,1);
        this.mapShoppingCart.delete(itemId);

        //localStorage.clear();
        //localStorage.setItem("localCart", JSON.stringify(this.mapShoppingCart));
        console.log(shopitem.name, itemId, this.mapShoppingCart.get(itemId), this.mapShoppingCart);
        this.calculateTotal();
        this.totalChanged.next(this.total);
        this.cartChanged.next(this.mapShoppingCart);
    }
        
    calculateTotal() {

        this.total = 0;

        this.mapShoppingCart.forEach((orderitem, itemid) =>{
            this.total += orderitem.amount * orderitem.item.price;
        })

        // this.shoppingCart.forEach(item => {
        //     this.total += item.amount * item.price;
        // });
        //localStorage.clear();
        //localStorage.setItem("localCart", JSON.stringify(this.mapShoppingCart));
        this.cartChanged.next(this.mapShoppingCart);
    }

    addOrder(order: Order) {
        this.orders.push(order);
        //order.mapShoppingCart = this.getCart();
        const body = JSON.stringify(order);
        const headers = new Headers({'Content-Type': 'application/json'});
        //alert('Order succesvol!')
        this.ordermodalService.addOrder();
        //localStorage.clear();
        //this.shoppingCart = [];
        this.total = 0;
        return this.http.post('http://localhost:3000/order', body, {headers: headers})
            .map((response: Response) => {
                const result = response.json();
                const order = new Order(result.obj.fullname, result.obj.address, result.obj.postalcode, result.obj.city, result.obj.email, result.obj.mapShoppingCart, result.obj._id);
                this.orders.push(order);
                return order;
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }    

    itemsInCart() {
        return this.mapShoppingCart.size !== 0;
    }

    clearCart() {
        this.mapShoppingCart.clear();
    }

    getCart() : Map<string, OrderItem> {
        return this.mapShoppingCart;
        //return this.storedCart;
    }

    getTotal() : number {
        return this.total;
    }

}
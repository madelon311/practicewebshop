import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NgForm } from "@angular/forms";

import { Item } from '../shared/item.model';
import { Order } from '../shared/order.model';
import { User } from '../auth/user.model';
import { CartService } from '../cart.service';
import { OrderItem } from '../shared/orderitem.model';

import { JwtHelper} from 'angular2-jwt-session';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html'
})
export class ShoppingcartComponent implements OnInit {

  shoppingCart: OrderItem[];
  total : number;
  price : number;
  private subscription: Subscription;
  order: Order;

  jwtHelper: JwtHelper = new JwtHelper();
  user;

  changeAmount(event: Event, shopitem: Item) { 
    this.cartService.changeAmount(event, shopitem);
  }

  deleteProduct(shopitem: Item, index){
    this.cartService.deleteProduct(shopitem, index);
  }

  onSubmit(form: NgForm) {
    const order = new Order(form.value.fullname, form.value.address, form.value.postalcode, form.value.city, form.value.email, this.mapToJson());
    this.cartService.addOrder(order)
      .subscribe(
        data => console.log(data),
        error => console.error(error),
        () => this.cartService.clearCart()
      );
    this.shoppingCart = [];
    this.total = 0;
    form.resetForm();
  }

  onClear(form: NgForm) {
    this.order = null;
    form.resetForm();
  }

 getOrderItems(shoppingcart : Map<string, OrderItem>){
   var orderItems = new Array<OrderItem>();
   shoppingcart.forEach((orderItem, itemId) =>{
      orderItems.push(orderItem);
   });
   return orderItems;
 }

 mapToJson() {
  return JSON.stringify([...this.shoppingCart]);
}

useJwtHelper() {

  if(localStorage.getItem('token') !== null) {
  var token = localStorage.getItem('token');
 
  console.log(
    this.jwtHelper.decodeToken(token),
    this.jwtHelper.getTokenExpirationDate(token),
    this.jwtHelper.isTokenExpired(token)
  );

  var decoded = this.jwtHelper.decodeToken(token);
  this.user = decoded.user;
  console.log(decoded.user.fullname);
  console.log(this.user.fullname);

  } else {
    this.user = '';
  }
}

itemsInCart() {
  return this.cartService.itemsInCart();
}

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.shoppingCart = this.getOrderItems(this.cartService.getCart());
    console.log("shoppingcartcomponent.shoppingcart",this.shoppingCart);
    this.total = this.cartService.getTotal();
    console.log("shoppingcartcomponent.total",this.total);
    this.subscription = this.cartService.totalChanged
      .subscribe(
        (total: number) => {
          this.total = total;
        }
      );
      this.subscription = this.cartService.cartChanged
      .subscribe(
        (shoppingCart: Map<string, OrderItem>) => {
          this.shoppingCart =this.getOrderItems(shoppingCart);
        }
      );
      
      this.useJwtHelper();

      console.log("Zitten er items in de cart?" + this.cartService.itemsInCart());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

import { OrderItem } from "./orderitem.model";

export class Order {
    fullname: string;
    address: string;
    postalcode: string;
    city: string;
    email: string;
    mapShoppingCart?: string;
    orderId?: string;

    constructor(fullname: string, address: string, postalcode: string, city: string, email: string, mapShoppingCart?: string, orderId?: string) {
        this.fullname = fullname;
        this.address = address;
        this.postalcode = postalcode;
        this.city = city;
        this.email = email;
        this.mapShoppingCart = mapShoppingCart;
        this.orderId = orderId;
    }
}
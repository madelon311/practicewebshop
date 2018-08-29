import { Item } from "./item.model";

export class OrderItem {
    item: Item;
    amount: number;

    constructor(item: Item, amount: number) {
        this.item = item;
        this.amount = amount;
    }
}
import { EventEmitter } from '@angular/core';
import { Item } from '../shared/item.model';

export class ItemmodalService {
    itemAdded = new EventEmitter<Item>();

    addItem(item: Item) {
        const itemData = item;
        this.itemAdded.emit(itemData);
    }
}
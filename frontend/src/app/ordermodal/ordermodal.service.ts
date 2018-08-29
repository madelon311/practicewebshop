import { EventEmitter } from '@angular/core';

export class OrdermodalService {
    orderAdded = new EventEmitter<any>();

    addOrder() {
        this.orderAdded.emit();
    }
}
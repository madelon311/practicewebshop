import { Component, OnInit } from '@angular/core';
import { ItemmodalService } from './itemmodal.service';
import { Item } from '../shared/item.model';

@Component({
    selector: 'app-itemmodal',
    templateUrl: './itemmodal.component.html',
    styles: [`
        .backdrop {
            background-color: rgba(0,0,0,0.6);
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
        }
    `]
})
export class ItemmodalComponent implements OnInit {
    item: Item;
    display = 'none';

    constructor(private itemmodalService: ItemmodalService) {}

    onItemAdded() {
        this.display = 'none';
    }

    ngOnInit() {
        this.itemmodalService.itemAdded
            .subscribe(
                (item: Item) => {
                    this.item = item;
                    this.display = 'block';
                }
            );
    }
}
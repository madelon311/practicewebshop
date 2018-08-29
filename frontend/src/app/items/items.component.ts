import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Item } from '../shared/item.model';

import { CartService } from '../cart.service';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html'
})

export class ItemsComponent implements OnInit {
  
  items: Item[];
  filteredCategory = '';

  addProduct(item : Item){
    this.cartService.addProduct(item);
  }

  constructor(
    private cartService: CartService,
    private itemService: ItemService
  ) {}

  ngOnInit(): void {
    this.itemService.getItems()
      .subscribe(
        (items: Item[]) => {
          this.items = items;
        }
      );
  }

}

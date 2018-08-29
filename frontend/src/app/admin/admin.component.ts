import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ItemService } from '../item.service';
import { Item } from '../shared/item.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent {
  constructor(private itemService: ItemService) {}

  onSubmit(form: NgForm) {
    const item = new Item(form.value.name, form.value.imagePath, form.value.description, form.value.price, form.value.category);
    this.itemService.addItem(item)
      .subscribe(
        data => console.log(data),
        error => console.error(error)
      );
    form.resetForm();
  }

}
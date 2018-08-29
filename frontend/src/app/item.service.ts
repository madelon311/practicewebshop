import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

import { Item } from './shared/item.model';
import { ErrorService } from './errors/error.service';

@Injectable()
export class ItemService {
    private items: Item[] = [];
    
        constructor(private http: Http, private errorService: ErrorService) {}

        addItem(item: Item) {
            this.items.push(item);
            const body = JSON.stringify(item);
            const headers = new Headers({'Content-Type': 'application/json'});
            return this.http.post('http://localhost:3000/admin', body, {headers: headers})
                .map((response: Response) => {
                    const result = response.json();
                    const item = new Item(result.obj.name, result.obj.imagePath, result.obj.description, result.obj.price, result.obj.category, result.obj._id);
                    this.items.push(item);
                    return item;
                })
                .catch((error: Response) => {
                    this.errorService.handleError(error.json());
                    return Observable.throw(error.json());
                });
        }
    
        getItems() {
            return this.http.get('http://localhost:3000/be-items')
                .map((response: Response) => {
                    const items = response.json().obj;
                    let transformedItems: Item[] = [];
                    for (let item of items) {
                        transformedItems.push(new Item(item.name, item.imagePath, item.description, item.price, item.category, item._id));
                    }
                    this.items = transformedItems;
                    return transformedItems;
                })
                .catch((error: Response) => {
                    this.errorService.handleError(error.json());
                    return Observable.throw(error.json());
                });
          }
    
          getLocalItems() {
            return this.items;
          }
}
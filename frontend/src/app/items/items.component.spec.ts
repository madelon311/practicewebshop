import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemsComponent } from './items.component';
import { ItemService } from '../item.service';
import { FilterPipe } from '../filter.pipe';
import { async } from 'q';
import { CartService } from '../cart.service';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { Item } from '../shared/item.model';

describe('ItemsComponent)', () => {
    
      let comp:    ItemsComponent;
      let fixture: ComponentFixture<ItemsComponent>;
      let de:      DebugElement;
      let el:      HTMLElement;
      let cartServiceStub: Object;
      let itemServiceStub: Object;
    
      beforeEach(async(() => {
        cartServiceStub = {
        };

        itemServiceStub = {
            getItems() {
                return Observable.of([new Item('test','','test-description',0,'category','')]);
            }
        };

        TestBed.configureTestingModule({
            imports: [ FormsModule ],
            declarations: [ 
                ItemsComponent,
                FilterPipe 
              ],
            providers:    [ {provide: CartService, useValue: cartServiceStub }, {provide: ItemService, useValue: itemServiceStub} ]
        })
        .compileComponents();  // compile template and css
      }));
      
      beforeEach(() => {
        fixture = TestBed.createComponent(ItemsComponent);
        comp = fixture.componentInstance; 
      });

      it('should create the app', () => {
        //let fixture = TestBed.createComponent(ShoppingcartComponent);
        //let app = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
      });

      it('items size should be 1', () => {
        fixture.detectChanges();
        expect(comp.items.length).toBe(1);
      });
    });

 
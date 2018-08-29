import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { async } from 'q';
import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule } from '@angular/forms';
import { ShoppingcartComponent } from './shoppingcart.component';
import { CartService } from '../cart.service';
import { OrderItem } from '../shared/orderitem.model'
import { ItemsComponent } from '../items/items.component';
import { FilterPipe } from '../filter.pipe';
import { AuthenticationComponent } from '../auth/authentication.component';
import * as Rx from "rxjs/Rx";
import { Observable } from 'rxjs/Observable';

describe('ShoppingcartComponent)', () => {
    
      let comp:    ShoppingcartComponent;
      let fixture: ComponentFixture<ShoppingcartComponent>;
      let de:      DebugElement;
      let el:      HTMLElement;
      let cartServiceStub: Object;
    
      beforeEach(async(() => {
        cartServiceStub = {
            getTotal() {
                return 10;
            },

            getCart()  {
                return new Map();
            },

            totalChanged : Observable.of(10),
            cartChanged : Observable.of(new Map()),
            itemsInCart() { return true;}
        };

        TestBed.configureTestingModule({
            imports: [ 
                FormsModule,
                RouterTestingModule.withRoutes([
                    {path: '', redirectTo: '/items', pathMatch: 'full'},
                    {path: 'items', component: ItemsComponent},
                    {path: 'shoppingcart', component: ShoppingcartComponent},
                    {path: 'auth', component: AuthenticationComponent},
                    {path: '**', component: ItemsComponent}
                ])
            ],
            declarations: [ 
                ShoppingcartComponent,
                ItemsComponent,
                AuthenticationComponent,
                FilterPipe
            ],
            providers:    [ {provide: CartService, useValue: cartServiceStub } ]
        })
        .compileComponents();  // compile template and css
      }));
      
      beforeEach(() => {
        fixture = TestBed.createComponent(ShoppingcartComponent);
        comp = fixture.componentInstance; 
      });

      it('should create the app', () => {
        //let fixture = TestBed.createComponent(ShoppingcartComponent);
        //let app = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
      });

      it('total should be 10', () => {
        fixture.detectChanges();
        expect(comp.total).toBe(10);
      });

    });

 
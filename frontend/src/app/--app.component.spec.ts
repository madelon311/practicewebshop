import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { async } from 'q';
import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule } from '@angular/forms';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { CartService } from './cart.service';
import { ItemService } from './item.service';
import { ErrorService } from './errors/error.service';
import { ItemmodalService } from './itemmodal/itemmodal.service';
import { OrdermodalService } from './ordermodal/ordermodal.service';
import { OrderItem } from './shared/orderitem.model'
import { ItemsComponent } from './items/items.component';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';
import { AuthenticationComponent } from './auth/authentication.component';
import * as Rx from "rxjs/Rx";
import { Observable } from 'rxjs/Observable';
import { Item } from './shared/item.model';
import { ErrorComponent } from './errors/error.component';
import { ItemmodalComponent } from './itemmodal/itemmodal.component';
import { OrdermodalComponent } from './ordermodal/ordermodal.component';

describe('AppComponent)', () => {
    
      let comp:    AppComponent;
      let fixture: ComponentFixture<AppComponent>;
      let de:      DebugElement;
      let el:      HTMLElement;
      let cartServiceStub: Object;
      let itemServiceStub: Object;
      let errorServiceStub: Object;
      let itemmodalServiceStub: Object;
      let ordermodalServiceStub: Object;
    
      beforeEach(async(() => {
        cartServiceStub = {
            // getTotal() {
            //     return 10;
            // },

            // getCart()  {
            //     return new Map();
            // },

            // totalChanged : Observable.of(10),
            // cartChanged : Observable.of(new Map()),
            // itemsInCart() { return true;}
        };

        itemServiceStub = {
            // getItems() {
            //     return Observable.of([new Item('test','','test-description',0,'category','')]);
            // }
        };

        errorServiceStub = {

        };

        itemmodalServiceStub = {
            
        };

        ordermodalServiceStub = {
            
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
                AppComponent,
                ShoppingcartComponent,
                ItemsComponent,
                AuthenticationComponent,
                HeaderComponent,
                ErrorComponent,
                ItemmodalComponent,
                OrdermodalComponent,
                FilterPipe
            ],
            providers: [ 
                {provide: CartService, useValue: cartServiceStub }, 
                {provide: ItemService, useValue: itemServiceStub}, 
                {provide: ErrorService, useValue: errorServiceStub}, 
                {provide: ItemmodalService, useValue: itemmodalServiceStub},
                {provide: OrdermodalService, useValue: ordermodalServiceStub} 
            ]
        })
        .compileComponents();  // compile template and css
      }));
      
      beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        comp = fixture.componentInstance; 
      });

      it('should create the app', async(() => {
        //let fixture = TestBed.createComponent(AppComponent);
        //let app = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
      }));

      it(`should have as title 'app'`, async(() => {
        expect(comp.title).toEqual('app');
      }));

    });

 
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { async } from 'q';
import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemmodalComponent } from './itemmodal.component';
import { ItemmodalService } from './itemmodal.service';
import { ItemsComponent } from '../items/items.component';
import { ShoppingcartComponent } from '../shoppingcart/shoppingcart.component';
import { AuthenticationComponent } from '../auth/authentication.component';
import { FilterPipe } from '../filter.pipe';


describe('ItemmodalComponent)', () => {
    
      let comp:    ItemmodalComponent;
      let fixture: ComponentFixture<ItemmodalComponent>;
      let de:      DebugElement;
      let el:      HTMLElement;
      let itemmodalServiceStub: Object;
    
      beforeEach(async(() => {
        itemmodalServiceStub = {

        };

        TestBed.configureTestingModule({
            imports: [ 
                FormsModule,
                ReactiveFormsModule,
                RouterTestingModule.withRoutes([
                    {path: '', redirectTo: '/items', pathMatch: 'full'},
                    {path: 'items', component: ItemsComponent},
                    {path: 'shoppingcart', component: ShoppingcartComponent},
                    {path: 'auth', component: AuthenticationComponent},
                    {path: '**', component: ItemsComponent}
                ])
            ],
            declarations: [ 
                ItemmodalComponent,
                ItemsComponent,
                ShoppingcartComponent,
                AuthenticationComponent,
                FilterPipe
            ],
            providers: [ 
                {provide: ItemmodalService, useValue: itemmodalServiceStub}            
            ]
        })
        .compileComponents();  // compile template and css
      }));
      
      beforeEach(() => {
        fixture = TestBed.createComponent(ItemmodalComponent);
        comp = fixture.componentInstance; 
      });

      it('should create the app', async(() => {
        expect(comp).toBeTruthy();
      }));

    });

 
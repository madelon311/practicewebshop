import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { async } from 'q';
import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header.component';
import { ItemsComponent } from '../items/items.component';
import { ShoppingcartComponent } from '../shoppingcart/shoppingcart.component';
import { AuthenticationComponent } from '../auth/authentication.component';
import { FilterPipe } from '../filter.pipe';


describe('HeaderComponent)', () => {
    
      let comp:    HeaderComponent;
      let fixture: ComponentFixture<HeaderComponent>;
      let de:      DebugElement;
      let el:      HTMLElement;
    
      beforeEach(async(() => {
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
                HeaderComponent,
                ItemsComponent,
                ShoppingcartComponent,
                AuthenticationComponent,
                FilterPipe
            ]
        })
        .compileComponents();  // compile template and css
      }));
      
      beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        comp = fixture.componentInstance; 
      });

      it('should create the app', async(() => {
        expect(comp).toBeTruthy();
      }));

    });

 
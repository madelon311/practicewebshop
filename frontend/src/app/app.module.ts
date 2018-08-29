import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from "./app.routing";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ItemsComponent } from './items/items.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { AdminComponent } from './admin/admin.component';
import { AuthenticationComponent } from "./auth/authentication.component";
import { LogoutComponent } from "./auth/logout.component";
import { SignupComponent } from "./auth/signup.component";
import { SigninComponent } from "./auth/signin.component";
import { ErrorComponent } from './errors/error.component';
import { ItemmodalComponent } from './itemmodal/itemmodal.component';
import { OrdermodalComponent } from './ordermodal/ordermodal.component';
import { CartService } from './cart.service';
import { ItemService } from './item.service';
import { AuthService } from './auth/auth.service';
import { ErrorService } from './errors/error.service';
import { ItemmodalService } from './itemmodal/itemmodal.service';
import { OrdermodalService } from './ordermodal/ordermodal.service';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemsComponent,
    ShoppingcartComponent,
    AdminComponent,
    AuthenticationComponent,
    LogoutComponent,
    SignupComponent,
    SigninComponent,
    ErrorComponent,
    ItemmodalComponent,
    OrdermodalComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    HttpModule
  ],
  providers: [CartService, ItemService, AuthService, ErrorService, ItemmodalService, OrdermodalService],
  bootstrap: [AppComponent]
})
export class AppModule { }

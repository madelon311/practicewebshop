import { Routes, RouterModule } from "@angular/router";

import { ItemsComponent } from "./items/items.component";
import { ShoppingcartComponent } from "./shoppingcart/shoppingcart.component";
import { AdminComponent } from "./admin/admin.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { AUTH_ROUTES } from "./auth/auth.routes";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/items', pathMatch: 'full' },
    { path: 'items', component: ItemsComponent },
    { path: 'shoppingcart', component: ShoppingcartComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
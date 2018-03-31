import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemsComponent} from './items/items.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {ItemDetailComponent} from './item-detail/item-detail.component';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { GroupInfoComponent} from './group-info/group-info.component';
import {ItemsListComponent} from './items-list/items-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'items', component: ItemsComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent},
  // { path: 'login', component: LoginComponent},
  // { path: 'register', component: RegisterComponent},
  { path: 'detail/:name', component: ItemDetailComponent },
  { path: 'group-info', component: GroupInfoComponent },
  { path: 'items-list', component: ItemsListComponent },

  //{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'checkout', component: CheckoutComponent},
  { path: 'confirmed', component: OrderConfirmationComponent}

  // otherwise redirect to home
  //{ path: '**', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

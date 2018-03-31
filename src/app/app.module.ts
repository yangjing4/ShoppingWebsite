import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import {ShoppingItemService} from './shopping-item.service';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ItemSearchComponent } from './item-search/item-search.component';
import { AlertService, AuthenticationService, UserService } from './_service/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';


// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';


import { ShoppingCartService } from './_service/shopping-cart.service';
import { LocalStorageServie, StorageService } from './_service/storage.service';
import { DeliveryOptionsDataService } from './_service/delivery-options.service';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { CarouselComponent } from './carousel/carousel.component';
import {GroupInfoComponent} from './group-info/group-info.component';
import { ItemsListComponent } from './items-list/items-list.component';



@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemDetailComponent,
    ShoppingCartComponent,
    ItemSearchComponent,
    GroupInfoComponent,
    AlertComponent,
    LoginComponent,
    RegisterComponent,
    CheckoutComponent,
    OrderConfirmationComponent,
    CarouselComponent,
    ItemsListComponent
   // UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  providers: [
    ShoppingItemService,
    AlertService,
    AuthenticationService,
    AuthGuard,
    UserService,
    DeliveryOptionsDataService,
    LocalStorageServie,
    { provide: StorageService, useClass: LocalStorageServie },
    {
      deps: [StorageService, ShoppingItemService, DeliveryOptionsDataService],
      provide: ShoppingCartService,
      useClass: ShoppingCartService
    },
     fakeBackendProvider,
     MockBackend,
     BaseRequestOptions,],
  bootstrap: [AppComponent]
})
export class AppModule { }

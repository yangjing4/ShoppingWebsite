import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { CartItem } from '../_models/cart-item.model';
import { DeliveryOption } from '../_models/delivery-option.model';
import { ShoppingItem } from '../shoppingitems';
import { ShoppingCart } from '../_models/shopping-cart.model';
import { DeliveryOptionsDataService } from '../_service/delivery-options.service';
import {ShoppingItemService} from '../shopping-item.service';
import { ShoppingCartService } from '../_service/shopping-cart.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

interface ICartItemWithProduct extends CartItem {
  product: ShoppingItem;
  totalCost: number;
}

@Component({
  selector: 'app-checkout',
  styleUrls: ['./checkout.component.css'],
  templateUrl: './checkout.component.html'
})
export class CheckoutComponent implements OnInit, OnDestroy {
  public deliveryOptions: Observable<DeliveryOption[]>;
  public cart: Observable<ShoppingCart>;
  public cartItems: ICartItemWithProduct[];
  public itemCount: number;

  private products: ShoppingItem[];
  private cartSubscription: Subscription;

  public constructor(private productsService: ShoppingItemService,
                     private deliveryOptionService: DeliveryOptionsDataService,
                     private shoppingCartService: ShoppingCartService) {
  }


  //clear out shopping cart
  public emptyCart(): void {
    this.shoppingCartService.empty();
  }

  
  public setDeliveryOption(option: DeliveryOption): void {
    this.shoppingCartService.setDeliveryOption(option);
  }

  public ngOnInit(): void {
    this.deliveryOptions = this.deliveryOptionService.all();
    this.cart = this.shoppingCartService.get();
    this.cartSubscription = this.cart.subscribe((cart) => {
      this.itemCount = cart.items.map((x) => x.quantity).reduce((p, n) => p + n, 0);
      this.productsService.getShoppingItems().subscribe((products) => {
        this.products = products;
        this.cartItems = cart.items
                           .map((item) => {
                              const product = this.products.find((p) => p.name === item.shoppingItemName);
                              return {
                                ...item,
                                product,
                                totalCost: product.price * item.quantity };
                           });
      });
    });
  }

  public ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }
}

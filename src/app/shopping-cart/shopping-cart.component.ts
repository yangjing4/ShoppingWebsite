import { ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {ShoppingItem} from '../shoppingitems';
import {ShoppingItemService} from '../shopping-item.service';
import { CartItem } from '../_models/cart-item.model';
import { ShoppingCart } from '../_models/shopping-cart.model';
import { ShoppingCartService } from '../_service/shopping-cart.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';


interface ICartItemWithProduct extends CartItem {
  product: ShoppingItem;
  totalCost: number;
}


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})



export class ShoppingCartComponent implements OnInit, OnDestroy  {
  public cart: Observable<ShoppingCart>;
  public cartItems: ICartItemWithProduct[];
  public itemCount: number;

  private products: ShoppingItem[];
  private cartSubscription: Subscription;

  constructor(
    private productsService: ShoppingItemService,
    private shoppingItemsService: ShoppingItemService,
    private shoppingCartService: ShoppingCartService) { }

  public emptyCart(): void {
    this.shoppingCartService.empty();
  }


  ngOnInit(): void {
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

  public removeProductFromCart( ShoppingItem: ShoppingItem): void {
    this.shoppingCartService.addItem(ShoppingItem, -1);
  }
}

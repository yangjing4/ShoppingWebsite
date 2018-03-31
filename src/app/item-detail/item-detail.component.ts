import { Component, OnInit , Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ShoppingItem } from '../shoppingitems';
import {ShoppingItemService} from '../shopping-item.service';
import { ShoppingCartService } from '../_service/shopping-cart.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  @Input() shoppingItem: ShoppingItem;
  quantity: number;
  amount: number;

  constructor(
    private route: ActivatedRoute,
    private shoppingItemService: ShoppingItemService,
    private location: Location,
    private shoppingCartService: ShoppingCartService
  ) { }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getShoppingItem();
  }


  //get the selected item
  getShoppingItem(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.shoppingItemService.getShoppingItem(name)
      .subscribe(ShoppingItem => this.shoppingItem = ShoppingItem);
  }


  changeShape(quantity): void{
    this.quantity = parseInt(quantity);
  }


  //add items with quantity to cart
  public addProductToCart( ShoppingItem: ShoppingItem, quantity: number): void {
    this.shoppingCartService.addItem(ShoppingItem, this.quantity);


  }

}

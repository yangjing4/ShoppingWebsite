import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import {ShoppingItem} from '../shoppingitems';
import {ShoppingItemService} from '../shopping-item.service';

import { ShoppingCart } from '../_models/shopping-cart.model';
import { ShoppingCartService } from '../_service/shopping-cart.service';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})


export class ItemsComponent implements OnInit {
  ShoppingItems: ShoppingItem[];
  public shoppingItems: Observable<ShoppingItem[]>;

  constructor(
    private shoppingItemsService: ShoppingItemService,
    private shoppingCartService: ShoppingCartService
  ) { }




  //get all items
  getItems(): void {
    this.shoppingItemsService.getShoppingItems().subscribe(ShoppingItems => this.ShoppingItems = ShoppingItems);
  }

  ngOnInit() {
    this.getItems();
  }

  //sort items by name
  sortItemsbyname(): void {
    this.shoppingItemsService.sortShoppingItems().subscribe(
      ShoppingItems => this.ShoppingItems = ShoppingItems.sort(function(a, b) {
        return a.name.localeCompare(b.name);
      }));
  }

  //search by catalog food
  groupbyFood():void{
    this.shoppingItemsService.sortShoppingItems().subscribe(
      ShoppingItems => this.ShoppingItems = ShoppingItems.filter(function(a:any) {
        return a.catalog === "Food" ;
      }));
  }

  //search by catalog watch
  groupbyWatch():void{
    this.shoppingItemsService.sortShoppingItems().subscribe(
      ShoppingItems => this.ShoppingItems = ShoppingItems.filter(function(a:any) {
        return a.catalog === "Watch" ;
      }));
  }

  //search by catalog toy
  groupbyToy():void{
    this.shoppingItemsService.sortShoppingItems().subscribe(
      ShoppingItems => this.ShoppingItems = ShoppingItems.filter(function(a:any) {
        return a.catalog === "LEGO" ;
      }));
  }

  //search by catalog backpack
  groupbyBackpack():void{
    this.shoppingItemsService.sortShoppingItems().subscribe(
      ShoppingItems => this.ShoppingItems = ShoppingItems.filter(function(a:any) {
        return a.catalog === "Backpack" ;
      }));
  }

  //search by catalog clothes
  groupbyClothes():void{
    this.shoppingItemsService.sortShoppingItems().subscribe(
      ShoppingItems => this.ShoppingItems = ShoppingItems.filter(function(a:any) {
        return a.catalog === "Clothing" ;
      }));
  }

  //search by catalog shoes
  groupbyShoes():void{
    this.shoppingItemsService.sortShoppingItems().subscribe(
      ShoppingItems => this.ShoppingItems = ShoppingItems.filter(function(a:any) {
        return a.catalog === "Shoes" ;
      }));
  }


  //search by catalog mouse
  groupbyMouse():void{
    this.shoppingItemsService.sortShoppingItems().subscribe(
      ShoppingItems => this.ShoppingItems = ShoppingItems.filter(function(a:any) {
        return a.catalog === "Mouse" ;
      }));
  }

  //search by catalog hat
  groupbyHat():void{
    this.shoppingItemsService.sortShoppingItems().subscribe(
      ShoppingItems => this.ShoppingItems = ShoppingItems.filter(function(a:any) {
        return a.catalog === "Hat" ;
      }));
  }

  //sort by price high to low
  sortItemsbyprice1(): void {
    this.shoppingItemsService.sortShoppingItems().subscribe(
      ShoppingItems => this.ShoppingItems = ShoppingItems.sort((a: any, b: any) => {
        if(a.price < b.price) {
          return 1;
        } else if (a.price > b.price) {
          return -1;
        } else {
          return 0;
        }
      }));
  }

  //sort by ratings
  sortItemsbyrating(): void {
    this.shoppingItemsService.sortShoppingItems().subscribe(
      ShoppingItems => this.ShoppingItems = ShoppingItems.sort((a: any, b: any) => {
        if(a.evaluate < b.evaluate) {
          return 1;
        } else if (a.evaluate > b.evaluate) {
          return -1;
        } else {
          return 0;
        }
      }));
  }

  //sort by price low to high
  sortItemsbyprice2(): void {
    this.shoppingItemsService.sortShoppingItems().subscribe(
      ShoppingItems => this.ShoppingItems = ShoppingItems.sort((a: any, b: any) => {
        if (a.price < b.price) {
          return -1;
        } else if (a.price > b.price) {
          return 1;
        } else {
          return 0;
        }
      }));
  }



}

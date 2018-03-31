import { Component, OnInit } from "@angular/core";
import { ShoppingCartService } from "../_service/shopping-cart.service";

@Component({
  selector: "app-order-confirmation",
  templateUrl: "./order-confirmation.component.html"
})
export class OrderConfirmationComponent implements OnInit {
  public constructor(private shoppingCartService: ShoppingCartService) {}

  public ngOnInit(): void {
    this.shoppingCartService.empty();  //If check out successfully, then clear out the shopping cart
  }
}

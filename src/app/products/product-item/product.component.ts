import { Component, OnInit } from "@angular/core";
import { Product } from "src/models/product";

@Component({
  selector: 'product-item',
  templateUrl: './product.component.html',
  providers: [],
})
export class ProductItemComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }
}
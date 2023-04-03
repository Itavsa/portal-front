import { Component, OnInit } from "@angular/core";
import { ProductsService } from './products.service';
import { Product } from "src/models/product";

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  providers: [ProductsService],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  currentPage = 0; // TODO: implement pagination

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts(this.currentPage).subscribe(products => this.products = products);
  }
}
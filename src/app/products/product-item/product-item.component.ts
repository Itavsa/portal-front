import { Component, Input, OnInit } from "@angular/core";
import { Product } from "src/models/product";

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  providers: [],
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  @Input() isRtl = false;
  constructor() {}

  ngOnInit(): void {
  }

  getPreviewPicture(): string {
    return this.product.pictures[0]?.path
  }

  getPreviewPicturePlaceholder(): string {
    return this.product.pictures[0]?.filename ?? "";
  }
}
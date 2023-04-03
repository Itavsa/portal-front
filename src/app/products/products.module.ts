import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { ProductItemComponent } from './product-item/product.component';
@NgModule({
  declarations: [
    ProductsComponent,
    ProductItemComponent
  ],
  imports: [],
  providers: [],
  bootstrap: [],
  exports: [
    ProductsComponent
  ]
})
export class ProductsModule { }

import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    ProductsComponent,
    ProductItemComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
    ProductsComponent
  ]
})
export class ProductsModule { }

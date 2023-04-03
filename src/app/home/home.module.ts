import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { ProductsModule } from '../products/products.module';
@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    ProductsModule
  ],
  providers: [],
  bootstrap: []
})
export class HomeModule { }

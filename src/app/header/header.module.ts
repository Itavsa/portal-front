import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }

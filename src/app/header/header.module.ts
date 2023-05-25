import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }

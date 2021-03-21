import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarRoutingModule } from './navbar-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { NavButtonComponent } from './nav-button/nav-button.component';
import { NavBrandComponent } from './nav-brand/nav-brand.component';


@NgModule({
  declarations: [
    NavbarComponent,
    NavButtonComponent,
    NavBrandComponent
  ],
  imports: [
    CommonModule,
    NavbarRoutingModule
  ],
  exports:[
    NavbarComponent
  ]
})
export class NavbarModule { }

import { HomeModule } from './home/home.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootRoutingModule } from './root-routing.module';
import { NavbarModule } from './navbar/navbar.module';
import { ComprarModule } from './comprar/comprar.module';
import { ViagemModule } from './viagem/viagem.module';
import { GeneralModules } from './general/general.module';
import { ErrorModule } from './error/error.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RootRoutingModule,
    NavbarModule,
    ViagemModule,
    ComprarModule,
  ],
  exports:[
    NavbarModule,
    ViagemModule,
    ErrorModule,
    HomeModule
  ]
})
export class RootModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComprarRoutingModule } from './comprar-routing.module';
import { ComprarComponent } from './comprar/comprar.component';
import { GeneralModules } from './../general/general.module';
import { CardViagemComponent } from './card-viagem/card-viagem.component';


@NgModule({
  declarations: [ComprarComponent, CardViagemComponent],
  imports: [
    CommonModule,
    GeneralModules,
    ComprarRoutingModule
  ],
  exports:[
    ComprarComponent
  ]
})
export class ComprarModule { }

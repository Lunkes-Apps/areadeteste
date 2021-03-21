import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViagemRoutingModule } from './viagem-routing.module';
import { ViagemComponent } from './viagem/viagem.component';
import { ViagemListComponent } from './viagem-list/viagem-list.component';



@NgModule({
  declarations: [ViagemComponent, ViagemListComponent],
  imports: [
    CommonModule,
    ViagemRoutingModule
  ],
  exports: [
    ViagemComponent,
  ]
})
export class ViagemModule { }

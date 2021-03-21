import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { InputOptionsComponent } from './input-options/input-options.component';
import { FormsModule }   from '@angular/forms';



@NgModule({
  declarations: [InputComponent, InputOptionsComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    InputComponent,
    InputOptionsComponent,
    FormsModule
  ]
})
export class GeneralModules { }

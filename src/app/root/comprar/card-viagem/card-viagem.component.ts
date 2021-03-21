import { Destino } from './../../viagem/viagem/destino';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lnks-card-viagem',
  templateUrl: './card-viagem.component.html',
  styleUrls: ['./card-viagem.component.scss']
})
export class CardViagemComponent implements OnInit {

  estaSelecionando: boolean = false;
  @Input()pathImg: string;
  @Input()cardTitle: string = "<default>";
  @Input()descricao: string = "<default>";
  @Input()anyActivated: boolean = false;
  @Input()sameSelected: boolean = false;
  @Output()selecionando = new EventEmitter<string>();
  @Output()destinoOut = new EventEmitter<string>();
  @Output()isActivatedOut = new EventEmitter<boolean>();
  
  isActivated: boolean = false;
  isSame: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  selecionar(){
    // this.selecionando.emit(this.cardTitle);
    this.estaSelecionando = !this.estaSelecionando;
    this.destinoOut.emit(this.cardTitle);
    console.log("card " + this.anyActivated);
    this.isActivated = !this.isActivated;
  }

  limpar(){
    if(this.estaSelecionando){
      this.estaSelecionando = false;
      this.isActivated = !this.isActivated;
    }
  }

  emitirEvents(){
    // this.destinoOut.emit(this.cardTitle);
    // if (!this.anyActivated ) 
    // this.isActivatedOut.emit(this.isActivated);
  }

}

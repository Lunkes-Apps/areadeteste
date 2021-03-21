import { Destino } from './../../viagem/viagem/destino';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lnks-card-viagem',
  templateUrl: './card-viagem.component.html',
  styleUrls: ['./card-viagem.component.scss']
})
export class CardViagemComponent implements OnInit {

  estaSelecionando: boolean = false;
  atual: string;
  @Input()pathImg: string;
  @Input()destinoSelecionado: boolean;
  @Input()cardTitle: string = "<default>";
  @Input()descricao: string = "<default>";
  @Input()anyActivated: boolean = false;
  @Input()sameSelected: boolean = false;
  @Output()selecionando = new EventEmitter<string>();
  @Output()destinoOut = new EventEmitter<string>();
  @Output()isActivatedOut = new EventEmitter<boolean>();
  
  isActivated: boolean = false;
  isDestino: boolean = false;
  isSame: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  selecionar(){
      this.estaSelecionando = !this.estaSelecionando;
      this.destinoOut.emit(this.cardTitle);
      this.isActivated = !this.isActivated;  
  }

  limpar(){
    if(this.isActivated) this.isActivated = !this.isActivated; 
  }

  emitirEvents(){
    // this.destinoOut.emit(this.cardTitle);
    // if (!this.anyActivated ) 
    // this.isActivatedOut.emit(this.isActivated);
  }

}

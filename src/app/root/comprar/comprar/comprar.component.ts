import { element } from 'protractor';
import { CardViagemComponent } from './../card-viagem/card-viagem.component';
import { ViagemService } from './../../viagem/viagem/viagem.service';
import { Destino } from '../../viagem/viagem/destino';
import { Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';


@Component({
  selector: 'lnks-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.scss']
})
export class ComprarComponent implements OnInit {
  @ViewChildren(CardViagemComponent) cardsViagem: QueryList<CardViagemComponent>;
  mensagem: string = 'Selecione o local da partida';
  partidaSelecionada = false;
  destinos: Destino[] = [];
  itens: string[] = [];

  isAnySelected: boolean = false;

  nome: string;
  destino: string;
  partida: string;
  destinoSelecionado: string = "";
  selecionando: string = "";
  selecionado: string;
  constructor(private http: ViagemService) { }

  ngOnInit(): void {
    this.http.getDestino()
      .subscribe(
        destinos => {
          this.destinos = destinos
          this.itens = this.gerarCidades(destinos);
          console.log(this.itens)
        },
        erro => console.log(erro)
      )
  }

  gerarCidades(destinos: Destino[]): string[] {
    let cidades: string[] = []
    destinos.forEach(destino => {
      cidades.push(destino.cidade);
    });
    return cidades;
  }

  checarSelecionado(event: string) {
    if (this.selecionado == event) {
      console.log('deselecionando ' + event);
      this.selecionado = undefined;
      this.destino = undefined;
    } else {
      this.selecionado = event;
      console.log('selecionando ' + event);
      this.destino = event;
      this.checarAlgumSelecionado(event);
    }
    this.destinoSelecionado = event;
  }

  checarAlgumSelecionado(selecionando: string){
    let cards: CardViagemComponent[] = this.cardsViagem.toArray();
    cards.forEach(element =>{
      if(element.isActivated && element.cardTitle != selecionando){
        element.limpar();
      }
    });
  }

  fazerCompra() {
    console.log("Nome do passageiro: " + this.nome);
    console.log("Destino do passageiro: " + this.destino);
    console.log("Partida do passageiro: " + this.partida);
    console.log("Selecionando: " + this.isAnySelected);
  }

}

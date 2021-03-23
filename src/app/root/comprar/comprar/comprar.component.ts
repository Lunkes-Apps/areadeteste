import { element } from 'protractor';
import { CardViagemComponent } from './../card-viagem/card-viagem.component';
import { ViagemService } from './../../viagem/viagem/viagem.service';
import { Destino } from '../../viagem/viagem/destino';
import { Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Viagem } from '../../viagem/viagem/viagem';
import { Router } from '@angular/router';
import { Percurso } from '../../viagem/viagem/percurso';


@Component({
  selector: 'lnks-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.scss']
})
export class ComprarComponent implements OnInit {
  @ViewChildren(CardViagemComponent) cardsViagem: QueryList<CardViagemComponent>;
  mensagem: string = 'Selecione o local do Destino';
  partidaSelecionada = false;
  destinos: Destino[] = [];
  itens: string[] = [];

  isAnySelected: boolean = false;
  destinoFoiSelecionado: boolean = false;

  nome: string;
  destino: string;
  partida: string;
  destinoSelecionado: string = "";
  selecionando: string = "";
  selecionado: string;
  constructor(private http: ViagemService, private router: Router) { }

  ngOnInit(): void {
    this.http.getDestino()
      .subscribe(
        destinos => {
          this.destinos = destinos
          this.itens = this.gerarCidades(destinos);
          // console.log(this.itens)
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

  checarAlgumSelecionado(selecionando: string) {
    let cards: CardViagemComponent[] = this.cardsViagem.toArray();
    cards.forEach(element => {
      if (element.cardTitle != selecionando) {
        element.limpar();
      }
    });
  }

  validarPedido(viagem: Viagem) {
    if (viagem.destino && viagem.partida && viagem.passageiro && viagem.destino != viagem.partida) {
      viagem.data = new Date();
      return viagem;
    }
    else return undefined;
  }

  async fazerCompra() {

    let viagem: Viagem = {
      destino: this.destino,
      partida: this.partida,
      passageiro: this.nome,
      data: new Date()
    }

    viagem = this.validarPedido(viagem)
    console.log(viagem);

    if (viagem) {
      this.http.getDistancia(viagem.partida, viagem.destino)
        .subscribe(elements => {
          console.log('inicio');
          viagem.distancia = parseFloat(elements[0].distancia);
          viagem.valor = (viagem.distancia * 0.87).toFixed(2);
          this.http.setViagem(viagem)
            .subscribe(
              viagem => {
                console.log("foi salvo")
                console.log(viagem)
                this.router.navigate(['/viagem']);
              },
              erro => console.log(erro)
            );
        },
          erro => console.log(erro)
        );
    }
  }

}

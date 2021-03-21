import { ViagemService } from './../viagem/viagem.service';
import { Viagem } from './../viagem/viagem';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lnks-viagem-list',
  templateUrl: './viagem-list.component.html',
  styleUrls: ['./viagem-list.component.scss']
})
export class ViagemListComponent implements OnInit {

  viagens: Viagem[] =[];

  constructor(private activateRoute: ActivatedRoute) {}
  

  ngOnInit(): void {
    this.viagens = this.activateRoute.snapshot.data.viagens;
  }

}

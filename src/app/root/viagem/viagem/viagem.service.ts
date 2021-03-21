import { Destino } from './destino';
import { Viagem } from './viagem';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViagemService {

  constructor(private http: HttpClient) { }

  getViagens(){
    return this.http.get<Viagem[]>('http://localhost:3001/viagens');
  }

  getDestino(){
    return this.http.get<Destino[]>('http://localhost:3001/destinos');
  }  

}

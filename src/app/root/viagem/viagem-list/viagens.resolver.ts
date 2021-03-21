import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Viagem } from '../viagem/viagem';
import { ViagemService } from './../viagem/viagem.service';


@Injectable({providedIn: 'root'})
export class ViagensResolver implements Resolve<Observable<Viagem[]>>{

    constructor(private viagemService: ViagemService){}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Viagem[]> | Observable<Observable<Viagem[]>> | Promise<Observable<Viagem[]>> {
        return this.viagemService.getViagens();
    }
}
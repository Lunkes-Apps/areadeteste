import { ViagensResolver } from './root/viagem/viagem-list/viagens.resolver';
import { PageNotFoundComponent } from './root/error/page-not-found/page-not-found.component';
import { HomeComponent } from './root/home/home/home.component';
import { ComprarComponent } from './root/comprar/comprar/comprar.component';
import { ViagemListComponent } from './root/viagem/viagem-list/viagem-list.component';
import { ViagemComponent } from './root/viagem/viagem/viagem.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavbarComponent } from './root/navbar/navbar/navbar.component';

const routes: Routes = [
  {
     path: 'home', 
     component: HomeComponent 
  },
  { 
    path: 'viagem',
    component: ViagemListComponent,
    resolve: {
      viagens: ViagensResolver
    } 
  },
  { 
    path: 'comprar', 
    component: ComprarComponent 
  },
  { path: '**',
    component: 
    PageNotFoundComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

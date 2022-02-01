import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { VerHeroeComponent } from './components/ver-heroe/ver-heroe.component';


@NgModule({
  declarations: [
    HeroesComponent,
    VerHeroeComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }

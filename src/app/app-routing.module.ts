import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'home',
    loadChildren: ()=> import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path:'mockup',
    loadChildren: ()=> import('./mockup/mockup.module').then( m=> m.MockupModule)
  },
  {
    path:'heroes',
    loadChildren: ()=> import('./heroes/heroes.module').then( m=> m.HeroesModule)
  },
  {
    path:'**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

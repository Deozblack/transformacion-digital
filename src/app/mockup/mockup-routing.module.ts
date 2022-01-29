import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MockupComponent } from './pages/mockup/mockup.component';

const routes: Routes = [
  {
    path:'',
    component:MockupComponent,
    children:[
      {
        path:'mockup', component:MockupComponent,
      },
      {
       path:'**', redirectTo: ''
     }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MockupRoutingModule { }

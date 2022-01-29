import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MockupRoutingModule } from './mockup-routing.module';
import { SeccionBannerComponent } from './components/seccion-banner/seccion-banner.component';
import { SeccionBottomComponent } from './components/seccion-bottom/seccion-bottom.component';
import { SeccionFormularioComponent } from './components/seccion-formulario/seccion-formulario.component';
import { SeccionTemasComponent } from './components/seccion-temas/seccion-temas.component';
import { SeccionTopComponent } from './components/seccion-top/seccion-top.component';
import { SeccionMtroRosalinoComponent } from './components/seccion-mtro-rosalino/seccion-mtro-rosalino.component';
import { SeccionEventoGratuitoComponent } from './components/seccion-evento-gratuito/seccion-evento-gratuito.component';
import { MockupComponent } from './pages/mockup/mockup.component';




@NgModule({
  declarations: [
    MockupComponent,
    SeccionBannerComponent,
    SeccionBottomComponent,
    SeccionFormularioComponent,
    SeccionTemasComponent,
    SeccionTopComponent,
    SeccionMtroRosalinoComponent,
    SeccionEventoGratuitoComponent
  ],
  imports: [
    CommonModule,
    MockupRoutingModule
  ],
  exports:[MockupComponent]
})
export class MockupModule { }

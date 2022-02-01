import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MockupRoutingModule } from './mockup-routing.module';
import { SeccionBannerComponent } from './components/seccion-banner/seccion-banner.component';
import { SeccionBottomComponent } from './components/seccion-bottom/seccion-bottom.component';
import { SeccionFormularioComponent } from './components/seccion-formulario/seccion-formulario.component';
import { SeccionTemasComponent } from './components/seccion-temas/seccion-temas.component';
import { SeccionMtroRosalinoComponent } from './components/seccion-mtro-rosalino/seccion-mtro-rosalino.component';
import { SeccionEventoGratuitoComponent } from './components/seccion-evento-gratuito/seccion-evento-gratuito.component';
import { SeccionVideoComponent } from './components/seccion-video/seccion-video.component';
import { MockupComponent } from './pages/mockup/mockup.component';




@NgModule({
  declarations: [
    MockupComponent,
    SeccionBannerComponent,
    SeccionBottomComponent,
    SeccionFormularioComponent,
    SeccionTemasComponent,
    SeccionMtroRosalinoComponent,
    SeccionEventoGratuitoComponent,
    SeccionVideoComponent
  ],
  imports: [
    CommonModule,
    MockupRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[MockupComponent]
})
export class MockupModule { }

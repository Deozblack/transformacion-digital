import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seccion-temas',
  templateUrl: './seccion-temas.component.html',
  styleUrls: ['./seccion-temas.component.css']
})
export class SeccionTemasComponent implements OnInit {
  estrategia:string = '../../../../assets/mockup/imagenes/Estrategia.png'
  tecnologias:string = '../../../../assets/mockup/imagenes/Tecnología.png'
  analisis:string = '../../../../assets/mockup/imagenes/Análisis-de-procesos.png'
  ruta:string = '../../../../assets/mockup/imagenes/Hoja-de-ruta.png'
  hacer:string = '../../../../assets/mockup/imagenes/Qué-hacer.png'
  constructor() { }

  ngOnInit(): void {
  }

}

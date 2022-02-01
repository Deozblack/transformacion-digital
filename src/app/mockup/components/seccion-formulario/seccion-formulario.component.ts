import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-seccion-formulario',
  templateUrl: './seccion-formulario.component.html',
  styleUrls: ['./seccion-formulario.component.css']
})
export class SeccionFormularioComponent implements OnInit {

  entidades:any[] = ['Aguascalientes', 'Baja California', 'Baja California Sur', 'Campeche', 'Coahuila de Zaragoza', 'Colima', 'Chiapas', 'Chihuahua', 'Ciudad de México', 'Durango', 'Guanajuato', 'Guerrero', 'Hidalgo', 'Jalisco', 'México', 'Michoacán', 'Morelos', 'Nayarit', 'Nuevo León', 'Oaxaca', 'Puebla', 'Querétaro', 'Quintana Roo', 'San Luis Potosí', 'Sinaloa', 'Sonora', 'Tabasco', 'Tamaulipas', 'Tlaxcala', 'Veracruz', 'Yucatán', 'Zacatecas'];


  miFormulario: FormGroup = this.fb.group({
    nombre: [,[Validators.required]],
    apellido: [,[Validators.required]],
    phone: [,[Validators.required]],
    empresa: [,[Validators.required]],
    cargo: [,[Validators.required]],
    email: [,[Validators.required]],
    entidad: [,[Validators.required]],
  });  



  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario = this.fb.group({
      nombre: [,[Validators.required]],
      apellido: [,[Validators.required]],
      phone: [,[Validators.required]],
      empresa: [,[Validators.required]],
      cargo: [,[Validators.required]],
      email: [,[Validators.required]],
      entidad: [,[Validators.required]],
    }); 
  
  }
  
  enviarFormulario(){
    const {nombre, email} = this.miFormulario.value;
      if(this.miFormulario.invalid == true){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Parece que no has llenado todos los campos'
        })
      }else{
        Swal.fire(
          'Registro exitoso!',
          `Gracias por registrarte ${nombre} se envio un correo de confirmacion a: ${email}`,
          'success'
        )
      }
  }
}

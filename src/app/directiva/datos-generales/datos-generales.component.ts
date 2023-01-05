import { Component } from '@angular/core';
import { DatosGenerales } from '../interfaces/datos-generales.interface';

@Component({
  selector: 'app-datos-generales',
  templateUrl: './datos-generales.component.html',
  styleUrls: ['./datos-generales.component.css']
})
export class DatosGeneralesComponent {

  datosArreglo: DatosGenerales[] =[
    {
      nombre:'Hector',
      apellido:'Lavoe',
      edad: 34
    },
    {
      nombre:'Victor',
      apellido:'Manuelle',
      edad: 42
    }
  ]


  datos: DatosGenerales={
    nombre:'',
    apellido:'',
    edad:0
  }

  // funcion para agregar datos y mostrarlos
  validar(){
    if(this.datos.nombre.trim().length==0){
      return;
    }else if(this.datos.edad>18){
      this.datosArreglo.push(this.datos);
      this.datos={
        nombre:'',
        apellido:'',
        edad:0
      }
    }
    console.log(this.datosArreglo)
  }
}

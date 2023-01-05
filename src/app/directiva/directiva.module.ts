import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatosGeneralesComponent } from './datos-generales/datos-generales.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DatosGeneralesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    DatosGeneralesComponent
  ]
})
export class DirectivaModule { }

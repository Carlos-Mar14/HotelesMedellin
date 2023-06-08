import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
import { ReservasService } from '../services/reservas.service';

@Component({
  selector: 'app-formularioreserva',
  templateUrl: './formularioreserva.component.html',
  styleUrls: ['./formularioreserva.component.css']
})
export class FormularioreservaComponent {

  public formularioReserva: FormGroup
  public datosformulario:any[]=[]

  public constructor(public constructorReserva:FormBuilder){
    this.formularioReserva=this.inicializarFormulario()
  }

  public inicializarFormulario():FormGroup{
    return this.constructorReserva.group({
      nombreCliente:[''],
      ApellidoCliente:[''],
      telefonoCliente:[''],
      fechaInicioReserva:[''],
      fechaFinReserva:[''],
      numeroPersonas:[''],
      idHabitacion:[''],
      costo:[''],
    })
  }

  public procesarDatos():void{
    let datos=this.formularioReserva.value
    console.log(datos)
  }
}

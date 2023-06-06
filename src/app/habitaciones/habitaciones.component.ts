import { Component } from '@angular/core';
import { HabitacionesService } from '../services/habitaciones.service';
import { Habitacion } from '../interfaces/Habitacion';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css']
})
export class HabitacionesComponent {

  public habitaciones?:Habitacion[]=[]

  public constructor(public servicio:HabitacionesService){
    this.servicio.buscarhabitaciones().subscribe((respuesta)=>{
      this.habitaciones=respuesta.habitaciones
    })
  }
}

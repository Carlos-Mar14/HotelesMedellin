import { Component, OnInit } from '@angular/core';
import { Reserva } from '../interfaces/Reserva';
import { ReservasService } from '../services/reservas.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent {

  test: any

  public reservas:Reserva[]=[]
  public constructor(public servicio:ReservasService){ }

  ngOnInit():void{
    this.servicio.buscarreservas().subscribe((respuesta)=>{
      this.test = respuesta.habitaciones
      console.log(respuesta)
      this.reservas=respuesta.reservas
    })
  }
}

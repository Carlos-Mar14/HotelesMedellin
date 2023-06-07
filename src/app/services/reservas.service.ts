import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  public url:string="https://api-hoteles-viernes.vercel.app/"

  constructor(public servicioReserva:HttpClient) { }

  public buscarreservas():Observable<any>{
    let urlServicio:string=this.url+"buscarreservas"
    return this.servicioReserva.get(urlServicio)
  }

  public crearreserva(datos:any):Observable<any>{
    let urlServicio:string=this.url+"crearreserva"
    return this.servicioReserva.post(urlServicio,datos)
  }
}

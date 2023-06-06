import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class HabitacionesService {

  public url:string="https://api-hoteles-viernes.vercel.app/"

  constructor(public servicioHabitacion:HttpClient) { }

  public buscarhabitaciones():Observable<any>{
    let urlServicio:string=this.url+"buscarhabitaciones"
    return this.servicioHabitacion.get(urlServicio)
  }

  public registrarhabitacion(datos:any):Observable<any>{
    let urlServicio:string=this.url+"registrarhabitacion"
    return this.servicioHabitacion.post(urlServicio,datos)
  }



  public buscarhabitacion(){}
  public actualzarhabitacion(){}
}

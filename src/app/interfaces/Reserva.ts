export interface Reserva{
    nombreCliente:string,
    apellidoCliente:string,
    telefono:number,
    fechaInicio:Date,
    fechaFin:Date,
    cantidadPersona:number,
    idHabitacion:string,
    costoReserva ? :number
}
export interface Reserva{
    nombreCliente:string,
    ApellidoCliente:string,
    telefonoCliente:number,
    fechaInicioReserva:Date,
    fechaFinReserva:Date,
    numeroPersonas:number,
    idHabitacion:string,
    costo ? :number
}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { DescriptionComponent } from './description/description.component';
import { FooterComponent } from './footer/footer.component';
import { HabitacionesComponent } from './habitaciones/habitaciones.component';
import { FormulariohabitacionComponent } from './formulariohabitacion/formulariohabitacion.component';
import { FormularioreservaComponent } from './formularioreserva/formularioreserva.component';
import { ReservaComponent } from './reserva/reserva.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    DescriptionComponent,
    FooterComponent,
    HabitacionesComponent,
    FormulariohabitacionComponent,
    FormularioreservaComponent,
    ReservaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

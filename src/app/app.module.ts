import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PerfilComponent } from './perfil/perfil.component';
import { InicioComponent } from './inicio/inicio.component';
import { OpcionesComponent } from './opciones/opciones.component';
import { DetalleServicioComponent } from './detalle-servicio/detalle-servicio.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BilleteraComponent } from './billetera/billetera.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    ServiciosComponent,
    PerfilComponent,
    InicioComponent,
    OpcionesComponent,
    DetalleServicioComponent,
    BilleteraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

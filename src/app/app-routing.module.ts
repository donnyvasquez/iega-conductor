import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleServicioComponent } from './detalle-servicio/detalle-servicio.component';
import { InicioComponent } from './inicio/inicio.component';
import { OpcionesComponent } from './opciones/opciones.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { BilleteraComponent } from './billetera/billetera.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'billetera', component: BilleteraComponent },
  { path: 'opciones', component: OpcionesComponent },
  { path: 'detalle-servicio/:id', component: DetalleServicioComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

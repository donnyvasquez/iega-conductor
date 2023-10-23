import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent  implements OnInit{
  usuario!: string;
  contrasena!: string;
  botonDesabilitado!: boolean;
  usuarioLogeado!: boolean;

  ngOnInit(){
    this.usuario = "dvasquez@donnyvasquez.com";
    this.contrasena = "";
    this.botonDesabilitado = false;
    this.validarCampos();

    const usuarioLogeado = localStorage.getItem('usuarioLogeado');

    if (usuarioLogeado === 'true') {
      // Redirige al componente de servicios si el usuario está logeado
      this.router.navigate(['/servicios']);
    }

  }


  constructor(private router: Router) {}

  validarCampos() {
    // Verificar si los campos de usuario y contraseña no están vacíos
    if (this.usuario == '' || this.contrasena == '') {
      this.botonDesabilitado = true;
    } else {
      this.botonDesabilitado = false;
    }
  }

  iniciarSesion() {
    // Realizar aquí la lógica de autenticación si es necesario
    localStorage.setItem('usuarioLogeado', 'true');
    // Redirigir al componente de Servicios si los campos están llenos
    if (!this.botonDesabilitado) {
      this.router.navigate(['/servicios']);
    }
  }
}

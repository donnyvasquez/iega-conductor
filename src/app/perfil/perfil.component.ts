import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  usuario = {
    nombreCompleto: "Juan Pérez",
    calificacion: 3,
    fotoUrl: "https://via.placeholder.com/150",
    telefono: "(123) 456-7890",
    email: "usuario@example.com",
    estado: "Activo",
  };
  constructor() { }

  ngOnInit(): void {
  }

}

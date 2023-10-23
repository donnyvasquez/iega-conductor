import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
// Definición de la estructura de objeto de servicio
interface Servicio {
  id: number;
  barrioOrigen: string;
  barrioDestino: string;
  valor: number;
  nombreUsuario: string;
  nombresUsuario: string;
  apellidosUsuario: string;
  fecha: string;
}
@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {
  closeResult!: string;
  servicios: Servicio[] = [
    {
      id: 1,
      barrioOrigen: 'Barrio A',
      barrioDestino: 'Barrio B',
      valor: 25.0,
      nombreUsuario: 'Usuario 1',
      nombresUsuario: 'John',
      apellidosUsuario: 'Smith',
      fecha: '2023-10-25'
    },
    {
      id: 2,
      barrioOrigen: 'Barrio C',
      barrioDestino: 'Barrio D',
      valor: 30.0,
      nombreUsuario: 'Usuario 2',
      nombresUsuario: 'Maria',
      apellidosUsuario: 'Gonzalez',
      fecha: '2023-10-26'
    },
    // Agregamos más registros con nombres y apellidos reales
    {
      id: 3,
      barrioOrigen: 'Barrio E',
      barrioDestino: 'Barrio F',
      valor: 35.0,
      nombreUsuario: 'Usuario 3',
      nombresUsuario: 'Jairo',
      apellidosUsuario: 'Rodriguez',
      fecha: '2023-10-27'
    },
    {
      id: 4,
      barrioOrigen: 'Barrio G',
      barrioDestino: 'Barrio H',
      valor: 40.0,
      nombreUsuario: 'Usuario 4',
      nombresUsuario: 'Mariana',
      apellidosUsuario: 'Lopez',
      fecha: '2023-10-28'
    },
    {
      id: 5,
      barrioOrigen: 'Barrio I',
      barrioDestino: 'Barrio J',
      valor: 45.0,
      nombreUsuario: 'Usuario 5',
      nombresUsuario: 'Carlos',
      apellidosUsuario: 'Martinez',
      fecha: '2023-10-29'
    },
    {
      id: 6,
      barrioOrigen: 'Barrio K',
      barrioDestino: 'Barrio L',
      valor: 50.0,
      nombreUsuario: 'Usuario 6',
      nombresUsuario: 'Isabella',
      apellidosUsuario: 'Perez',
      fecha: '2023-10-30'
    },
    {
      id: 7,
      barrioOrigen: 'Barrio M',
      barrioDestino: 'Barrio N',
      valor: 55.0,
      nombreUsuario: 'Usuario 7',
      nombresUsuario: 'Daniel',
      apellidosUsuario: 'Hernandez',
      fecha: '2023-10-31'
    },
    {
      id: 8,
      barrioOrigen: 'Barrio O',
      barrioDestino: 'Barrio P',
      valor: 60.0,
      nombreUsuario: 'Usuario 8',
      nombresUsuario: 'Valeria',
      apellidosUsuario: 'Diaz',
      fecha: '2023-11-01'
    },
    {
      id: 9,
      barrioOrigen: 'Barrio Q',
      barrioDestino: 'Barrio R',
      valor: 65.0,
      nombreUsuario: 'Usuario 9',
      nombresUsuario: 'Jhonny',
      apellidosUsuario: 'Mendez',
      fecha: '2023-11-02'
    },
    {
      id: 10,
      barrioOrigen: 'Barrio S',
      barrioDestino: 'Barrio T',
      valor: 70.0,
      nombreUsuario: 'Usuario 10',
      nombresUsuario: 'Mairon',
      apellidosUsuario: 'Lara',
      fecha: '2023-11-03'
    }
  ];
  modalRef: NgbModalRef | undefined;
  mostrarTomarServicio = true;
  mostrarIrPorElUsuario = false;
  mostrarLlevarAlUsuario = false;
  mostrarLlamarUsuario = false;
  mostrarFinalizar = false;
  servicio: any;
  servicioActual!: Servicio;
  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    console.log('Aún no uso este OnInit');
  }

  remover(servicio: Servicio) {
    // Encuentra el índice del servicio a remover
    const index = this.servicios.findIndex(s => s.id === servicio.id);

    if (index !== -1) {
      // Remueve el servicio de la matriz de servicios
      this.servicios.splice(index, 1);

      // Aquí debes agregar la lógica para actualizar LocalStorage si es necesario
    }
  }

  openFullscreen(content: any, index: number) {
    this.servicioActual = this.servicios[index];
    this.modalRef = this.modalService.open(content, { fullscreen: true });
  }

  // ... Otras declaraciones y datos del componente ...

  tomarServicio() {
    this.mostrarTomarServicio = false;
    this.mostrarIrPorElUsuario = true;
  }

  irPorUsuario() {
    this.mostrarIrPorElUsuario=false;
    this.mostrarLlamarUsuario = true;
  }

  llamarUsuario() {
    this.mostrarLlamarUsuario = false;
    this.mostrarLlevarAlUsuario=true;
  }

  llevarAlUsuario(){
    this.mostrarLlevarAlUsuario=false;
    this.mostrarFinalizar = true;
  }

  finalizarServicio() {
    // Realiza acciones relacionadas con finalizar el servicio (por ejemplo, guardar reseña y calificación)
    if (this.modalRef) {
      // Realiza acciones relacionadas con finalizar el servicio (por ejemplo, guardar reseña y calificación)
      this.modalRef.close();
    }
    this.remover(this.servicioActual);
    setTimeout(() => {

    this.mostrarTomarServicio = true;
    this.mostrarIrPorElUsuario = false;
    this.mostrarLlamarUsuario = false;
    this.mostrarFinalizar = false;
    this.mostrarFinalizar = false;
  }, 500);
  }
}


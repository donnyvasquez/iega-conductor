import { Component, OnInit } from '@angular/core';

interface Movimiento {
  tipoDeMovimiento: 'ingreso' | 'egreso';
  valorDelMovimiento: number;
  detalleDelMovimiento: string;
}

@Component({
  selector: 'app-billetera',
  templateUrl: './billetera.component.html',
  styleUrls: ['./billetera.component.scss']
})
export class BilleteraComponent implements OnInit {
  movimientos: Movimiento[] = [
  { tipoDeMovimiento: 'ingreso', valorDelMovimiento: 100, detalleDelMovimiento: 'Recarga' },
  { tipoDeMovimiento: 'egreso', valorDelMovimiento: 25, detalleDelMovimiento: 'Resumen del servicio 1' },
  { tipoDeMovimiento: 'ingreso', valorDelMovimiento: 50, detalleDelMovimiento: 'Recarga' },
  { tipoDeMovimiento: 'egreso', valorDelMovimiento: 20, detalleDelMovimiento: 'Resumen del servicio 2' },
  { tipoDeMovimiento: 'ingreso', valorDelMovimiento: 75, detalleDelMovimiento: 'Recarga' },
  { tipoDeMovimiento: 'egreso', valorDelMovimiento: 30, detalleDelMovimiento: 'Resumen del servicio 3' },
  { tipoDeMovimiento: 'ingreso', valorDelMovimiento: 120, detalleDelMovimiento: 'Recarga' },
  { tipoDeMovimiento: 'egreso', valorDelMovimiento: 35, detalleDelMovimiento: 'Resumen del servicio 4' },
  { tipoDeMovimiento: 'ingreso', valorDelMovimiento: 80, detalleDelMovimiento: 'Recarga' },
  { tipoDeMovimiento: 'egreso', valorDelMovimiento: 40, detalleDelMovimiento: 'Resumen del servicio 5' },
  { tipoDeMovimiento: 'ingreso', valorDelMovimiento: 60, detalleDelMovimiento: 'Recarga' },
  { tipoDeMovimiento: 'egreso', valorDelMovimiento: 22, detalleDelMovimiento: 'Resumen del servicio 6' },
  { tipoDeMovimiento: 'ingreso', valorDelMovimiento: 90, detalleDelMovimiento: 'Recarga' },
  { tipoDeMovimiento: 'egreso', valorDelMovimiento: 28, detalleDelMovimiento: 'Resumen del servicio 7' },
  { tipoDeMovimiento: 'ingreso', valorDelMovimiento: 110, detalleDelMovimiento: 'Recarga' },
  { tipoDeMovimiento: 'egreso', valorDelMovimiento: 45, detalleDelMovimiento: 'Resumen del servicio 8' },
  { tipoDeMovimiento: 'ingreso', valorDelMovimiento: 70, detalleDelMovimiento: 'Recarga' },
  { tipoDeMovimiento: 'egreso', valorDelMovimiento: 50, detalleDelMovimiento: 'Resumen del servicio 9' },
  { tipoDeMovimiento: 'ingreso', valorDelMovimiento: 85, detalleDelMovimiento: 'Recarga' },
  { tipoDeMovimiento: 'egreso', valorDelMovimiento: 33, detalleDelMovimiento: 'Resumen del servicio 10' }
];


  constructor() { }

  ngOnInit(): void {
  }
}

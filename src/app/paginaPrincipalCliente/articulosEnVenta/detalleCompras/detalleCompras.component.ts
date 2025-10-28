import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DetalleCompraDTO } from '../../../models/DetalleCompraDTO';
import { CarritoServiceService } from '../../../Services/clienteServices/carritoService/carritoService.service';

@Component({
  selector: 'app-detalle-compras',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalleCompras.component.html',
  styleUrls: ['./detalleCompras.component.css']
})
export class DetalleComprasComponent implements OnInit {
  detalles: DetalleCompraDTO[] = [];
  cargando = false;
  errorMensaje = '';

  constructor(
    private carritoService: CarritoServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarDetalleCompras();
  }

  cargarDetalleCompras(): void {
    this.cargando = true;
    this.errorMensaje = '';
    this.carritoService.getDetalleCompras().subscribe({
      next: (data) => {
        this.detalles = data;
        this.cargando = false;
      },
      error: (error) => {
        console.error('Error en la petición:', error);
        this.errorMensaje = 'No se pudo obtener el detalle de compras. Intenta de nuevo más tarde.';
        this.cargando = false;
      }
    });
  }

  calcularTotalCompra(detalle: DetalleCompraDTO): number {

    return detalle.precioTotal ?? detalle.precioUnitario * detalle.cantidad;
  }

  calcularGranTotal(): number {
    return this.detalles.reduce((acc, item) => acc + this.calcularTotalCompra(item), 0);
  }

  regresarCarrito(): void {
    this.router.navigate(['/cliente/mi-carreta']);
  }
}

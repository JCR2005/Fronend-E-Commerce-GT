import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DetalleCompraDTO } from '../../models/DetalleCompraDTO';
import { LoginServiceService } from '../../Services/logisticaServices/loginService.service';
@Component({
  selector: 'app-visualizar-pedidos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './visualizar-pedidos.component.html',
  styleUrls: ['./visualizar-pedidos.component.css']
})
export class VisualizarPedidosComponent implements OnInit {
  detalles: DetalleCompraDTO[] = [];
  cargando = false;
  errorMensaje = '';

  constructor(private router: Router, private loginService: LoginServiceService) {}

  ngOnInit(): void {
    this.cargarPedidos();
  }

  cargarPedidos(): void {
    this.cargando = true;
    this.errorMensaje = '';

    this.loginService.getDetalleCompras().subscribe({
      next: (data) => {
        this.detalles = data;
        this.cargando = false;
      },
      error: (error) => {
        console.error('Error en la petición:', error);
        this.errorMensaje = 'No se pudo obtener el listado de pedidos. Inténtalo nuevamente.';
        this.cargando = false;
      }
    });
  }

  regresar(): void {
    this.router.navigate(['/logistica/home']);
  }

  calcularTotalCompra(detalle: DetalleCompraDTO): number {
    return detalle.precioTotal ?? detalle.precioUnitario * detalle.cantidad;
  }

  calcularGranTotal(): number {
    return this.detalles.reduce((acc, item) => acc + this.calcularTotalCompra(item), 0);
  }
}

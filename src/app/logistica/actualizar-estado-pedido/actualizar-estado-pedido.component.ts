import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-estado-pedido',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './actualizar-estado-pedido.component.html',
  styleUrls: ['./actualizar-estado-pedido.component.css']
})
export class ActualizarEstadoPedidoComponent {
  constructor(private router: Router) {}

  regresar(): void {
    this.router.navigate(['/logistica/home']);
  }
}

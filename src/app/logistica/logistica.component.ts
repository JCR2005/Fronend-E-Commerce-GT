import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthServiceService } from '../Segurity/authService/authService.service';
@Component({
  selector: 'app-logistica',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logistica.component.html',
  styleUrls: ['./logistica.component.css']
})
export class LogisticaComponent {
  constructor(private router: Router, private authService: AuthServiceService) {}

  irVisualizarPedidos(): void {
    this.router.navigate(['/logistica/visualizar-pedidos']);
  }

 cerrarSesion(){
   const confirmado = confirm("¿Estás seguro de que deseas cerrar la sesión?");

    if (confirmado) {
      this.authService.logout();
    }
  }
  irActualizarEstado(): void {
    this.router.navigate(['/logistica/actualizar-estado-pedido']);
  }

  regresarInicio(): void {
    this.router.navigate(['/cliente/home']);
  }
}

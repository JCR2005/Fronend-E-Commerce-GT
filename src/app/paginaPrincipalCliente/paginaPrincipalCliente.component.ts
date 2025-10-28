import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthServiceService } from '../Segurity/authService/authService.service';

@Component({
  selector: 'app-paginaPrincipalCliente',
  templateUrl: './paginaPrincipalCliente.component.html',
  styleUrls: ['./paginaPrincipalCliente.component.scss'],
  imports:[CommonModule]
})
export class PaginaPrincipalClienteComponent{



  constructor(private router:Router, private authService: AuthServiceService) { }

  mostrarBotonHome=false
  mostrarPanelCompraArticulos: boolean =false;
  mostrarPanelVentaArticulos: boolean =false;
  

  ngOnInit() {

    this.mostrarPanelCompraArticulos=true;
  }

  cerrarSesion(){
   const confirmado = confirm("¿Estás seguro de que deseas cerrar la sesión?");

    if (confirmado) {
      this.authService.logout();
    }
  }

  cerrarPaneles(){
    this.mostrarPanelCompraArticulos=false;
    this.mostrarPanelVentaArticulos=false;
    this.mostrarBotonHome=false;

  }

  abrirPanelCompra(){
    this.router.navigate(['/cliente/portalDeCompras']);
  }

  abrirPanelVenta(){
    this.router.navigate(['/cliente/portalDeVentas']);
  }
}

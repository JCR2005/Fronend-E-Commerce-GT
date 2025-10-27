import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VentasClienteService } from '../../../Services/clienteServices/publicarArticulo/ventas-cliente.service';
import { CommonModule } from '@angular/common';
import { ArticleDTO } from '../../../models/ArticleDTO';

@Component({
  selector: 'app-ver-mis-articulo-publicados',
  imports: [CommonModule],
  templateUrl: './ver-mis-articulo-publicados.component.html',
  styleUrl: './ver-mis-articulo-publicados.component.scss'
})
export class VerMisArticuloPublicadosComponent {

  constructor(private router:Router, private ventasClientes: VentasClienteService){}

  listaArticulosRevisando: boolean = false;
  listaArticulosAprobados: boolean = false;
  listaArticulosRechazados: boolean = false;

  mostrarArticulosEnRevision() {
    this.ocultarArticulos();
    this.listaArticulosRevisando = true;
    this.pedirArticulosEnRevision();
  }

  ocultarArticulos(){
   this.listaArticulosRevisando = false;
    this.listaArticulosAprobados = false;
    this.listaArticulosRechazados = false;

  }
  articulos: ArticleDTO[] = [];
  regresarHome() {
    this.router.navigate(['/cliente/portalDeVentas']);
  }




  pedirArticulosEnRevision() {
    this.ocultarArticulos();
    this.listaArticulosRevisando = true;
    this.ventasClientes.getArticulosPublicados('revisando').subscribe({
      next: (data) => {
      
        this.articulos = data;
      },
      error: (error) => {
        console.error('Error en la petición:', error);
      },
    });
  }

  pedirArticulosAprobados() {
    this.ocultarArticulos();
    this.listaArticulosAprobados = true;
    this.ventasClientes.getArticulosPublicados('aprobado').subscribe({
      next: (data) => {
      
        this.articulos = data;
      },
      error: (error) => {
        console.error('Error en la petición:', error);
      },
    });
  }

   pedirArticulosRechazados() {
    this.ocultarArticulos();
    this.listaArticulosRechazados = true;
    this.ventasClientes.getArticulosPublicados('rechazado').subscribe({
      next: (data) => {
      
        this.articulos = data;
      },
      error: (error) => {
        console.error('Error en la petición:', error);
      },
    });
  }
}

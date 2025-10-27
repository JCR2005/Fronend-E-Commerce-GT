import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SolicitudServiceService } from '../../Services/moderadorServices/solicitudService/solicitudService.service';
import { VerificacionServiceService } from '../../Services/moderadorServices/verificacionService/verificacionService.service';  
@Component({
  selector: 'app-verificacion-articulos',
  templateUrl: './verificacion-articulos.component.html',
  styleUrls: ['./verificacion-articulos.component.css'],
  imports: [ CommonModule, FormsModule],
  standalone:true
})
export class VerificacionArticulosComponent implements OnInit {

  constructor(private router:Router,private route: ActivatedRoute, private solicitudService: SolicitudServiceService, private verificacionArticuloService: VerificacionServiceService) { }

  cargando: boolean = false;
  id!: number;

  nombreArticulo: string = "Nombre del Articulo";
  fechaCreacion: string = "";
  descripcionArticulo: string = "Descripcion del Articulo";
  precioArticulo: number = 100.00;
  stockArticulo: number = 10;
  nombreCliente: string = "Nombre del Cliente";
  estadoArticulo: string = "";
  categoriasArticulo: string[] = [];

    imagenURL: string | ArrayBuffer | null = null;

  ngOnInit() {
     this.id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('ID recibido:', this.id);
    this.solicitudService.getArticulo(this.id).subscribe({
      next: (data) => {
        this.id = data.idArticulo;
        this.nombreArticulo = data.nombre;
        this.descripcionArticulo = data.descripcion;
        this.precioArticulo = data.precio;
        this.stockArticulo = data.stock;
        this.nombreCliente = data.nombreCliente;
        this.estadoArticulo = data.estado;
        this.fechaCreacion = data.fecha;
        this.imagenURL = 'data:image/png;base64,' + data.imagenB64;
        this.categoriasArticulo = data.nombresCategorias;

      },
      error: (error) => {
        console.error('Error en la petición:', error);
      },
    });

  }
  regresarHome() {
    this.router.navigate(['/moderador/procesarSolicitudVenta']);
  }


  aprobarArticulo() {
    this.cargando = true;
    this.verificacionArticuloService.enviar({ idArticulo: this.id, estatus: true }).subscribe({
      next: (data) => {
        alert('Artículo aprobado:'+data);
          this.cargando = false;
      },
      error: (error) => {
        console.error('Error al aprobar el artículo:', error);
      },
    });
    
  }

  rechazarArticulo() {

    this.cargando = true;
    this.verificacionArticuloService.enviar({ idArticulo: this.id, estatus: false }).subscribe({
      next: (data) => {
        alert('Artículo rechazado:'+data);
          this.cargando = false;
      },
      error: (error) => {
        console.error('Error al rechazar el artículo:', error);
      },
    });
    
  }
}

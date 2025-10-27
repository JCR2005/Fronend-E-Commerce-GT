import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListaArticulosService } from '../../Services/clienteServices/listaArticulosEnVenta/listaArticulos.service';
import { ArticleDTO } from '../../models/ArticleDTO';
import { FormsModule } from '@angular/forms';

import { CarritoServiceService } from '../../Services/clienteServices/carritoService/carritoService.service';
@Component({
  selector: 'app-articulosEnVenta',
  templateUrl: './articulosEnVenta.component.html',
  styleUrls: ['./articulosEnVenta.component.css'],
  imports: [ CommonModule,FormsModule],
  standalone:true
})
export class ArticulosEnVentaComponent implements OnInit {

  constructor(private router: Router, private listaArticulosService: ListaArticulosService, private carritoService: CarritoServiceService) { }

   
  cantidadArticulos:number=0;

  articulos: ArticleDTO[] = [];
  ngOnInit() {

    this.listaArticulosService.getArticulos('aprobado').subscribe({
      next: (data) => {
        this.articulos = data;
      },
      error: (error) => {
        console.error('Error en la petición:', error);
      },
    });


      this.carritoService.getCantidadArticulos().subscribe({
          next: (data) => {
        this.cantidadArticulos = data;
      },
      error: (error) => {
        console.error('Error en la petición:', error);
      },
      }); 
  }

  

  obtenerImagen(imagenB64: string): string {
    return 'data:image/png;base64,' + imagenB64;
  }

  regresarHome() {

    this.router.navigate(['/cliente/home'])
  }


  selectedCategorias: number[] = [];
  categoriasDisponibles = [
    { value: 1, label: 'Tecnología y Electrónica' },
    { value: 2, label: 'Moda y Accesorios' },
    { value: 3, label: 'Hogar y Decoración' },
    { value: 4, label: 'Deportes y Fitness' },
    { value: 5, label: 'Automotriz y Vehículos' },
    { value: 6, label: 'Arte, Libros y Entretenimiento' },
    { value: 7, label: 'Salud y Belleza' },
    { value: 8, label: 'Juguetes y Bebés' },
    { value: 9, label: 'Servicios (No Productos Físicos)' },

    { value: 10, label: 'Condición: Nuevo' },
    { value: 11, label: 'Condición: Semi Nuevo' },
    { value: 12, label: 'Condición: Usado Bueno' },
    { value: 13, label: 'Condición: Usado con Detalle' },

    { value: 14, label: 'Oferta Especial' },
    { value: 15, label: 'Liquidación Final' },
    { value: 16, label: 'Envío Gratis' },
    { value: 17, label: 'Top Ventas' },
    { value: 18, label: 'Preventa' },

    { value: 19, label: 'Accesorios' },
    { value: 20, label: 'Repuestos / Piezas' },
    { value: 21, label: 'Artículo de Colección' },
    { value: 22, label: 'Hecho a Mano / Artesanal' },
    { value: 23, label: 'Producto Digital / Descargable' },
  ];

    onCategoryChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const val: number = parseInt(input.value, 10);
    alert('caTEGORYA');
    if (input.checked) {
      if (!this.selectedCategorias.includes(val))
        this.selectedCategorias.push(val);
    } else {
      const idx = this.selectedCategorias.indexOf(val);
      if (idx > -1) this.selectedCategorias.splice(idx, 1);
    }
  }

   verificarArticulo(id:number){
    console.log('ID a verificar:', id);
    this.router.navigate(['cliente/compra-articulo',id]);
  }

  irCarrito(){

    this.router.navigate(['/cliente/mi-carreta']);
  }
}

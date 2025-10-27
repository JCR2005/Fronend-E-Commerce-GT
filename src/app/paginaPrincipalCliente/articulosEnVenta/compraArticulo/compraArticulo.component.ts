import { Component, OnInit } from '@angular/core';
import { ListaArticulosService } from '../../../Services/clienteServices/listaArticulosEnVenta/listaArticulos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ArticleDTO } from '../../../models/ArticleDTO';
import { CarritoServiceService } from '../../../Services/clienteServices/carritoService/carritoService.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-compraArticulo',
  templateUrl: './compraArticulo.component.html',
  styleUrls: ['./compraArticulo.component.css'],
  imports: [CommonModule,FormsModule],
  standalone:true
})
export class CompraArticuloComponent implements OnInit {

  constructor(private servicio:ListaArticulosService,private router:Router,private  route:ActivatedRoute, private carritoService:CarritoServiceService) { }
cargando: boolean = false;
  id!: number;

  catidadArticulos:number=1;

descripcion: string = `Esta es una silla ergonómica de alta calidad,

diseñada para brindar comodidad durante largas jornadas de trabajo.

Su estructura ajustable y su diseño moderno la convierten

en una excelente opción para cualquier oficina.

Esta es una silla ergonómica de alta calidad,

diseñada para brindar comodidad durante largas jornadas de trabajo.

Su estructura ajustable y su diseño moderno la convierten

en una excelente opción para cualquier oficina.

Esta es una silla ergonómica de alta calidad,

diseñada para brindar comodidad durante largas jornadas de trabajo.

Su estructura ajustable y su diseño moderno la convierten

en una excelente opción para cualquier oficina.
`;

  articulo!: ArticleDTO;

  cantidadArticulos:number=0;
  ngOnInit() {
     this.id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('ID recibido:', this.id);
    this.servicio.getArticulo(this.id).subscribe({
      next: (data) => {
        this.articulo = data;
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


  addArticuloCarro(idArticulo:number){
    this.servicio.añadirArticuloCarrito(idArticulo, this.catidadArticulos).subscribe({
    next: (data) => {
      alert('Artículo añadido correctamente al carrito');
      window.location.reload();

    },
    error: (error) => {
      alert('Error al añadir al carrito: ' + error.message);
      window.location.reload();

    }
  });
  }

 blockNegativoDecimalSign(event: KeyboardEvent) {
  const forbiddenKeys = ['-', '+', '.', '\u00B4', 'Dead', 'DeadKey'];


  if (forbiddenKeys.includes(event.key)) {
    event.preventDefault();
  }
}

 regresarHome() {

    this.router.navigate(['/cliente/portalDeCompras'])
  }

  irCarrito(){

    this.router.navigate(['/cliente/mi-carreta']);
  }

}

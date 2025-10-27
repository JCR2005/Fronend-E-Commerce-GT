import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleDTO } from '../../models/ArticleDTO';
import { SolicitudServiceService } from '../../Services/moderadorServices/solicitudService/solicitudService.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-solicitudArticulos',
  templateUrl: './solicitudArticulos.component.html',
  styleUrls: ['./solicitudArticulos.component.css'],
  imports: [ CommonModule],
  standalone:true
})
export class solicitudArticulosComponent implements OnInit {

  constructor(private router: Router, private solicitudService: SolicitudServiceService) { }

  ngOnInit() {
    this.pedirArticulos();
  }

  articulos: ArticleDTO[] = [];
  pedirArticulos() {
    
    this.solicitudService.getArticulos('revisando').subscribe({
      next: (data) => {
        this.articulos = data;
      },
      error: (error) => {
        console.error('Error en la petición:', error);
      },
    });
  }

    regresarHome() {
    this.router.navigate(['/moderador/paginaPrincipalModerador']);
  }

  verificarArticulo(id:number){
    console.log('ID a verificar:', id);
    this.router.navigate(['/moderador/verificacion-articulo',id]);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Top10CCMP } from '../../../models/Top10CCMP';
import { FormsModule } from '@angular/forms';
import { ReportsServiceService } from '../../../Services/administracionServices/reportsServices/reportsService.service';
@Component({
  selector: 'app-top10CCMP',
  templateUrl: './top10CCMP.component.html',
  styleUrls: ['./top10CCMP.component.css'],
  imports: [CommonModule,FormsModule]
})
export class Top10CCMPComponent implements OnInit {

  constructor(private router: Router,private reportsService: ReportsServiceService) { }

  ngOnInit() {
    this.cargando = true;
    this.cargarDatos();
  }

  cargarDatos() {

 this.reportsService.getTop10CCMP().subscribe({
      next: (data) => {
        this.top10 = data;
        this.cargando = false;
      },
      error: (error) => {
        console.error('Error al cargar el Top 10 de Clientes con más Pedidos:', error);
        this.cargando = false;
      }
    });
  }
    cargando: boolean = false;
    fechaInicio: string = '';
fechaFin: string = '';
    top10 : Top10CCMP[] = [];
  
   dashboard() {
      this.router.navigate(['/paginaPrincipalAdministrador']);
    }

    filtarPorFecha() {
      if (this.fechaInicio === '' || this.fechaFin === '') {
        alert('Por favor, ingrese ambas fechas para filtrar.');
       this.cargarDatos();
       return;
      }
       const data = {
         fechaInicio: this.fechaInicio,
         fechaFin: this.fechaFin
       };
       this.cargando = true;
       this.reportsService.getTop10CCMPFiltroFechas(data).subscribe({
         next: (data) => {
           this.top10 = data;
           this.cargando = false;
         },
         error: (error) => {
           console.error('Error al cargar el Top 10 de Clientes con más Pedidos filtrado por fechas:', error);
           this.cargando = false;
         }
       });

    }
}

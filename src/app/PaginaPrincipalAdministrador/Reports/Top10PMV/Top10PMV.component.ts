import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Top10PMV } from '../../../models/Top10PMVDTO';
import { ReportsServiceService } from '../../../Services/administracionServices/reportsServices/reportsService.service';

@Component({
  selector: 'app-Top10PMV',
  templateUrl: './Top10PMV.component.html',
  styleUrls: ['./Top10PMV.component.css'],
  imports: [CommonModule,FormsModule],
  standalone: true
})
export class Top10PMVComponent implements OnInit {

  constructor(private router: Router, private reportsService: ReportsServiceService) { }

  ngOnInit() {
    this.fechaInicio = '';
    this.fechaFin = '';
    this.cargando = true;
    this.cargarDatos();
  }


     cargando: boolean = false;
    fechaInicio: string = '';
fechaFin: string = '';
top10 : Top10PMV[] = [];
    dashboard() {
      this.router.navigate(['/paginaPrincipalAdministrador']);
    }
    filtarPorFecha() {
      if (this.fechaInicio === '' || this.fechaFin === '') {
        alert('Por favor, ingrese ambas fechas para filtrar.');
       this.cargarDatos();
       return;
      }
      this.cargando = true;
        const data = {
          fechaInicio: this.fechaInicio,
          fechaFin: this.fechaFin
        };
        this.reportsService.getTop10ProductosMasVendidosFiltroFechas(data).subscribe({
          next: (data) => {
            this.top10 = data;
            this.cargando = false;
          },
          error: (error) => {
            console.error('Error al cargar el Top 10 de Productos más Vendidos:', error);
            this.cargando = false;
          }
        });
    }

    cargarDatos() {
      this.reportsService.getTop10ProductosMasVendidos().subscribe(
        (data) => {
          this.top10 = data;
          this.cargando = false;
        },
        (error) => {
          console.error('Error al cargar los datos:', error);
          this.cargando = false;
        }
      );  
    }



}

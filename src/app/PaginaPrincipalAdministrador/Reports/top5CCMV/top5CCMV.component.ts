import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Top5CCMV } from '../../../models/Top5CCMV';
import { ReportsServiceService } from '../../../Services/administracionServices/reportsServices/reportsService.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-top5CCMV',
  templateUrl: './top5CCMV.component.html',
  styleUrls: ['./top5CCMV.component.css'],
  imports: [CommonModule, FormsModule],
  standalone: true
})
export class Top5CCMVComponent implements OnInit {

  constructor(private router: Router, private reportsService: ReportsServiceService) { }

  ngOnInit() {
    this.cargando = true;
    this.cargarDatos();
  }

  cargarDatos() {
    this.reportsService.getTop5CCMV().subscribe({
      next: (data) => {
        this.clientesConMasVentas = data;
        this.cargando = false;
      },
      error: (error) => {
        console.error('Error al cargar el Top 5 de Clientes con más Compras-Venta:', error);
        this.cargando = false;
      }
    });

  }
  cargando: boolean = false;
  fechaInicio: string = '';
  fechaFin: string = '';
  clientesConMasVentas: Top5CCMV[] = [];
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
    this.reportsService.getTop5CCMVFiltroFechas(data).subscribe({
      next: (data) => {
        this.clientesConMasVentas = data;
        this.cargando = false;
      },
      error: (error) => {
        console.error('Error al filtrar el Top 5 de Clientes con más Compras-Venta por fechas:', error);
        this.cargando = false;
      }
    });
  }
}

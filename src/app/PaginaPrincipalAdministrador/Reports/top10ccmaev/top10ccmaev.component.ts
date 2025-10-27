import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReportsServiceService } from '../../../Services/administracionServices/reportsServices/reportsService.service';
import { Top10CCMAEVDTO } from '../../../models/Top10CCMAEVDTO';

@Component({
  selector: 'app-top10ccmaev',
  templateUrl: './top10ccmaev.component.html',
  styleUrls: ['./top10ccmaev.component.css'],
  imports: [CommonModule]
})
export class Top10ccmaevComponent implements OnInit {

  constructor(private router: Router, private reportsService: ReportsServiceService) { }

  ngOnInit() {
    this.cargando = true;
    this.reportsService.getTop10CCMPEV().subscribe({
      next: (data) => {
        this.top10 = data;
        this.cargando = false;
      },
      error: (error) => {
        console.error('Error al cargar el Top 10 de Compradores con más Artículos en Venta:', error);
        this.cargando = false;
      }
    });
  }

  cargando: boolean = false;

  top10 : Top10CCMAEVDTO[] = [];

 dashboard() {
    this.router.navigate(['/paginaPrincipalAdministrador']);
  }
}

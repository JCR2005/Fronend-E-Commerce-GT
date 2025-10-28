import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { EmpleadoDTO } from '../../../models/EmpleadoDTO';
import { ReportsServiceService } from '../../../Services/administracionServices/reportsServices/reportsService.service';

@Component({
  selector: 'app-listEmplados',
  templateUrl: './listEmplados.component.html',
  styleUrls: ['./listEmplados.component.css'],
  imports: [CommonModule],
  standalone:true
})
export class ListEmpladosComponent implements OnInit {

  constructor(private router: Router, private reportsService: ReportsServiceService) { }

  ngOnInit() {
    this.cargando = true;

    this.reportsService.getListaEmpleados().subscribe({
      next: (data) => {
        this.empleados = data;
        this.cargando = false;
      },
      error: (error) => {
        console.error('Error al obtener la lista de empleados:', error);
        this.cargando = false;
      }
    });
  }



  cargando: boolean = false;

  empleados : EmpleadoDTO[] = [];
   dashboard() {
    this.router.navigate(['/paginaPrincipalAdministrador']);
  }
}

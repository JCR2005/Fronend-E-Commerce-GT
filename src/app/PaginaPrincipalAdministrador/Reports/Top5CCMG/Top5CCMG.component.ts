import { Component, OnInit } from '@angular/core';
import { Top5CCMV } from '../../../models/Top5CCMV';
import { Router } from '@angular/router';
import { ReportsServiceService } from '../../../Services/administracionServices/reportsServices/reportsService.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Top5CCMGDTO } from '../../../models/Top5CCMGDTO';

@Component({
  selector: 'app-Top5CCMG',
  templateUrl: './Top5CCMG.component.html',
  styleUrls: ['./Top5CCMG.component.css'],
  imports: [CommonModule, FormsModule],
  standalone: true
})
export class Top5CCMGComponent implements OnInit {

  constructor(private router: Router, private reportsService: ReportsServiceService) { }

  ngOnInit() {
    this.cargando = true;
    this.cargarDatos();
  }

   cargando: boolean = false;
    fechaInicio: string = '';
    fechaFin: string = '';
    clientesConMasGanancias: Top5CCMGDTO[] = [];
    dashboard() {
      this.router.navigate(['/paginaPrincipalAdministrador']);
    }
  
    cargarDatos() { 
      this.reportsService.getTop5CCMG().subscribe({
        next: (data) => {
          this.clientesConMasGanancias = data;
          this.cargando = false;
        },
        error: (error) => {
          console.error('Error al cargar el Top 5 de Clientes con más Compras-Venta:', error);
          this.cargando = false;
        }
      });
     }

    filtarPorFecha() {  }
}

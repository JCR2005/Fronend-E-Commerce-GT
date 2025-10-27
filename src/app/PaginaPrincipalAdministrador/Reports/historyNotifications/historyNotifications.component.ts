import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NotificationDTO } from '../../../models/NotificationDTO';
import { ReportsServiceService } from '../../../Services/administracionServices/reportsServices/reportsService.service';
@Component({
  selector: 'app-historyNotifications',
  templateUrl: './historyNotifications.component.html',
  styleUrls: ['./historyNotifications.component.css'],
  imports: [CommonModule]
})
export class HistoryNotificationsComponent implements OnInit {

  constructor(private router: Router, private reportsService: ReportsServiceService) { }

  ngOnInit() {
    this.cargando = true;
    this.reportsService.getHistorialNotificaciones().subscribe({
      next: (data) => {
        this.notifications = data;
        this.cargando = false;
      },
      error: (error) => {
        console.error('Error al cargar las notificaciones:', error);
        this.cargando = false;
      }
    });
  }
  cargando: boolean = false;

  notifications : NotificationDTO[] = [];


 
  dashboard() {
    this.router.navigate(['/paginaPrincipalAdministrador']);
  }
}

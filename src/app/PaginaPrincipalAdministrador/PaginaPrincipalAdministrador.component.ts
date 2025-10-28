import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { inject } from '@angular/core';
import { AuthServiceService } from '../Segurity/authService/authService.service';
@Component({
  selector: 'app-PaginaPrincipalAdministrador',
  templateUrl: './PaginaPrincipalAdministrador.component.html',
  styleUrls: ['./PaginaPrincipalAdministrador.component.css'],
  imports: [CommonModule],
  standalone : true
})
export class PaginaPrincipalAdministradorComponent implements OnInit {
  cargando: boolean=false;
  constructor() { }

  ngOnInit() {
  
  }

  private authService = inject(AuthServiceService);

  cerrarSesion() {
    const confirmado = confirm("¿Estás seguro de que deseas cerrar la sesión?");

    if (confirmado) {
      this.authService.logout();
    }
  }

}

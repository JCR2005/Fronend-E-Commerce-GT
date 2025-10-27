import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

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

}

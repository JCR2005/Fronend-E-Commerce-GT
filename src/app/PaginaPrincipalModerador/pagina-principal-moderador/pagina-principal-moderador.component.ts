import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pagina-principal-moderador',
  templateUrl: './pagina-principal-moderador.component.html',
  styleUrls: ['./pagina-principal-moderador.component.css']
})
export class PaginaPrincipalModeradorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  abrirPanelSolicitudVenta(){
    this.router.navigate(['/moderador/procesarSolicitudVenta']);
  }
}

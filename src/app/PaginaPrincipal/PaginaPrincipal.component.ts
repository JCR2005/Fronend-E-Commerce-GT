import { Component, OnInit } from '@angular/core';
import { InformacionPrincipalComponent } from '../informacion-principal/informacion-principal.component';
import { CommonModule } from '@angular/common'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-PaginaPrincipal',
  templateUrl:'./PaginaPrincipal.component.html',
  styleUrls: ['./PaginaPrincipal.component.css'],
  standalone: true,
  imports: [InformacionPrincipalComponent, CommonModule]
})
export class PaginaPrincipalComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  mostrarInformacion = true; 

  iniciarPanelInformacion(): void {
    this.mostrarInformacion = false;
    
    setTimeout(() => {
      this.mostrarInformacion = true;
    }, 1); 
  }


  iniciarSesion(): void {
    this.router.navigate(['/login']);
  } 

  registrarse(): void {
    this.router.navigate(['/registroCliente']);
  } 
}

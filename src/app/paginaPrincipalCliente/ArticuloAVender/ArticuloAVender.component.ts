import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ArticuloAVender',
  templateUrl: './ArticuloAVender.component.html',
  styleUrls: ['./ArticuloAVender.component.css'],
  imports: [ CommonModule],
  standalone:true
})
export class ArticuloAVenderComponent implements OnInit {

  mostrarPanel1=false;
  mostrarPanel2=false;

  constructor(private router:Router) { }

  ngOnInit() {
  }



  ocultarPaneles(){
    this.mostrarPanel1=false;
    this.mostrarPanel2=false;

  }

  abrirPanel1(){
    this.ocultarPaneles();
    this.router.navigate(['/cliente/publicarArticulo']);
  }

  abrirPanel2(){
     this.ocultarPaneles();
    this.router.navigate(['/cliente/mis-publicaciones']);

  }

   regresarHome(){

    this.router.navigate(['/cliente/home'])
  }

}

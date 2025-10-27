import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-informacion-principal',
  imports: [CommonModule],
  templateUrl: './informacion-principal.component.html',
  styleUrls: ['./informacion-principal.component.scss'],
  standalone: true
})
export class InformacionPrincipalComponent {
  
  //ruta de la imagenes
  imagenQuienesSomos: string = "images/quienSomos1.png"; 
  imagenVendeConNosotros: string = "images/VendeConNosotros1.png";
  imagenCompraSeguro: string = "images/compraSeguro1.png";
  imagenExcelenteLogistica: string = "images/logistica1.png"; 
  ruta: string = this.imagenQuienesSomos;

  imagenQuienesSomos2: string = "images/quienSomos2.png"; 
  imagenVendeConNosotros2: string = "images/vendeConNosotros2.png";
  imagenCompraSeguro2: string = "images/compraSeguro2.png";
  imagenExcelenteLogistica2: string = "images/logistica2.png"; 
  ruta2: string = this.imagenQuienesSomos2;
  

  //metodo que se ejecuta al iniciar el componente
  ngOnInit(): void {
    this.mostrarQuienesSomos();
  }


  //metodos para manejar los botones de la barra de navegacion
  mostrarQuienesSomos(): void {
    const boton = document.getElementById('quienes-somos') as HTMLButtonElement;
   
    if (boton) {

      this.reiniciarEstilosBotones();
      this.moverImagen1(this.imagenQuienesSomos);
      this.moverImagen2(this.imagenQuienesSomos2)
        boton.style.borderBottom = '6px solid black'; 
        boton.style.borderColor = 'rgba(14, 59, 62, 0.62)';
        boton.style.color = 'rgba(14, 59, 62, 0.61)';
        }
  }

  mostrarVendeConNosotros(): void {
    const boton = document.getElementById('vende-con-nosotros') as HTMLButtonElement;
    if (boton) {

      this.reiniciarEstilosBotones();
      this.moverImagen1(this.imagenVendeConNosotros);
      this.moverImagen2(this.imagenVendeConNosotros2);
        boton.style.borderBottom = '6px solid black'; 
        boton.style.borderColor = 'rgba(14, 59, 62, 0.62)';
        boton.style.color = 'rgba(14, 59, 62, 0.61)';  
    }
  }

  mostrarCompraSeguro(): void {
    const boton = document.getElementById('compra-seguro') as HTMLButtonElement;
    if (boton) {

      this.reiniciarEstilosBotones();
      this.moverImagen1(this.imagenCompraSeguro);
      this.moverImagen2(this.imagenCompraSeguro2);
         boton.style.borderBottom = '6px solid black'; 
        boton.style.borderColor = 'rgba(14, 59, 62, 0.62)';
        boton.style.color = 'rgba(14, 59, 62, 0.61)';
    }
  }

  mostrarExcelenteLogistica(): void {
    const boton = document.getElementById('excelente-logistica') as HTMLButtonElement;
    if (boton) {
      this.reiniciarEstilosBotones();
      this.moverImagen1(this.imagenExcelenteLogistica);
      this.moverImagen2(this.imagenExcelenteLogistica2);
         boton.style.borderBottom = '6px solid black'; 
        boton.style.borderColor = 'rgba(14, 59, 62, 0.62)';
        boton.style.color = 'rgba(14, 59, 62, 0.61)';
    }
  }       

//metodo para reiniciar los estilos de los botones y ocultar todas las secciones de informacion
  reiniciarEstilosBotones(): void {
    this.estadoNormalBtnMostrarQuienesSomos();
    this.estadoNormalBtnMostrarVendeConNosotros();
    this.estadoNormalBtnMostrarCompraSeguro();
    this.estadoNormalBtnMostrarExcelenteLogistica();
  }

  //metodos para poner los botones en su estado normal
  estadoNormalBtnMostrarQuienesSomos(){
    const boton = document.getElementById('quienes-somos') as HTMLButtonElement;
    if (boton) {
      boton.style.backgroundColor = '#ffffffff'; 
      boton.style.color = 'rgb(14, 59, 62)';         
      boton.style.borderBottom = 'none';          
    }
  }
  
   estadoNormalBtnMostrarVendeConNosotros(){
    const boton = document.getElementById('vende-con-nosotros') as HTMLButtonElement;
    if (boton) {
      boton.style.backgroundColor = '#ffffffff'; 
      boton.style.color = 'rgb(14, 59, 62)';         
      boton.style.borderBottom = 'none';     
           
    }
  }

   estadoNormalBtnMostrarCompraSeguro(){
    const boton = document.getElementById('compra-seguro') as HTMLButtonElement;
    if (boton) {
      boton.style.backgroundColor = '#ffffffff'; 
      boton.style.color = 'rgb(14,59,62)';
      boton.style.borderBottom = 'none';       
    }
  }

   estadoNormalBtnMostrarExcelenteLogistica(){
    const boton = document.getElementById('excelente-logistica') as HTMLButtonElement;
    if (boton) {
      boton.style.backgroundColor = '#ffffffff'; 
      boton.style.color = 'rgb(14,59,62)';         
      boton.style.borderBottom = 'none'; 
    }
  }

//metodos para manejar el cambio de imagenes con animaciones
  cambiarRuta(rutaImagen: string): void {
    this.ruta = rutaImagen;
  }
  cambiarRuta2(rutaImagen: string): void {
    this.ruta2 = rutaImagen;
  }
  moverImagen1(rutaImagen: string): void {

    
    this.moverImagenIzquierda1();
    setTimeout(() => {
      this.cambiarRuta(rutaImagen);
    }, 300); 
    setTimeout(() => {
      this.moverImagenDeracha1();
    }, 400);

  }

  
moverImagenIzquierda1():void{

  const imagen = document.getElementById('imagen');
  if (imagen) {
    imagen.style.transform = 'translateX(-150%)'; 
    imagen.style.transition = 'transform 0.5s ease-in-out';
  }
}
  moverImagenDeracha1(): void {

    const imagen = document.getElementById('imagen');
    if (imagen) {
      imagen.style.transform = 'translateX(0%)'; 
      imagen.style.transition = 'transform 0.5s ease-in-out';
    }
  }


  moverImagen2(rutaImagen: string): void {

    
      this.moverImagenDeracha2();
    setTimeout(() => {
      this.cambiarRuta2(rutaImagen);
    }, 300); 
    setTimeout(() => {

    this.moverImagenIzquierda2();
    }, 400);

  }

  
moverImagenIzquierda2():void{

  const imagen = document.getElementById('imagen2');
  if (imagen) {
    imagen.style.transform = 'translateX(0%)'; 
    imagen.style.transition = 'transform 0.5s ease-in-out';
  }
}
  moverImagenDeracha2(): void {

    const imagen = document.getElementById('imagen2');
    if (imagen) {
      imagen.style.transform = 'translateX(150%)'; 
      imagen.style.transition = 'transform 0.5s ease-in-out';
    }
  }
}

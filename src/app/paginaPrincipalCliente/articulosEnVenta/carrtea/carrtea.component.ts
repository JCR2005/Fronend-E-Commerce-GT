import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemCarrito } from '../../../models/itemCarrito';
import { CarritoServiceService } from '../../../Services/clienteServices/carritoService/carritoService.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tarjeta } from '../../../models/Tarjeta';
import { ArticleDTO } from '../../../models/ArticleDTO';

@Component({
  selector: 'app-carrtea',
  templateUrl: './carrtea.component.html',
  styleUrls: ['./carrtea.component.css'],
  imports: [CommonModule, FormsModule],
})
export class CarrteaComponent implements OnInit {
  constructor(
    private router: Router,
    private carritoService: CarritoServiceService
  ) {}

  panelAgregarTarjeta: boolean = false;
  articulos!: ItemCarrito[];
  tarjetaSeleccionadaId: number | null = null;
  pagoTarjetaGuardada: boolean = true;

  numeroTarjeta: string = '';
  nombreTitular: string = '';
  fechaExpiracion: Date = new Date();
  cvv: string = '';

  fechaCompra: Date = new Date();

  tarjetas: Tarjeta[] = [];
  ngOnInit() {
    this.obtenerArticulos();
    this.obtenerTarjetas();
  }

  obtenerArticulos() {
    this.carritoService.getArticulos().subscribe({
      next: (data) => {
        this.articulos = data.sort(
          (a: ItemCarrito, b: ItemCarrito) => a.id - b.id
        );
      },
      error: (error) => {
        console.error('Error en la petición:', error);
      },
    });
  }
  eliminarTarjeta(): void {
    const tarjetaSeleccionada =
      this.tarjetas.find(
        (tarjeta) => Number(tarjeta.id) === Number(this.tarjetaSeleccionadaId)
      ) || null;

    if (tarjetaSeleccionada) {
      this.carritoService.eliminarTarjeta(tarjetaSeleccionada.id).subscribe({
        next: () => {
          alert('Tarjeta eliminada exitosamente');
          this.obtenerTarjetas();
        },
        error: (error) => {
          alert('Error al eliminar la tarjeta:');
        },
      });
    } else {
      alert('¡Advertencia! Debe seleccionar una tarjeta para eliminar.');
    }
  }

  eliminarArticulo(id: number): void {
    var confirmacion = confirm(
      '¿Estás seguro de que deseas eliminar este artículo?'
    );

    if (confirmacion) {
      this.carritoService.eliminarArticulo(id).subscribe({
        next: () => {
          alert('Artículo eliminado exitosamente');

          this.obtenerArticulos();
        },
        error: (error) => {
          alert('Error al eliminar el artículo:');
          console.error('Error al eliminar el artículo:', error);
        },
      });
    }
  }

  obtenerTarjetas(): void {
    this.carritoService.getTarjetas().subscribe({
      next: (data) => {
        this.tarjetas = data;
        console.log(data);
      },
      error: (error) => {
        console.error('Error en la petición:', error);
      },
    });
  }

  blockNegativoDecimalSign(event: KeyboardEvent) {
    const forbiddenKeys = ['-', '+', '.', '\u00B4', 'Dead', 'DeadKey'];

    if (forbiddenKeys.includes(event.key)) {
      event.preventDefault();
    }
  }

  actualizarCantidad(articulo: ItemCarrito) {
    const nuevaCantidad = articulo.cantidad;
    const idArticulo = articulo.id;

    this.carritoService
      .cambiarCantidadArticulo(idArticulo, nuevaCantidad)
      .subscribe({
        next: () => {
          console.log('Cantidad actualizada exitosamente');
        },
        error: (error) => {
          console.error('Error al actualizar la cantidad:', error);
          alert('Error al actualizar la cantidad del artículo.');
        },
      });
  }

  generarRango(stock: number): number[] {
    return Array.from({ length: stock }, (_, i) => i + 1);
  }
  regresarHome() {
    this.router.navigate(['/cliente/portalDeCompras']);
  }

  calcularTotal(): number {
    let total = 0;
    for (let item of this.articulos) {
      total += item.precio * item.cantidad;
    }
    return total;
  }

  abrirPanelTarjeta() {
    this.panelAgregarTarjeta = true;
  }

  cerrarPanelTarjeta() {
    this.panelAgregarTarjeta = false;
    this.numeroTarjeta = '';
    this.nombreTitular = '';
    this.fechaExpiracion = new Date();
  }

  guardarTarjeta() {
    {
      const tarjeta: Tarjeta = {
        id: 0,
        numeroTarjeta: this.numeroTarjeta,
        nombreTitular: this.nombreTitular,
        fechaExpiracion: this.fechaExpiracion,
      };
      this.carritoService.guardarTarjeta(tarjeta).subscribe({
        next: (response) => {
          console.log('Tarjeta guardada exitosamente:', response);
          alert('¡Felicidades! Su tarjeta se guardo exitosamente.');
          this.tarjetas.push(response);
          this.cerrarPanelTarjeta();
          this.obtenerTarjetas();
        },
        error: (error) => {
          if (error && error.status) {
            if (error.status === 409) {
              console.warn(
                'Conflicto: La tarjeta ya existe o hay un error de unicidad.'
              );
              alert(
                '¡Advertencia! El numero de tarjeta ya esta registrada en el sistema.'
              );
            } else {
              console.error(
                `Error ${error.status} al guardar la tarjeta:`,
                error
              );
              alert('Ocurrió un error inesperado al guardar la tarjeta.');
            }
          } else {
            console.error('Error desconocido al guardar la tarjeta:', error);
          }
        },
      });
    }
  }

  comprarArticulos(): void {
    if (this.pagoTarjetaGuardada) {
      this.pagoTarjetaGuardadas();
    } else {
      this.pagoSinTarjetaGuardada();
    }
  }

  pagoSinTarjetaGuardada(): void {
    if (
      this.numeroTarjeta.trim() === '' ||
      this.nombreTitular.trim() === '' ||
      !this.fechaExpiracion ||
      this.cvv.trim() === ''
    ) {
      alert(
        '¡Advertencia! Debe completar todos los campos de la tarjeta para realizar el pago.'
      );
      return;
    } 
      const resultado = window.confirm('¿Estás seguro de realizar el pago?');
      if (resultado) {
        this.enviarPago();
    
      } else {
        alert('Pago cancelado');
      }
    
  }

  enviarPago(){

        this.carritoService.comprarArticulos(this.numeroTarjeta,this.fechaCompra).subscribe({
          next: () => {
            alert('Pago realizado exitosamente, revisa tu correo para más detalles.');
            this.obtenerArticulos();
            this.router.navigate(['/cliente/portalDeCompras']);
          },
          error: (error) => {
            alert('Error al procesar el pago. Por favor, intente nuevamente.');
          },
        });
  }

  pagoTarjetaGuardadas(): void {
    if (this.tarjetaSeleccionadaId === null) {
      alert(
        '¡Advertencia! Debe seleccionar una tarjeta para realizar el pago.'
      );
      return;
    }
    if (this.cvv.trim() === '') {
      alert('¡Advertencia! Debe ingresar el CVV para realizar el pago.');
      return;
    }
    const resultado = window.confirm('¿Estás seguro de realizar el pago?');
      if (resultado) {
         const tarjetaSeleccionada =
      this.tarjetas.find(
        (tarjeta) => Number(tarjeta.id) === Number(this.tarjetaSeleccionadaId)
      ) || null;

      if(tarjetaSeleccionada!=null){
           this.numeroTarjeta=tarjetaSeleccionada.numeroTarjeta;
      }else{
        return
      }
        this.enviarPago();
      } else {
        alert('Pago cancelado');
      }

  }

  vaciarCarrito(): void {
    const confirmacion = confirm(
      '¿Estás seguro de que deseas vaciar el carrito de compras?'
    );

    if (confirmacion) {
      this.carritoService.vaciarCarrito();
      this.articulos = [];
      alert('Carrito vaciado exitosamente');  
    }
  }
}

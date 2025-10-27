import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { VentasClienteService } from '../../../Services/clienteServices/publicarArticulo/ventas-cliente.service';

@Component({
  selector: 'app-CrearArticuloVenta',
  templateUrl: './CrearArticuloVenta.component.html',
  styleUrls: ['./CrearArticuloVenta.component.scss'],
  imports: [CommonModule, FormsModule],
  standalone: true,
})
export class CrearArticuloVentaComponent implements OnInit {
  constructor(
    private router: Router,
    private publicarArticulo: VentasClienteService
  ) {}

  archivoSeleccionado: File | null = null;
  imagenURL: string | ArrayBuffer | null = null;

  nombre: string = '';
  descripcion: string = '';
  precio: number = 0;
  stock: number = 0;
  estado: string = '';
  fecha: string = '';

  selectedCategorias: number[] = [];

  cargando: boolean = false;

  panelMensaje: boolean = false;
  error: boolean = false;
  exitoso: boolean = false;
  mensaje: string = '';
  ngOnInit() {}

  onSubmit() {
    this.cargando = true;
    if (this.validarDatos()) {
      const data = {
        nombre: this.nombre,
        descripcion: this.descripcion,
        precio: this.precio,
        stock: this.stock,
        imagenB64: this.imagenURL,
        categorias: this.selectedCategorias,
        estado: this.estado,
        fecha: this.fecha,
      };
      alert(data.fecha);

      this.publicarArticulo.enviar(data).subscribe({
        next: (response) => {
          setTimeout(() => {
            this.cargando = false;
            this.panelMensaje = true;
            this.exitoso = true;
            this.mensaje = response.mensaje;
          }, 2000);
        },
        error: (error) => {
          setTimeout(() => {
            this.cargando = false;
            this.panelMensaje = true;
            this.error = true;
            const errorBody = error.error;

            this.mensaje = 'Error en el servidor, intente más tarde';
          }, 2000);
        },
      });
    } else {
      setTimeout(() => {
        this.cargando = false;
        this.panelMensaje = true;
        this.error = true;
        this.mensaje = 'Por favor llene los datos adecuadamente.';
      }, 1000);
    }
  }

  validarPrecio(): boolean {
    return this.precio > 0;
  }

  validarStock(): boolean {
    return this.stock > 0;
  }

  validarEstado(): boolean {
    return this.estado.trim().length > 0;
  }

  validarNombre(): boolean {
    return this.nombre.trim().length > 0;
  }

  validarDescripcion(): boolean {
    return this.descripcion.trim().length > 0;
  }

  validarImagenURL(): boolean {
    return !!this.imagenURL;
  }

  validarCategorias(): boolean {
    return this.selectedCategorias.length > 0;
  }

  validarDatos(): boolean {
    return (
      this.validarPrecio() &&
      this.validarStock() &&
      this.validarEstado() &&
      this.validarNombre() &&
      this.validarDescripcion() &&
      this.validarImagenURL() &&
      this.validarCategorias()
    );
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      this.archivoSeleccionado = input.files[0];

      this.previewImage(this.archivoSeleccionado);
    }
  }

  previewImage(file: File): void {
    const reader = new FileReader();

    reader.onload = (e: any) => {
      this.imagenURL = e.target.result;
    };

    reader.readAsDataURL(file);
  }

  blockNegativeSign(event: KeyboardEvent) {
    if (event.key === '-' || event.key === '+') {
      event.preventDefault();
    }
  }

  blockNegativoDecimalSign(event: KeyboardEvent) {
    if (event.key === '-' || event.key === '+' || event.key === '.') {
      event.preventDefault();
    }
  }
  categoriasDisponibles = [
    { value: 1, label: 'Tecnología y Electrónica' },
    { value: 2, label: 'Moda y Accesorios' },
    { value: 3, label: 'Hogar y Decoración' },
    { value: 4, label: 'Deportes y Fitness' },
    { value: 5, label: 'Automotriz y Vehículos' },
    { value: 6, label: 'Arte, Libros y Entretenimiento' },
    { value: 7, label: 'Salud y Belleza' },
    { value: 8, label: 'Juguetes y Bebés' },
    { value: 9, label: 'Servicios (No Productos Físicos)' },

    { value: 10, label: 'Condición: Nuevo' },
    { value: 11, label: 'Condición: Semi Nuevo' },
    { value: 12, label: 'Condición: Usado Bueno' },
    { value: 13, label: 'Condición: Usado con Detalle' },

    { value: 14, label: 'Oferta Especial' },
    { value: 15, label: 'Liquidación Final' },
    { value: 16, label: 'Envío Gratis' },
    { value: 17, label: 'Top Ventas' },
    { value: 18, label: 'Preventa' },

    { value: 19, label: 'Accesorios' },
    { value: 20, label: 'Repuestos / Piezas' },
    { value: 21, label: 'Artículo de Colección' },
    { value: 22, label: 'Hecho a Mano / Artesanal' },
    { value: 23, label: 'Producto Digital / Descargable' },
  ];

  onCategoryChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const val: number = parseInt(input.value, 10);

    if (input.checked) {
      if (!this.selectedCategorias.includes(val))
        this.selectedCategorias.push(val);
    } else {
      const idx = this.selectedCategorias.indexOf(val);
      if (idx > -1) this.selectedCategorias.splice(idx, 1);
    }
  }

  reiniciarImagen() {
    this.imagenURL = null;

    const input = document.getElementById('fileInput') as HTMLInputElement;
    if (input) {
      input.value = '';
    }
  }

  regresarHome() {
    this.router.navigate(['/cliente/portalDeVentas']);
  }

  cerrarPanelMensaje(): void {
    if (!this.error) {
      window.location.reload();
    }
    this.panelMensaje = false;
    this.error = false;
    this.exitoso = false;
    this.mensaje = '';
  }
}

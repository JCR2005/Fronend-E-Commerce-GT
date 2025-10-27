import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../Segurity/authService/authService.service';

@Component({
  selector: 'app-registro-cliente',
  imports: [CommonModule, FormsModule],
  templateUrl: './registro-cliente.component.html',
  styleUrl: './registro-cliente.component.scss',
})
export class RegistroClienteComponent {
  constructor(
    private router: Router,
    private authService: AuthServiceService
  ) {}
  password: string = '';
  correo: string = '';
  nombre: string = '';
  fecha: string = '';
  ruta: string = '';

  showPassword = true;
  passwordValida = true;
  correoValido = true;
  nombreValido = true;
  cargando: boolean = false;

  panelMensaje: boolean = false;
  error: boolean = false;
  exitoso: boolean = false;
  mensaje: string = '';

  onSubmit() {
    this.validarCorreo();
    this.validarPassword();
    this.validarNombre();
    this.enviarDatos();
  }

  enviarDatos() {
    this.cargando = true;
    if (this.correoValido && this.passwordValida && this.nombreValido) {
      const userData = {
        correo: this.correo,
        password: this.password,
        nombre: this.nombre,
        rol: 'cliente',
        fechaRegistro: this.fecha,
      };
      this.authService.signup(userData).subscribe({
        next: (response) => {
          setTimeout(() => {
            this.cargando = false;
          }, 5000);
          this.panelMensaje = true;
          this.exitoso = true;
          this.mensaje = response.mensaje;
          this.ruta = response.ruta;
        },
        error: (error) => {
          setTimeout(() => {
            this.cargando = false;
            this.panelMensaje = true;
            this.error = true;
            const errorBody = error.error;
            if (error.status === 409) {
              this.mensaje = errorBody.mensaje;
              this.ruta = '/login';
            } else {
              this.mensaje = 'Error en el servidor, intente más tarde';
            }
          }, 1000);
        },
      });
    } else {
      setTimeout(() => {
        this.cargando = false;
        this.panelMensaje = true;
        this.error = true;
        this.mensaje = 'Los datos no cumplen el formato requerido.';
      }, 1000);
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  iniciarSesion(): void {
    this.router.navigate(['/login']);
  }
  regresarAtrasNativo(): void {
    this.router.navigate(['/paginaPrincipal']);
  }

  validarCorreo() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.correoValido = emailPattern.test(this.correo);
  }

  validarPassword() {
    const password = this.password || '';

    const lengthValid = password.length >= 8 && password.length <= 32;
    const hasLower = /[a-z]/.test(password);
    const hasUpper = /[A-Z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSymbol = /[@$!%*?&]/.test(password);

    this.passwordValida =
      lengthValid && hasLower && hasUpper && hasDigit && hasSymbol;
  }

  validarNombre() {
    const nombrePattern = /^[a-zA-ZÀ-ÿ\s]{2,30}$/;
    this.nombreValido = nombrePattern.test(this.nombre);
  }

  cerrarPanelMensaje(): void {

    if (this.ruta.length > 0) {
         this.cargando = true;
      setTimeout(() => {
        this.cargando = false;
         this.router.navigate([this.ruta]);
      }, 1000);
    }
    this.panelMensaje = false;
    this.error = false;
    this.exitoso = false;
    this.mensaje = '';
    this.ruta = '';
  }
}

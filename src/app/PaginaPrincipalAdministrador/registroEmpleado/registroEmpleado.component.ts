import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../Segurity/authService/authService.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-registroEmpleado',
  templateUrl: './registroEmpleado.component.html',
  styleUrls: ['./registroEmpleado.component.css'],
  imports: [CommonModule, FormsModule],
  standalone : true
})
export class RegistroEmpleadoComponent {

    constructor(
    private router: Router,
    private authService: AuthServiceService
  ) {}
  rolSeleccionado: string ='';
  correo: string = '';
  nombre: string = '';
  fecha: string = '';
  ruta: string = '';

  showPassword = true;
  correoValido = true;
  nombreValido = true;
  rolSeleccionadoValido = true;
  cargando: boolean = false;

  panelMensaje: boolean = false;
  error: boolean = false;
  exitoso: boolean = false;
  mensaje: string = '';

  onSubmit() {
    this.validarCorreo();
    this.validarRol();
    this.validarNombre();
    this.enviarDatos();
  }

  enviarDatos() {
    this.cargando = true;
    if (this.correoValido && this.rolSeleccionadoValido && this.nombreValido) {
      const userData = {
        correo: this.correo,
        password: this.correo,
        nombre: this.nombre,
        rol: this.rolSeleccionado,
        fechaRegistro: this.fecha,
      };
      this.authService.signup(userData).subscribe({
        next: (response) => {
          setTimeout(() => {
            this.cargando = false;
              this.panelMensaje = true;
          this.exitoso = true;
          this.mensaje = response.mensaje;
          this.ruta = response.ruta;
          }, 2000);
        
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
    this.router.navigate(['/paginaPrincipalAdministrador']);
  }

  validarCorreo() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.correoValido = emailPattern.test(this.correo);
  }

  validarRol(){
    this.rolSeleccionadoValido = this.rolSeleccionado.length > 0;


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

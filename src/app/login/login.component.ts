import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  NgZone,
} from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthServiceService } from '../Segurity/authService/authService.service';
import { JwtUtils } from '../utils/jwtUtils';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, AfterViewInit {
  @ViewChild('googleBtnContainer', { static: false })
  googleBtnContainer!: ElementRef<HTMLDivElement>;

  private googleScriptLoadingPromise: Promise<void> | null = null;
  private scriptLoaded = false;
  private viewInitDone = false;

  usuario: string = '';
  password: string = '';
  cargando: boolean = false;
  panelMensaje:boolean=false;
  mensaje:string="";
  constructor(
    private router: Router,
    private authService: AuthServiceService,
    private jwtUtils: JwtUtils
  ) {}

  ngOnInit(): void {
    this.loadGoogleScript()
      .then(() => {
        this.scriptLoaded = true;
        if (this.viewInitDone) this.inicializarGoogle();
      })
      .catch((err) => console.error('Error cargando script Google:', err));
  }

  ngAfterViewInit(): void {
    this.viewInitDone = true;
    if (this.scriptLoaded) {
      this.inicializarGoogle();
    }
  }

  loadGoogleScript(): Promise<void> {
    if ((window as any).google && (window as any).google.accounts)
      return Promise.resolve();
    if (this.googleScriptLoadingPromise) return this.googleScriptLoadingPromise;

    this.googleScriptLoadingPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        setTimeout(() => {
          if ((window as any).google && (window as any).google.accounts)
            resolve();
          else
            reject(
              new Error('google.accounts no disponible tras cargar script')
            );
        }, 30);
      };
      script.onerror = (e) => reject(e);
      document.head.appendChild(script);
    });

    return this.googleScriptLoadingPromise;
  }

  inicializarGoogle() {
    const googleAny = (window as any).google;
    if (!googleAny || !googleAny.accounts) {
      console.error('Google Identity no está disponible (inicializarGoogle).');
      return;
    }

    googleAny.accounts.id.initialize({
      client_id:
        '178354037889-ageddmfjno5hl1n4dj26t685lj1fig85.apps.googleusercontent.com',
      callback: (response: any) => this.handleCredentialResponse(response),
    });

    const container =
      this.googleBtnContainer?.nativeElement ??
      document.getElementById('googleBtnContainer');
    if (!container) {
      console.warn(
        'Contenedor para el botón de Google no encontrado. Reintentando en 50ms...'
      );
      setTimeout(() => this.inicializarGoogle(), 50);
      return;
    }

    try {
      googleAny.accounts.id.renderButton(container, {
        theme: 'outline',
        size: 'large',
      });
    } catch (err) {
      console.error('Error renderizando el botón de Google:', err);

      setTimeout(() => {
        try {
          googleAny.accounts.id.renderButton(container, {
            theme: 'outline',
            size: 'large',
          });
        } catch (e) {
          console.error(e);
        }
      }, 100);
    }
  }

  onGoogleBtnClick() {
    const googleAny = (window as any).google;
    if (!googleAny || !googleAny.accounts) {
      this.loadGoogleScript()
        .then(() => googleAny.accounts.id.prompt())
        .catch((err) =>
          console.error('No se pudo abrir prompt de Google:', err)
        );
      return;
    }
    googleAny.accounts.id.prompt();
  }

  handleCredentialResponse(response: any) {
    const token = response?.credential;
    if (!token) {
      console.error('Respuesta de Google sin credential:', response);
      return;
    } else {
      alert(token + ' Token recibido');
    }
    function parseJwtPayload(idToken: string) {
      const parts = idToken.split('.');
      if (parts.length !== 3) return null;
      const payload = parts[1];
      const b64 = payload.replace(/-/g, '+').replace(/_/g, '/');
      const padded = b64 + '='.repeat((4 - (b64.length % 4)) % 4);
      try {
        const json = atob(padded);
        return JSON.parse(json);
      } catch (e) {
        console.error('Error al parsear JWT payload', e);
        return null;
      }
    }

    const payload = parseJwtPayload(token);
    if (payload) {
      const email = payload.email;
      const emailVerified = payload.email_verified;
      const id = payload.sub;
      alert('ID: ' + id);
      console.log('Payload completo:', payload);
      alert(`Email: ${email}\nemail_verified: ${emailVerified}`);
    } else {
      console.warn('No se pudo leer payload del token');
    }
  }
  onSubmit() {
    this.login();
  }

  login(): void {
    this.cargando = true;
    this.authService.login(this.usuario, this.password).subscribe({
      next: (response) => {
        setTimeout(() => {
          this.cargando = false;
          this.router.navigate([response.ruta]);
        }, 1000);
      },
      error: (error) => {
          const errorBody = error.error; 

        setTimeout(() => {
          this.cargando = false;
          this.panelMensaje=true;
          if (error.status === 401) {
            this.mensaje=errorBody.mensaje;
          } else {
            this.mensaje="Error en el servidor, intente más tarde";
          }
        }, 1000);
      },
    });
  }

  cerrrarPanelMensaje(): void {
    this.panelMensaje=false;
  }
  regresarAtrasNativo(): void {
    window.history.back();
  }

  private jwt_decode(token: any): any {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(window.atob(base64));
  }
}

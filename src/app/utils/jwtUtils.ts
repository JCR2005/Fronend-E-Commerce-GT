import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class JwtUtils {


    decodeAndLogPayload(token: string): any {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const payload = JSON.parse(window.atob(base64)); 
      return payload;
    } catch (e) {
      console.error('Error al decodificar el token o token mal formado:', e);
      return null;
    }
  }

  obternerUsuarioDelToken(token: string): string | null {
    const payload = this.decodeAndLogPayload(token);
    return payload ? payload.sub : null;
  }

  getRole(token: string): string | null {
    const payload = this.decodeAndLogPayload(token);
    return payload ? payload.rol : null;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class VerificacionServiceService {

 constructor(private httpClient: HttpClient) { }

 private UrlVerificacion: string =
    `${environment.apiUrl}/moderador/verificacion-articulos/verificar-articulo`;


    enviar(data: any): Observable<any> {
    return this.httpClient.post(this.UrlVerificacion, data, { responseType: 'text' }).pipe(
      tap((response) => {
        console.log('Respuesta Exitosa:', response);
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error en la petición:', error);
        return throwError(() => error);
      })
    );
  }
}

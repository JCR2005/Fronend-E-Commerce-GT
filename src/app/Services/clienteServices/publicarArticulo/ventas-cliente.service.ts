import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { ArticleDTO } from '../../../models/ArticleDTO';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VentasClienteService {

  private UrlPublicarArticulo: string =
    `${environment.apiUrl}/cliente/ventas/publicar-articulo`;

  private UrlMisArticulosAprobados: string =
    `${environment.apiUrl}/cliente/ventas/mis-articulos-publicados-aprobados` ;

  constructor(private httpClient: HttpClient) { }

  enviar(data: any): Observable<any> {
    return this.httpClient.post<any>(this.UrlPublicarArticulo, data).pipe(
      tap((response) => {
        console.log('Respuesta Exitosa:', response);
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error en la petición:', error);
        return throwError(() => error);
      })
    );
  }

  getArticulosPublicados(estatus: string): Observable<any> {
    return this.httpClient.get<ArticleDTO[]>(this.UrlMisArticulosAprobados, {
      params: { estado: estatus } 
    }).pipe(
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

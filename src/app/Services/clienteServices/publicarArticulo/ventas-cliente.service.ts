import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { ArticleDTO } from '../../../models/ArticleDTO';

@Injectable({
  providedIn: 'root',
})
export class VentasClienteService {
  private UrlPublicarArticulo: string =
    'http://localhost:8080/cliente/ventas/publicar-articulo';

  private UrlMisArticulosAprobados: string =
    'http://localhost:8080/cliente/ventas/mis-articulos-publicados-aprobados';

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

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { ArticleDTO } from '../../../models/ArticleDTO';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SolicitudServiceService {

 constructor(private httpClient: HttpClient) { }


 private UrlSolicitudArticulosRevision: string =
    `${environment.apiUrl}/moderador/solicitudes/articulos-en-revision`;


 private UrlGetArticuloPorId: string =
    `${environment.apiUrl}/moderador/solicitudes/articulo-por-id`;

     getArticulos(estatus: string): Observable<any> {
    return this.httpClient.get<ArticleDTO[]>(this.UrlSolicitudArticulosRevision, {
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

  getArticulo(id: number): Observable<any> {
    return this.httpClient.get<ArticleDTO[]>(this.UrlGetArticuloPorId, {
      params: { id: id } 
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

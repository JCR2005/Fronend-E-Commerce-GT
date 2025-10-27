import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { ArticleDTO } from '../../../models/ArticleDTO';

@Injectable({
  providedIn: 'root'
})
export class SolicitudServiceService {

 constructor(private httpClient: HttpClient) { }


 private UrlSolicitudArticulosRevision: string =
    'http://localhost:8080/moderador/solicitudes/articulos-en-revision';


 private UrlGetArticuloPorId: string =
    'http://localhost:8080/moderador/solicitudes/articulo-por-id';

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

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { ArticleDTO } from '../../../models/ArticleDTO';

@Injectable({
  providedIn: 'root'
})
export class ListaArticulosService {

 constructor(private httpClient: HttpClient) { }

 private UrlSolicitudArticulosAprobados: string =
    'http://localhost:8080/cliente/compras/articulos-en-venta';

    private UrlSolicitudArticuloCompra: string =
    'http://localhost:8080/cliente/compras/compra-articulo';

private UrlañadirCarrito: string =
    'http://localhost:8080/cliente/compras/añadir-articulo-carro';



 private UrlSolicitudArticulosPorCategorias =
    'http://localhost:8080/cliente/compras/articulos-en-venta-por-categorias';

 getArticulos(estatus: string): Observable<any> {
    return this.httpClient.get<ArticleDTO[]>(this.UrlSolicitudArticulosAprobados, {
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

  getArticulosCategoria(categorias: number[]): Observable<any> {
    return this.httpClient.get<ArticleDTO[]>(this.UrlSolicitudArticulosAprobados, {
      params: { categorias: categorias } 
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
    return this.httpClient.get<ArticleDTO>(this.UrlSolicitudArticuloCompra, {
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

  añadirArticuloCarrito(idArticulo:number,cantidadArticulos:number): Observable<any>{
 return this.httpClient.post(this.UrlañadirCarrito, {idArticulo,cantidadArticulos}, { responseType: 'text' }).pipe(
      tap((response) => {
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );

  }
}

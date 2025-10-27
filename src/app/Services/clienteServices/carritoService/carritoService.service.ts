import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { ItemCarrito } from '../../../models/itemCarrito';
import { Tarjeta } from '../../../models/Tarjeta';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarritoServiceService {

  constructor(private httpClient: HttpClient) {


  }

  private UrlNumerosArticulosCarro: string =
    `${environment.apiUrl}/cliente/carrito/numero de articulos-carro`;


  private UrlArticulosCarro: string =
    `${environment.apiUrl}/cliente/carrito/items-carrito`;

  private UrlGuardarTarjeta: string =
    `${environment.apiUrl}/cliente/carrito/guardar-tarjeta`;

  private UrlMisTarjetas: string =
    `${environment.apiUrl}/cliente/carrito/mis-tarjetas`;

  private UrlEliminarTarjeta: string =
    `${environment.apiUrl}/cliente/carrito/eliminar-tarjeta`;

    private UrlEliminarArticuloCarro: string =
    `${environment.apiUrl}/cliente/carrito/eliminar-item-carrito`;


    private UrlCambiarCantidadArticulo: string =
    `${environment.apiUrl}/cliente/carrito/cambiar-cantidad-itemCarrito`;

     private UrlComprar: string =
    `${environment.apiUrl}/cliente/carrito/pago-carrito`;

    private UrlVaciarCarrito: string =
    `${environment.apiUrl}/cliente/carrito/vaciar-carrito`;

  getCantidadArticulos(): Observable<any> {
    return this.httpClient.get<number>(this.UrlNumerosArticulosCarro).pipe(
      tap((response) => {
        console.log('Respuesta Exitosa:', response);
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error en la petición:', error);
        return throwError(() => error);
      })
    );
  }

  getArticulos(): Observable<any> {
    return this.httpClient.get<ItemCarrito[]>(this.UrlArticulosCarro).pipe(
      tap((response) => {
        console.log('Respuesta Exitosa:', response);

      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error en la petición:', error);

        return throwError(() => error);
      })
    );
  }

  guardarTarjeta(data: Tarjeta): Observable<any> {
    return this.httpClient.post<any>(this.UrlGuardarTarjeta, data).pipe(
      tap((response) => {
        console.log('Respuesta Exitosa:', response);
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error en la petición:', error);
        return throwError(() => error);
      })
    );
  }

  getTarjetas(): Observable<any> {
    return this.httpClient.get<Tarjeta[]>(this.UrlMisTarjetas).pipe(
      tap((response) => {
        console.log('Respuesta Exitosa:', response);

      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error en la petición:', error);

        return throwError(() => error);
      })
    );
  }


  eliminarTarjeta(tarjetaId: number): Observable<any> {
    return this.httpClient.post<number>(this.UrlEliminarTarjeta, { id: tarjetaId }).pipe(
      tap((response) => {
        console.log('Respuesta Exitosa:', response);
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error en la petición:', error);
        return throwError(() => error);
      })
    );
  }

  eliminarArticulo(articuloId: number): Observable<any> {
    return this.httpClient.post<number>(this.UrlEliminarArticuloCarro, { id: articuloId }).pipe(
      tap((response) => {
        console.log('Respuesta Exitosa:', response);
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error en la petición:', error);
        return throwError(() => error);
      })
    );
  }


  cambiarCantidadArticulo(articuloId: number, nuevaCantidad: number): Observable<any> {
    return this.httpClient.post<number>(this.UrlCambiarCantidadArticulo, { id: articuloId, cantidad: nuevaCantidad }).pipe(
      tap((response) => {
        console.log('Respuesta Exitosa:', response);
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error en la petición:', error);
        return throwError(() => error);
      })
    );
  }


  comprarArticulos(numeroTarjeta: string, fechaCompra: Date): Observable<any> {

    return this.httpClient.post<any>(this.UrlComprar, { numeroTarjeta:numeroTarjeta, fechaCompra: fechaCompra }).pipe(
      tap((response) => {
        console.log('Respuesta Exitosa:', response);
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error en la petición:', error);
        return throwError(() => error);
      })
    );
  }

  vaciarCarrito(): void { 

    this.httpClient.get<void>(this.UrlVaciarCarrito).pipe(
      tap(() => {
        console.log('Carrito vaciado exitosamente');
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error al vaciar el carrito:', error);
        alert(error)
        return throwError(() => error);
      })
    ).subscribe();
  }
}

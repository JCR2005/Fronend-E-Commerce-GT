import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, tap, catchError, throwError } from 'rxjs';

import { DetalleCompraDTO } from '../../models/DetalleCompraDTO';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private httpClient: HttpClient) {


  }
private UrlDetalleCompras: string =
  `${environment.apiUrl}/logistica/detalle-compras`;

 getDetalleCompras(): Observable<DetalleCompraDTO[]> {
    return this.httpClient.get<DetalleCompraDTO[]>(this.UrlDetalleCompras)
      .pipe(
        tap((response) => {
          console.log('Detalle de compras recibido:', response);
        }),
        catchError((error: HttpErrorResponse) => {
          console.error('Error al obtener el detalle de compras:', error);
          return throwError(() => error);
        })
      );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { Top10CCMAEVDTO } from '../../../models/Top10CCMAEVDTO';
import { Top10CCMP } from '../../../models/Top10CCMP';

import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ReportsServiceService {

  constructor(private httpClient: HttpClient) {


  }

  private baseUrl = environment.apiUrl;
  private UrlNotificaciones: string =
    `${this.baseUrl}/administration/reports/Notifications-report`;

     private UrlTop10CCMPEV: string =
    `${this.baseUrl}/administration/reports/Top10CCMPEV-report`;
private UrlTop10CCMP: string =
    `${this.baseUrl}/administration/reports/Top10CCMP-report`;

private UrlTop10CCMPFiltroFechas: string =
    `${this.baseUrl}/administration/reports/Top10CCMP-report-filtrado`;


  getHistorialNotificaciones(): Observable<any> {
    return this.httpClient.get<Notification[]>(this.UrlNotificaciones).pipe(
      tap((response) => {
        console.log('Respuesta Exitosa:', response);
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error en la petición:', error);
        return throwError(() => error);
      })
    );
  }

  getTop10CCMPEV(): Observable<any> {
    return this.httpClient.get<Top10CCMAEVDTO[]>(this.UrlTop10CCMPEV).pipe(
      tap((response) => {
        console.log('Respuesta Exitosa:', response);
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error en la petición:', error);
        return throwError(() => error);
      })
    );
  }

   getTop10CCMP(): Observable<any> {
    return this.httpClient.get<Top10CCMP[]>(this.UrlTop10CCMP).pipe(
      tap((response) => {
        console.log('Respuesta Exitosa:', response);
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error en la petición:', error);
        return throwError(() => error);
      })
    );
  }

  getTop10CCMPFiltroFechas(data:any): Observable<any> {
    return this.httpClient.get<Top10CCMP[]>(this.UrlTop10CCMPFiltroFechas,{params:data}).pipe(
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

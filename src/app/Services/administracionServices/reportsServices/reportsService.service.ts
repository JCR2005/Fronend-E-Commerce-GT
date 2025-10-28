import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { Top10CCMAEVDTO } from '../../../models/Top10CCMAEVDTO';
import { Top10CCMP } from '../../../models/Top10CCMP';

import { environment } from '../../../../environments/environment';
import { EmpleadoDTO } from '../../../models/EmpleadoDTO';
import { Top5CCMGDTO } from '../../../models/Top5CCMGDTO';
import { Top5CCMV } from '../../../models/Top5CCMV';
import { Top10PMV } from '../../../models/Top10PMVDTO';
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

private UrlListaEmpleados: string =
    `${this.baseUrl}/administration/reports/ListaEmpleados-report`;

    private UrlTop5CCMV: string =
    `${this.baseUrl}/administration/reports/Top5CCMV-report`;

private UrlTopCCMVFiltroFechas: string =
    `${this.baseUrl}/administration/reports/Top5CCMV-report-filtrado`;


private UrlTop10PMV: string =
    `${this.baseUrl}/administration/reports/Top10PMV-report`;

private UrlTop10PMVFiltrado: string =
    `${this.baseUrl}/administration/reports/Top10PMV-report-filtrado`;

    private UrlTop5CCMG: string =
    `${this.baseUrl}/administration/reports/Top5CCMG-report`;


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

  getListaEmpleados(): Observable<any> {
    return this.httpClient.get<EmpleadoDTO[]>(this.UrlListaEmpleados).pipe(
      tap((response) => {
        console.log('Respuesta Exitosa:', response);
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error en la petición:', error);
        return throwError(() => error);
      })
    );
  }

  getTop5CCMV(): Observable<any> {
    return this.httpClient.get<Top5CCMV[]>(this.UrlTop5CCMV).pipe(
      tap((response) => {
        console.log('Respuesta Exitosa:', response);
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error en la petición:', error);
        return throwError(() => error);
      })
    );

    
}
 getTop5CCMVFiltroFechas(data:any): Observable<any> {
    return this.httpClient.get<Top5CCMV[]>(this.UrlTopCCMVFiltroFechas,{params:data}).pipe(
      tap((response) => {
        console.log('Respuesta Exitosa:', response);
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error en la petición:', error);
        return throwError(() => error);
      })
    );
  }

  getTop10ProductosMasVendidos(): Observable<any> {
    return this.httpClient.get<any[]>(this.UrlTop10PMV).pipe(
      tap((response) => {
        console.log('Respuesta Exitosa:', response);
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error en la petición:', error);
        return throwError(() => error);
      })
    );
  }

   getTop10ProductosMasVendidosFiltroFechas(data:any): Observable<any> {
    return this.httpClient.get<Top10PMV[]>(this.UrlTop10PMVFiltrado,{params:data}).pipe(
      tap((response) => {
        console.log('Respuesta Exitosa:', response);
      }), 
      catchError((error: HttpErrorResponse) => {
        console.error('Error en la petición:', error);
        return throwError(() => error);
      })
    );
  }

    getTop5CCMG(): Observable<any> {
    return this.httpClient.get<Top5CCMGDTO[]>(this.UrlTop5CCMG).pipe(
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

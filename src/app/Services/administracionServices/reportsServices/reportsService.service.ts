import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { Top10CCMAEVDTO } from '../../../models/Top10CCMAEVDTO';
import { Top10CCMP } from '../../../models/Top10CCMP';
@Injectable({
  providedIn: 'root'
})
export class ReportsServiceService {

  constructor(private httpClient: HttpClient) {


  }
  private UrlNotificaciones: string =
    'http://localhost:8080/administration/reports/Notifications-report';

     private UrlTop10CCMPEV: string =
    'http://localhost:8080/administration/reports/Top10CCMPEV-report';
private UrlTop10CCMP: string =
    'http://localhost:8080/administration/reports/Top10CCMP-report';

private UrlTop10CCMPFiltroFechas: string =
    'http://localhost:8080/administration/reports/Top10CCMP-report-filtrado';



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

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap,catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private baseUrl = environment.apiUrl;
private Url: string = `${this.baseUrl}/auth/login`; 
private signupUrl: string = `${this.baseUrl}/auth/signup`;
  private tokenKey: string = 'authToken';

  constructor(private httpClient: HttpClient, private router: Router) {}

  login(correo: string, password: string): Observable<any> {
    return this.httpClient.post<any>(this.Url, { correo, password }).pipe(
      tap(response => {
        const token = response.token; 
        
        if (token) {
          localStorage.setItem(this.tokenKey, token);
       
        }
        }),
        catchError((error:HttpErrorResponse) => {

        return throwError(() => error); 
      })
    );
  }

  signup(userData: any): Observable<any> { 
    return this.httpClient.post<any>(this.signupUrl, userData).pipe(
      tap(response => {
        
        const token = response.token; 
        if (token) {
           localStorage.setItem(this.tokenKey, token);
        }
      }),
      catchError((error:HttpErrorResponse) => {
      
        return throwError(() => error); 
      })
    );
  }




  private setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
  
  isLoggedIn(): boolean { 
    return this.getToken() !== null;
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  } 
  
  isAutenticated(): boolean {
    const token = this.getToken();
    if (!token) {
      return false;
    }
    const payload = JSON.parse(atob(token.split('.')[1]));
    const expirationTime = payload.exp * 1000; 
    const currentTime = Date.now();
    return currentTime < expirationTime;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

constructor(private http: HttpClient) { }

login(credentials: any): Observable<any> {
  return this.http.post('/api/login', credentials);
}

}

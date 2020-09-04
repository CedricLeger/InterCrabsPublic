import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = '';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      username: credentials.pseudo,
      password: credentials.mdp
    }, httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      username: user.pseudo,
      password: user.mdp,
    }, httpOptions);
  }
}

import { Injectable } from '@angular/core';
import { Observable, of, from, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  public isAuthenticated(): Observable<boolean> {
    return of(this.getToken()).pipe(map((u) => !!u));
  }

  public logout(): void {
    this.removeToken();
  }

  getToken() {
    return localStorage.getItem('token');
  }

  setToken(token: string) {
    return localStorage.setItem('token', token);
  }

  removeToken() {
    return localStorage.removeItem('token');
  }

  getEmail() {
    return localStorage.getItem('email');
  }

  setEmail(email: string) {
    return localStorage.setItem('email', email);
  }

  removeEmail() {
    return localStorage.removeItem('email');
  }
}

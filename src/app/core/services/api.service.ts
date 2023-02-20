import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResult } from 'src/app/models/loginResult';
import { AuthorizationService } from './authorization.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private auth: AuthorizationService) { }

  login(email: string, password:string){
    fetch('https://localhost:7234/api/user/login', {
      method: 'POST',
      body: JSON.stringify({
        Email: email,
        Password: password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((x) => x.json())
    .then((data) => {
      if(data.token){
        this.auth.setToken(data.token)
      }
      if(data.email){
        this.auth.setEmail(data.email)
      }
      
    });
  }

  register(email: string, password:string){
    fetch('https://localhost:7234/api/user/register', {
      method: 'POST',
      body: JSON.stringify({
        Email: email,
        Password: password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((x) => x.json())
      .then((data) => {
        if(data.token){
          this.auth.setToken(data.token)
        }
        if(data.email){
          this.auth.setEmail(data.email)
        }
      });
  }
}

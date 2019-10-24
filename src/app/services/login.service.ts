import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
    ) { 
  }

  login(user, password, email){
    return this.http.post('https://caja-sullana.us-south.cf.appdomain.cloud/login', {
          username: user,
          password: password,
          correo: email,
        });
  }
}

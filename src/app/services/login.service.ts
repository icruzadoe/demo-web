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

  login(password, email){
    return this.http.post('https://caja-sullana.us-south.cf.appdomain.cloud/login', {
          password: password,
          username: "null",
          correo: email,
        });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as globals from './globals';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
    ) { 
  }

  login(password, email){
    return this.http.post(globals.BASE_URL+'login', {
          password: password,
          username: "null",
          correo: email,
        });
  }
}

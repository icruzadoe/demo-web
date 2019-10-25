import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as globals from './globals';

@Injectable({
  providedIn: 'root'
})
export class RegisteruserService {

  constructor(
    private http: HttpClient
  ) {
  }

  register(password, email) {
    console.log("password :", password)
    console.log("email :", email)
    return this.http.post(globals.BASE_URL+'register', {
      username:"admin",
      password: password,
      correo: email,
    });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    return this.http.post('https://caja-sullana.us-south.cf.appdomain.cloud/register', {
      username:"admin",
      password: password,
      correo: email,
    });
  }
}

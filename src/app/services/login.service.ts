import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
    ) { 
    console.log("funcionando servicio");
  }

  login(user, password){
    return this.http.post('https://caja-sullana.us-south.cf.appdomain.cloud/login', {
          user: user,
          password: password,
        });
  }

}

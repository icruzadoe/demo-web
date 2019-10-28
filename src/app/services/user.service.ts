import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as globals from './globals';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) {
  }

  register(nameUser,password, numCel, email,typeUser) {
    return this.http.post(globals.BASE_URL+'register', {
      username:nameUser,
      password: password,
      celular: numCel,
      correo: email,
      privilegio : typeUser,
    });
  }

  listUser(){
    return this.http.get(globals.BASE_URL+'listarUsuario');
  }

  updateUser(idUser, nameUser, password, numCel, email,typeUser){
    return this.http.post(globals.BASE_URL+'updateUser', {
      id: idUser,
      username:nameUser,
      password: password,
      celular: numCel,
      correo: email,
      privilegio : typeUser,
    });
  }

  deleteUser(idUser, user_correo){
    return this.http.post(globals.BASE_URL+'dropUser', {
      id: idUser,
      user_correo: user_correo,
    });

  }

  listLog(){
    return this.http.get(globals.BASE_URL+'listarLog');
  }
}

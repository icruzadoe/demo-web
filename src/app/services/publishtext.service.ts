import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as globals from './globals';

@Injectable({
  providedIn: 'root'
})
export class PublishtextService {

  constructor(
    private http: HttpClient
  ) {
  }

  publishText(correo,tittle, description, point, category) {
    console.log("publish service :", point);
    return this.http.post(globals.BASE_URL+'update/text', {
      title: tittle,
      description: description,
      point: point,
      user_correo : correo,
      category: category,
    });
  }
}
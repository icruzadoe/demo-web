import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PublishtextService {

  constructor(
    private http: HttpClient
  ) {
  }

  publishText(tittle, description, point) {
    console.log("publish service :", point);
    return this.http.post('https://caja-sullana.us-south.cf.appdomain.cloud/update/text', {
      title: tittle,
      description: description,
      point: point,
    });
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as globals from './globals';


@Injectable({
  providedIn: 'root'
})
export class AgencyService {

  constructor(private http: HttpClient) { }

  editarPuntos(puntos : any){
    return this.http.post(globals.BASE_URL+'point',puntos);
  }
}

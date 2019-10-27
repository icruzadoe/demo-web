import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as globals from './globals';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  constructor(
    private http: HttpClient
    ) { 
  }

  listarMedia(){
    return this.http.get(globals.BASE_URL+'listarMedia');
  }
}

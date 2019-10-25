import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as globals from './globals';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(
    private http: HttpClient
    ) { 
  }

  upload(file, title, description, point, category){
    console.log("upload service")
    return this.http.post(globals.BASE_URL+'file/upload', {
          file: file,
          title: title,
          description: description,
          point: point,
          category: category,
        });
  }

}

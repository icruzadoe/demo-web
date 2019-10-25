import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    return this.http.post('https://caja-sullana.us-south.cf.appdomain.cloud/file/upload', {
          file: file,
          title: title,
          description: description,
          point: point,
          category: category,
        });
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as globals from './globals';
import {Upload} from '../publishvideo/upload.model'
import { Subject } from 'rxjs';
interface HttpEvent {
  type: any;
  reason?: any;
  value?: number;
  id?: number;
  name?: string;
}
@Injectable({
  providedIn: 'root'
})
export class UploadService {
  urlprueba : string = globals.BASE_URL+'file/upload2';
  porcentage:number;
  _eventBus: Subject<HttpEvent>;
  constructor(
    private http: HttpClient
    ) { 
  }

  upload(file, title, description, point, category){
    console.log("upload service - file :", file)
    return this.http.post(globals.BASE_URL+'file/upload2', {
          file: file,
          title: title,
          description: description,
          point: point,
          category: category,
        });
  }

  upload2( user_correo,file : File[], title:string,des: string, category: string, point:string) {
    return new Promise((resolve, reject) => {
      let formData:FormData = new FormData();
      let xhr:XMLHttpRequest = new XMLHttpRequest();
      let files = file;
      var f:File;
     /* if (params) {
        for (var key in params) {
          if (params.hasOwnProperty(key)) {
            formData.append(key, params[key]);
          }
        }
      }*/
      formData.append('file', file[0]);
      formData.append('title',title);
      formData.append('user_correo',user_correo);
      formData.append('description', des);
      formData.append('category', category);
      console.log("point"+point)
      formData.append('point', point);
      
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.response);
          }
        }
      }
    

      xhr.open('POST', this.urlprueba, true);
      xhr.send(formData);
    });
  }

}

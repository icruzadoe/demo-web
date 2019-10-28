import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Points } from '../model/points.model'
import * as globals from './globals';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  constructor(
    private http: HttpClient
    ) { 
  }

  listMedia(){
    return this.http.get(globals.BASE_URL+'listarMedia');
  }

  updateMultimedia(idMedia, category, description, point,title){
    return this.http.post(globals.BASE_URL+'updateMedia', {
      idMedia: idMedia,
      category:category,
      description: description,
      point: point,
      title: title,
    });
  }

  dropMultimedia(idMedia){
    console.log("dropMultimedia - service :",  idMedia)
    return this.http.post(globals.BASE_URL+'dropMedia', {
      id_media: idMedia,
    });
  }

  listarPuntos(){
    return this.http.get(globals.BASE_URL+'ListarPuntos');
  }

  editarPuntos(puntos : Points){
    let body = {
      "id" : puntos.id,
      "points" : puntos.points,
      "ip" : puntos.ip,
      "nombre_carpeta_destino" : puntos.nombre_carpeta_destino,
      "ciudad" : puntos.ciudad,
      "user_correo" : puntos.user_correo
    }

    return this.http.post(globals.BASE_URL+'updatePoint',body);
  }

  eliminarPuntos(puntos : Points){
    let body = {
      "id" : puntos.id,
      "user_correo" : puntos.user_correo
    }

    return this.http.post(globals.BASE_URL+'dropPoint',body);
  }
}

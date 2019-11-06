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

  updateMultimedia(idMedia, description, point,title,fecha,user_correo){
    let newDate = new Date(fecha);
    newDate.setDate(newDate.getDate() + 1)
    let request = {
      "idMedia": idMedia,
      "description": description,
      "point": point,
      "title": title,
      "dateCreated":newDate,
      "user_correo": user_correo
    };
    console.log(request);
    return this.http.post(globals.BASE_URL+'updateMedia', request);
  }

  dropMultimedia(idMedia, user_correo){
    console.log("dropMultimedia - service :",  idMedia)
    return this.http.post(globals.BASE_URL+'dropMedia', {
      idMedia: idMedia,
      user_correo: user_correo,

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

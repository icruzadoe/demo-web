import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { Points } from '../model/points.model'
import { MultimediaService } from '../services/multimedia.service'

@Component({
  selector: 'app-manageagency',
  templateUrl: './manageagency.component.html',
  styleUrls: ['./manageagency.component.css']
})
export class ManageAgencyComponent implements OnInit {
  agencyForm: FormGroup;
  points : Points[];
  _response : Object;
  editarAgencia : boolean = false;
  agenciaEdit : string;
  ipEdit : string;
  carpetaEdit : string;
  idAgency : string;
  ciudadEdit : string;
  loading : boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router:Router,
    private _serviceMultimedia : MultimediaService,
  ) { }

  ngOnInit() {

    this.listarPuntos();

    this.agencyForm = this.formBuilder.group({
      agency: ['', Validators.compose([Validators.required])],
    });

  }

  listarPuntos(){
    this.loading = true;
    this._serviceMultimedia.listarPuntos().subscribe(
      (data) => {
        if(data !== null){
          console.log(JSON.stringify(data));
          this.procesarData(data);
          localStorage.setItem('point', JSON.stringify(data));

        }
      }
    )
  }

  procesarData(responseData) {
    this.points = [];

    this.points = responseData;
    this.loading = false;
  }

  addAgency(event){
    this.router.navigate(['addagency']);

  }

  editAgency(dataEdit){
    this.editarAgencia = true;
    this.agenciaEdit = dataEdit.points;
    this.ipEdit = dataEdit.ip;
    this.carpetaEdit = dataEdit.nombre_carpeta_destino;
    this.idAgency = dataEdit.id;
  }

  cancelEdit(){
    this.editarAgencia = false;
    this.agenciaEdit = "";
    this.ipEdit = "";
    this.carpetaEdit = "";
    this.idAgency = "";
  }

  grabarEdit(){
    if(confirm("¿Desea grabar la información ingresada?")){
      let editPoint = new Points;
      editPoint.id = Number(this.idAgency);
      editPoint.points = this.agenciaEdit;
      editPoint.ip = this.ipEdit;
      editPoint.nombre_carpeta_destino = this.carpetaEdit;
      editPoint.ciudad = this.ciudadEdit;
      editPoint.user_correo = "correoprueba@gmail.com"
      this._serviceMultimedia.editarPuntos(editPoint).subscribe(

        (data) => {
            alert("Se actualizo correctamente");
            this.cancelEdit();
            this.listarPuntos();
          
        }
      )
    }
  }

  deleteAgency(id){
    if(confirm("Esta seguro que desea eliminar el registro seleccionado?")){
      let editPoint = new Points;
      editPoint.id = Number(id);
      editPoint.user_correo = "correoelimina@gmail.com";

      this._serviceMultimedia.eliminarPuntos(editPoint).subscribe(

        (data) => {
            alert("Se elimino el registro seleccionado");
            this.listarPuntos();
          
        }
      )
    }

  }

}

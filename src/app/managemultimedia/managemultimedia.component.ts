import { MultimediaService } from './../services/multimedia.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import * as moment from 'moment';
import { ExcelService } from '../services/excel.service';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

export const MY_FORMATS2 = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
@Component({
  selector: 'app-managemultimedia',
  templateUrl: './managemultimedia.component.html',
  styleUrls: ['./managemultimedia.component.css'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS2},
  ]
})
export class ManagemultimediaComponent implements OnInit {
  manageMediaForm: FormGroup;
  multimedias: any;
  multimediasBuckup: any;
  multimediaSelect:object;
  editForm : boolean = false;
  idMedia : string;
  titleAudio : string;
  descriptionAudio : string;
  point : string;
  loading : boolean = false;
  points : any[];
  agenciaSearch : string = "";
  pointsAux : any[];
  multimediasAux : string;
  minDate = new Date();
  maxDate = new Date(2019, 3, 10);
  fechaFiltro : string = "";
  fechaEdit : string = "";
  dataExcel = [];
  addNew : boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _excelService: ExcelService,
    private _serviceMultimedia: MultimediaService,
  ) { }

  ngOnInit() {
    this.manageMediaForm = this.formBuilder.group({
      agency: ['', Validators.compose([Validators.required])],
    });

    this.listMultimedia();  
  }

  generateExcel():void{
    var that = this;
    var array = []
    this._serviceMultimedia.listMedia().subscribe(data => {
      for(var register in data){
        array.push( data[register])
      }
  
     that._excelService.exportAsExcelFile(array, 'gestionar-multimedia');
    }), function (err) {  };
  }

  listMultimedia() {
    this.loading = true;
    this._serviceMultimedia.listMedia().subscribe(
      (data) => { // Success
        this.multimedias = data;
        this.multimediasBuckup = data;
          this.listarPuntos();
          this.loading = false;
      },
      (error) => {
        console.error(error);
      });
  }
  listarPuntos(){
    this.loading = true;
    this._serviceMultimedia.listarPuntos().subscribe(
      (data) => {
        if(data !== null){
         console.log(JSON.stringify(data));
          this.procesarData(data);
          this.loading = false;
          localStorage.setItem('point', JSON.stringify(data));

        }
      }
    )
  }
/*
  dateFilter = date => {
    let day = date.getDay();

    return day != 0 && day != 6;
  }*/

  changeEvent(event){

    const convertTime = moment(event.target.value).format("YYYY-MM-DD");
    this.fechaFiltro = convertTime;
    //console.log("event :", convertTime)
  }

  changeEvent2(event){

    this.fechaEdit = moment(event.target.value).format("YYYY-MM-DD");
    console.log("event :", this.fechaEdit);
  }

  procesarData(responseData) {
    this.points = [];

    this.points = responseData;
    this.pointsAux = responseData;
    this.loading = false;
  }
  
  onSubmit() {
    let agency = this.manageMediaForm.controls.agengy.value;
    let multimediaSelected = this.multimedias.filter(multimedia => multimedia.point == agency);
    this.multimedias = multimediaSelected;
  }

  searchClean(){
    this.manageMediaForm.controls.agency.setValue("");
    this.multimedias = this.multimediasBuckup;
  }

  editMultimedia(multimedia){
    //localStorage.setItem("updateMultimedia",JSON.stringify(multimedia));
    this.editForm = true;
    this.titleAudio = multimedia.title;
    this.descriptionAudio = multimedia.description;
    this.point = multimedia.pointId;
    this.idMedia = multimedia.idMedia;
    this.fechaEdit = multimedia.dateCreated;

  }

  cancel(){
    this.editForm = false;
    this.titleAudio = "";
    this.descriptionAudio = "";
    this.point = "";
    this.idMedia = "";
    this.fechaEdit = "";
  }

  editDataMultimedia(){
    this.loading = true;
    this.editForm = false;
  this._serviceMultimedia.updateMultimedia(this.idMedia,this.descriptionAudio,this.point,this.titleAudio,this.fechaEdit, localStorage.getItem("correo"))
    .subscribe(
      data =>{
        alert('Se actualizo correctamente');
        this.cancel();
        this.listMultimedia();
      }

    )
  }

  deleteMultimedia(multimedia){
    console.log("deleteMultimedia ---")
    console.log(multimedia)
    if(confirm("¿Esta seguro que desea eliminar el registro seleccionado?")){

      this._serviceMultimedia.dropMultimedia(multimedia.idMedia, localStorage.getItem("correo")) .subscribe(
        (data) => {
          alert("Se elimino el registro seleccionado");
          this.listMultimedia();
        },

        (error) => {
          alert("Se elimino el registro seleccionado");
          console.error(error);
          this.listMultimedia();

        }
      );
    }
  }

  buscarAgencia(){
    this.multimedias = this.multimediasBuckup;
    console.log(this.agenciaSearch);
    console.log(this.fechaFiltro);
    // if(!this.agenciaSearch && !this.fechaFiltro){
    //   return alert('Ingrese un parametro de busqueda');
    // }
    let datas : any;
    datas = [];
    
    if(this.fechaFiltro !== ""){
      this.multimedias.forEach(
        multimedia =>{
          if(this.agenciaSearch !== ""){
              if(multimedia.dateCreated == this.fechaFiltro &&
                multimedia.point.toUpperCase().includes(this.agenciaSearch.toUpperCase())){
              datas.push(multimedia);
            }
          }else{
            if(multimedia.dateCreated == this.fechaFiltro){
              datas.push(multimedia);
            }
          }
          
      });
    }
    else{
      this.multimedias.forEach(
        multimedia =>{
          if(multimedia.point.toUpperCase().includes(this.agenciaSearch.toUpperCase())){
            datas.push(multimedia);
          }
      });
    }
    if(datas.length == 0){
      alert('No se encontro el valor ingresado');
    }
    else{
      this.multimedias = datas;
    }

  }

  agregarMultimedia(){
    this.addNew = true;
  }

  cancelarAgregar(){
    this.addNew = false;
  }

}

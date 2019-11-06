import { Component, OnInit } from '@angular/core';
import { UserService } from './../services/user.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import * as moment from 'moment';
import { ExcelService } from '../services/excel.service';

@Component({
  selector: 'app-activityregister',
  templateUrl: './activityregister.component.html',
  styleUrls: ['./activityregister.component.css']
})
export class ActivityregisterComponent implements OnInit {
  registerActivityForm: FormGroup;
  users: any;
  registerSearch:string="";
  loading : boolean = false;
  fechaFiltro : string="";
  dataExcel = [];

  constructor(
    private formBuilder : FormBuilder,
    private _excelService: ExcelService,
    private _serviceUser: UserService,
  ) { }

  ngOnInit() {
    
    this.registerActivityForm = this.formBuilder.group({
      user: ['', Validators.compose([Validators.required])],
    });

    this.listLog();
  }

  generateExcel():void{
    var that = this;
    var array = []
    this._serviceUser.listLog("", "").subscribe(data => {
      for(var register in data){
        array.push( data[register])
      }
  
     that._excelService.exportAsExcelFile(array, 'gestionar-actividad');
    }), function (err) {  };
  }

  listLog() {
    this.loading = true;
    this._serviceUser.listLog("","").subscribe(
      (data) => { // Success
        this.users = data;
        this.loading = false;
      },
      (error) => {
        console.error(error);
      });
  }

  searchLog(){
    if(this.registerSearch == "" && this.fechaFiltro==""){
      return this.listLog();
      //return alert('Ingrese un correo');
    }
    this.loading = true;
    this._serviceUser.listLog(this.registerSearch,this.fechaFiltro).subscribe(
      (data) => { // Success
        this.users = data;
        this.loading = false;
      },
      (error) => {
        console.error(error);
      });
  }

  changeEvent(event){
    if(event.target.value != null && event.target.value != ''){
      const convertTime = moment(event.target.value).format("YYYY-MM-DD");
      this.fechaFiltro = convertTime;
      console.log("event :", this.fechaFiltro);
    }else{
      this.fechaFiltro = "";
    }

  }

}

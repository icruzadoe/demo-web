import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AgencyService } from '../services/agency.service'

@Component({
  selector: 'app-addagency',
  templateUrl: './addagency.component.html',
  styleUrls: ['./addagency.component.css']
})
export class AddagencyComponent implements OnInit {
  agencyForm: FormGroup;

  name : string;
  ip : string;
  nameFolder : string;
  ciudad : string;
  loading : boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private serviceAgency : AgencyService,
  ) { }

  ngOnInit() {
    this.agencyForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      ip: ['', Validators.required],
      nameFolder: ['', Validators.required],
    });
  }

  onSubmit(){

  }

  cancel(event){
    this.router.navigate(['manageagency']);
  }

  registrarAgencia(){
    this.loading = true;
    let body = {
      "points" : this.name,
      "ip" : this.ip,
      "nombre_carpeta_destino" : this.nameFolder,
      "ciudad" : this.ciudad,
      "user_correo" : "correo@prueba.com"
    }

    this.serviceAgency.editarPuntos(body).subscribe(
      data => {
          this.loading = false;
          alert('Se registro correctamente');
          this.router.navigate(['manageagency']);
      }
    )

  }

}

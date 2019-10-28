import { MultimediaService } from './../services/multimedia.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-managemultimedia',
  templateUrl: './managemultimedia.component.html',
  styleUrls: ['./managemultimedia.component.css']
})
export class ManagemultimediaComponent implements OnInit {
  manageMediaForm: FormGroup;
  multimedias: any;
  multimediasBuckup: any;
  multimediaSelect:object;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _serviceMultimedia: MultimediaService,
  ) { }

  ngOnInit() {
    this.manageMediaForm = this.formBuilder.group({
      agency: ['', Validators.compose([Validators.required])],
    });

    this.listMultimedia();  
  }

  listMultimedia() {
    this._serviceMultimedia.listMedia().subscribe(
      (data) => { // Success
        this.multimedias = data;
        this.multimediasBuckup = data;
      },
      (error) => {
        console.error(error);
      });
  }
  
  onSubmit() {
    let agency = this.manageMediaForm.controls.agency.value;
    let multimediaSelected = this.multimedias.filter(multimedia => multimedia.point == agency);
    this.multimedias = multimediaSelected;
  }

  searchClean(){
    this.manageMediaForm.controls.agency.setValue("");
    this.multimedias = this.multimediasBuckup;
  }

  editMultimedia(multimedia){
    localStorage.setItem("updateMultimedia",JSON.stringify(multimedia));
    this.router.navigate(['updateuser']);
  }

  deleteMultimedia(multimedia){
    console.log("deleteMultimedia ---")
    console.log(multimedia)
    if(confirm("¿Esta seguro que desea eliminar el registro seleccionado?")){

      this._serviceMultimedia.dropMultimedia(multimedia.idMedia, localStorage.getItem("user_correo")) .subscribe(
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

}

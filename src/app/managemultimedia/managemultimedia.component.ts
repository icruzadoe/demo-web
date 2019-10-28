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
    console.log("sadadadads")
    this.manageMediaForm.controls.agency.setValue("");
    console.log(this.multimediasBuckup)
    this.multimedias = this.multimediasBuckup;
  }

}

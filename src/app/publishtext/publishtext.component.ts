import { environment } from './../../environments/environment';
import { PublishtextService } from './../services/publishtext.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-publishtext',
  templateUrl: './publishtext.component.html',
  styleUrls: ['./publishtext.component.css']
})
export class PublishtextComponent implements OnInit {
  publishTextForm: FormGroup;
  invalidLogin: boolean = false;
  points: Array<any>;

  constructor(
    private formBuilder: FormBuilder,
    private _publishText: PublishtextService,
  ) { }

  ngOnInit() {
    //this.breakpoint = (window.innerWidth <= 400) ? 1 : 1;
    this.points = JSON.parse(localStorage.getItem('point'));
    console.log("this.pointData :", this.points)
    this.publishTextForm = this.formBuilder.group({
      titleText: ['', Validators.compose([Validators.required])],
      textContent: ['', Validators.required],
      pointName: ['', Validators.required],
    });
  }

  upload() {
    console.log("hiciste click")
    if (this.publishTextForm.invalid) {
      return;
    }

    console.log("loginForm :", this.publishTextForm)

    this._publishText.publishText(this.publishTextForm.controls.titleText.value,this.publishTextForm.controls.textContent.value, this.publishTextForm.controls.pointName.value)
    .subscribe(
      (data) => { // Success
       console.log(" data :", data)
      },
      (error) => {
        console.error(error);
      }
    );
  }


  selectPoint(e) {
    console.log("event", e)
    this.publishTextForm.controls.pointName.setValue(e.target.value, {
      onlySelf: true
    })
  }
  // onResize(event) {
  //   this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 2;
  //   console.log("ROW :", this.breakpoint)
  // }
}

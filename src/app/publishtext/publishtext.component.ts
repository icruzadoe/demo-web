import { Router } from '@angular/router';
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
    private router: Router,
  ) { }

  ngOnInit() {
    this.points = JSON.parse(localStorage.getItem('point'));
    this.publishTextForm = this.formBuilder.group({
      titleText: ['', Validators.compose([Validators.required])],
      textContent: ['', Validators.required],
      pointName: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.publishTextForm.invalid) {
      return;
    }

    this._publishText.publishText(this.publishTextForm.controls.titleText.value,this.publishTextForm.controls.textContent.value, this.publishTextForm.controls.pointName.value)
    .subscribe(
      (data) => { // Success
        this.router.navigate(['managemultimedia']);
      },
      (error) => {
        console.error(error);
      }
    );
  }


  selectPoint(e) {
    this.publishTextForm.controls.pointName.setValue(e.target.value, {
      onlySelf: true
    })
  }

  cancel(){
    this.router.navigate(['managemultimedia']);
  }
}

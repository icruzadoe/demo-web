import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-addagency',
  templateUrl: './addagency.component.html',
  styleUrls: ['./addagency.component.css']
})
export class AddagencyComponent implements OnInit {
  agencyForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
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

}

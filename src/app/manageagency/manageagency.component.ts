import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-manageagency',
  templateUrl: './manageagency.component.html',
  styleUrls: ['./manageagency.component.css']
})
export class ManageAgencyComponent implements OnInit {
  agencyForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router:Router,
  ) { }

  ngOnInit() {
    this.agencyForm = this.formBuilder.group({
      agency: ['', Validators.compose([Validators.required])],
    });
  }

  addAgency(event){
    this.router.navigate(['addagency']);

  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-manageuser',
  templateUrl: './manageuser.component.html',
  styleUrls: ['./manageuser.component.css']
})
export class ManageuserComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
    });
  }

  addUser(event){
    this.router.navigate(['registeruser']);

  }

  onSubmit(){
    console.log("+++++++++++++++++++++")
  }

}

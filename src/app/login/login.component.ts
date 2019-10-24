import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  invalidLogin: boolean = false;
  
  constructor(
    private formBuilder: FormBuilder,
    private _serviceLogin: LoginService,
    ) { }

  ngOnInit() {
    window.localStorage.removeItem('token');
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log("hiciste click")
    if (this.loginForm.invalid) {
      return;
    }

    console.log("loginForm :", this.loginForm)

    this._serviceLogin.login(this.loginForm.controls.username.value,this.loginForm.controls.password.value)
    .subscribe(
      (data) => { // Success
       console.log(" data :", data)
      },
      (error) => {
        console.error(error);
      }
    );
    const loginPayload = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value
    }

  }

}
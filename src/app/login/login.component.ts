import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

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
    private router: Router,
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log("hiciste click")
    if (this.loginForm.invalid) {
      return;
    }

    console.log("loginForm :", this.loginForm)

    this._serviceLogin.login(this.loginForm.controls.password.value, this.loginForm.controls.email.value)
      .subscribe(
        (data) => { // Success
          localStorage.setItem('point', JSON.stringify(data));

          let login = {
            "user":this.loginForm.controls.email.value,
            "auth":true,
          }
          localStorage.setItem('login', JSON.stringify(login));
          console.log(JSON.parse(localStorage.getItem('login')));
          this.router.navigate(['/home']);
        },
        (error) => {
          console.error(error);
        }
      );
  }

}
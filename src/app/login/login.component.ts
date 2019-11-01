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
  advertencia: string;

  constructor(
    private formBuilder: FormBuilder,
    private _serviceLogin: LoginService,
    private router: Router,
  ) {
    this.advertencia = "....";
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required],
    });

    let loginData = JSON.parse(localStorage.getItem('login'));
    if (loginData) {
      if (loginData.user = ! null && loginData.auth) {
        this.router.navigate(['manageuser']);
      }
    }
  }

  validateEmail(o) {
    if (!this.loginForm.controls.email.value && (o == null || o == "")) {
      return true;
    }
    var email_regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (!email_regex.test(o)) {
      return false;
    }
    else {
      return true;
    }
  }
  retroceso() {
    if (!this.validateEmail(this.loginForm.controls.email.value)) {

      this.advertencia = "Correo electrónico no válido."
      return;
    }
  }

  onSubmit() {
    this.retroceso();
    if (this.loginForm.invalid) {
      return;
    }

    this._serviceLogin.login(this.loginForm.controls.password.value, this.loginForm.controls.email.value)
      .subscribe(
        (data) => {
          localStorage.setItem('userLogin', JSON.stringify(data));

          let login = {
            "user": this.loginForm.controls.email.value,
            "auth": true,
          }

          localStorage.setItem('login', JSON.stringify(login));
          localStorage.setItem('correo', this.loginForm.controls.email.value);
          this.router.navigate(['/manageuser']);
        },

        (error) => {
          console.error(error);
          this.invalidLogin = true;
          setTimeout(() => {
            this.invalidLogin = false
          }, 5000);
          this.advertencia = "Credencial Incorrecta..."
        }
      );
  }
}
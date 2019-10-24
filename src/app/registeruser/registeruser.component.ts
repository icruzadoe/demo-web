import { RegisteruserService } from '../services/registeruser.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {

  loginForm: FormGroup;
  invalidLogin: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private _serviceRegisterUser: RegisteruserService,
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

    this._serviceRegisterUser.register(this.loginForm.controls.password.value, this.loginForm.controls.email.value)
      .subscribe(
        (data) => { // Success
          console.log(" data :", data)
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
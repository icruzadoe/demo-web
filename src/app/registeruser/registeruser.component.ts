import { RegisteruserService } from '../services/registeruser.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {

  loginForm: FormGroup;
  invalidLogin: boolean = false;
  typeUsers: Array<any>;

  constructor(
    private formBuilder: FormBuilder,
    private _serviceRegisterUser: RegisteruserService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      name: ['', Validators.required],
      numCel: ['', Validators.required],
      password: ['', Validators.required],
      typeUser: ['', Validators.required],
    });

    this.typeUsers = [
      {
        type: "admin",
      },
      {
        type: "user",
      }
    ]
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    this._serviceRegisterUser.register(this.loginForm.controls.password.value, this.loginForm.controls.numCel.value, this.loginForm.controls.email.value)
      .subscribe(
        (data) => { // Success
          console.log(" data :", data)
        },
        (error) => {
          console.error(error);
        }
      );
  }

  selectTypeUser(event){
    console.log(event)
  }

  cancel(){
    this.router.navigate(['']);
  }
}
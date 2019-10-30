import { UserService } from '../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  loginForm: FormGroup;
  invalidLogin: boolean = false;
  typeUsers: Array<any>;
  user: any;

  constructor(
    private formBuilder: FormBuilder,
    private _serviceUser: UserService,
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

    this.user = JSON.parse(localStorage.getItem('userUpdate'));
    if(this.user){
      this.loginForm.controls.numCel.setValue(this.user.celular);
      this.loginForm.controls.email.setValue(this.user.correo);
      this.loginForm.controls.password.setValue(this.user.password);
      this.loginForm.controls.typeUser.setValue(this.user.privilegio);
      this.loginForm.controls.name.setValue(this.user.username);
    }

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

    this._serviceUser.updateUser(this.user.id, this.loginForm.controls.name.value,
      this.loginForm.controls.password.value,
      this.loginForm.controls.numCel.value,
      this.loginForm.controls.email.value,
      this.loginForm.controls.typeUser.value, localStorage.getItem("correo"))
      .subscribe(
        (data) => { // Success
          localStorage.removeItem("userUpdate");
          this.router.navigate(['manageuser']);
        },
        (error) => {
          console.error(error);
          this.router.navigate(['manageuser']);

        }
      );
  }

  selectTypeUser(event) {

  }

  cancel() {
    localStorage.removeItem("userUpdate");
    this.router.navigate(['manageuser']);
  }
}
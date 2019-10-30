import { UserService } from '../../services/user.service';
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
    alert("guardó")
    

    this._serviceUser.register(this.loginForm.controls.name.value,
      this.loginForm.controls.password.value,
      this.loginForm.controls.numCel.value,
      this.loginForm.controls.email.value,
      this.loginForm.controls.typeUser.value,
       localStorage.getItem("correo"))
      .subscribe(
        (data) => { // Success
          console.log(" data :", data)
        //  this.router.navigate(['manageuser']);
        alert("guardó")

        },
        (error) => {
          console.error(error);
      //  this.router.navigate(['manageuser']);
      alert("no guardó")


        }
      );
  }

  selectTypeUser(event) {
    console.log(event)
  }

  cancel() {
    this.router.navigate(['manageuser']);
  }
}
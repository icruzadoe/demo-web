import { UserService } from './../services/user.service';
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
  users: any;
  usersBuckup: any;
  userSelect:object;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _serviceUser: UserService,
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      
    });
  
    this.listUsers();
    /*
     this.users = [
       {
         "id":2,
         "username":"juan cabrichon",
         "correo": "fabidecolichon@gmail.com",
         "celular": 98765444,
         "privilegio" : "admin",
       },
       {
         "id":3,
         "username":"fabiola de cabrichon",
         "correo": "fabidecolichon@gmail.com",
         "celular": 98765444,
         "privilegio" : "user",
       },
       {
         "id":4,
         "username":"jorge chavez soplanuca",
         "correo": "soplanuca@gmail.com",
         "celular": 98765444,
         "privilegio" : "admin",
       },
       {
         "id":5,
         "username":"juan cabrichon",
         "correo": "fabidecolichon@gmail.com",
         "celular": 98765444,
         "privilegio" : "admin",
       }
     ]*/
     this.usersBuckup = this.users;
  }

  listUsers() {
    this._serviceUser.listUser().subscribe(
      (data) => { // Success
        this.users = data;
      },
      (error) => {
        console.error(error);
      });
  }

  addUser(event) {
    this.router.navigate(['registeruser']);

  }

  editUser(user) {
    localStorage.setItem("user",JSON.stringify(user));
    console.log(JSON.parse(localStorage.getItem('user')))
    this.router.navigate(['registeruser']);
  }

  deleteUser(event) {

  }

  onSubmit() {
    let email = this.loginForm.controls.email.value;
    let userSelect = this.users.filter(user => user.correo == email);
    this.users = userSelect;
  }

  searchClean(){
    this.users = this.usersBuckup;
  }
}
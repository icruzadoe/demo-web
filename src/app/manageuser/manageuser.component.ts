import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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
        console.log("data user:", data)
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
    localStorage.setItem("userUpdate",JSON.stringify(user));
    this.router.navigate(['updateuser']);
  }

  deleteUser(user) {
    this._serviceUser.deleteUser(user.id);
    
  }

  onSubmit() {
    let email = this.loginForm.controls.email.value;
    let userSelect = this.users.filter(user => user.correo == email);
    this.users = userSelect;
  }

  searchClean(){
    this.loginForm.controls.email.setValue("");
    this.users = this.usersBuckup;
  }
}

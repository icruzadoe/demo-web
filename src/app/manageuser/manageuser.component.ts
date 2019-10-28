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
  }

  listUsers() {
    this._serviceUser.listUser().subscribe(
      (data) => { // Success
        this.users = data;
        this.usersBuckup = data;
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
   /* this._serviceUser.updateUser(user.id,user.nameUser,user.password,user.numCel,
      user.email,user.typeUser).subscribe(
        (data) => {
          this.router.navigate(['updateuser']);
        },
  
        (error) => {
          console.error(error);
        }
      );
*/
  }

  deleteUser(user) {

    if(confirm("¿Esta seguro que desea eliminar el registro seleccionado?")){
    //  alert("eliminando"+user.id)
    //  alert(JSON.stringify(user))
    this._serviceUser.deleteUser(user.id).subscribe(
      (data) => {
        console.error("data");
        // this.router.navigate(['manageuser']);
        alert("Se elimino el registro seleccionado");
        this.listUsers();
      },

      (error) => {
        console.error(error);
        // this.router.navigate(['manageuser']);
        alert("Se elimino el registro seleccionado");
        this.listUsers();
      }
    );
  }
    
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

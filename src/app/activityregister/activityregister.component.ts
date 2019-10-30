import { Component, OnInit } from '@angular/core';
import { UserService } from './../services/user.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-activityregister',
  templateUrl: './activityregister.component.html',
  styleUrls: ['./activityregister.component.css']
})
export class ActivityregisterComponent implements OnInit {
  registerActivityForm: FormGroup;
  users: any;
  registerSearch:string;
  loading : boolean = false;

  constructor(
    private formBuilder : FormBuilder,
    private _serviceUser: UserService,
  ) { }

  ngOnInit() {
    this.registerActivityForm = this.formBuilder.group({
      user: ['', Validators.compose([Validators.required])],
    });

    this.listLog();
  }

  listLog() {
    this.loading = true;
    this._serviceUser.listLog("").subscribe(
      (data) => { // Success
        this.users = data;
        this.loading = false;
      },
      (error) => {
        console.error(error);
      });
  }

  searchLog(){
    if(!this.registerSearch){
      this.listLog();
      //return alert('Ingrese un correo');
    }
    this.loading = true;
    this._serviceUser.listLog(this.registerSearch).subscribe(
      (data) => { // Success
        this.users = data;
        this.loading = false;
      },
      (error) => {
        console.error(error);
      });
  }

}

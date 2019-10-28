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
    this._serviceUser.listLog().subscribe(
      (data) => { // Success
        this.users = data;
        console.log("data")
      },
      (error) => {
        console.error(error);
      });
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-activityregister',
  templateUrl: './activityregister.component.html',
  styleUrls: ['./activityregister.component.css']
})
export class ActivityregisterComponent implements OnInit {
  registerActivityForm: FormGroup;

  constructor(
    private formBuilder : FormBuilder,
  ) { }

  ngOnInit() {
    this.registerActivityForm = this.formBuilder.group({
      user: ['', Validators.compose([Validators.required])],
    });
  }

}

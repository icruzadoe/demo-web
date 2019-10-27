import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-managemultimedia',
  templateUrl: './managemultimedia.component.html',
  styleUrls: ['./managemultimedia.component.css']
})
export class ManagemultimediaComponent implements OnInit {
  agencyForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.agencyForm = this.formBuilder.group({
      agency: ['', Validators.compose([Validators.required])],
    });
  }

}

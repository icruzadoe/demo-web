import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UploadService } from '../services/upload.service';

@Component({
  selector: 'app-publishbanner',
  templateUrl: './publishbanner.component.html',
  styleUrls: ['./publishbanner.component.css']
})
export class PublishbannerComponent implements OnInit {

  //breakpoint: number;
  publishBannerForm: FormGroup;
  invalidLogin: boolean = false;
  points: Array<any>;

  constructor(
    private formBuilder: FormBuilder,
    private _uploadService: UploadService,
  ) { }

  ngOnInit() {
    //this.breakpoint = (window.innerWidth <= 400) ? 1 : 1;
    this.points = JSON.parse(localStorage.getItem('point'));
    this.publishBannerForm = this.formBuilder.group({
      titleBanner: ['', Validators.compose([Validators.required])],
      descriptionBanner: ['', Validators.required],
      fileImage: ['', Validators.required],
      pointName: ['', Validators.required],
    });
  }

  loadImage(event) {
    console.log("loadImage :", event)
  }

  upload() {
    console.log("hiciste click")
    if (this.publishBannerForm.invalid) {
      return;
    }

    console.log("Video Fomr :", this.publishBannerForm)

    this._uploadService.upload(
      this.publishBannerForm.controls.fileImage.value,
      this.publishBannerForm.controls.titleBanner.value,
      this.publishBannerForm.controls.descriptionBanner.value,
      this.publishBannerForm.controls.pointName.value, "2")
      .subscribe(
        (data) => { // Success
          console.log(" data :", data)
        },
        (error) => {
          console.error(error);
        }
      );
  }

  selectPoint(e) {
    console.log("event", e)
    this.publishBannerForm.controls.pointName.setValue(e.target.value, {
      onlySelf: true
    })
  }
}

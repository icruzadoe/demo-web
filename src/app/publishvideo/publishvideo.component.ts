import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UploadService } from '../services/upload.service';

@Component({
  selector: 'app-publishvideo',
  templateUrl: './publishvideo.component.html',
  styleUrls: ['./publishvideo.component.css']
})
export class PublishvideoComponent implements OnInit {
  //breakpoint: number;
  publishVideoForm: FormGroup;
  invalidLogin: boolean = false;
  points: Array<any>;
  fileName : string;

  constructor(
    private formBuilder: FormBuilder,
    private _uploadService: UploadService,
  ) { }

  ngOnInit() {
    //this.breakpoint = (window.innerWidth <= 400) ? 1 : 1;
    this.points = JSON.parse(localStorage.getItem('point'));
    this.publishVideoForm = this.formBuilder.group({
      titleVideo: ['', Validators.compose([Validators.required])],
      descriptionVideo: ['', Validators.required],
      fileVideo: ['', Validators.required],
      pointName: ['', Validators.required],
    });
  }

  loadImage(event) {
    console.log("event :", event)
    console.log("target :", event.target)
    console.log("files :", event.target.files)
    console.log("loadImage :", event.target.files[0].name)
    this.fileName = event.target.files[0].name;
  }

  upload() {
    console.log("hiciste click")
    if (this.publishVideoForm.invalid) {
      return;
    }

    console.log("Video Fomr :", this.publishVideoForm)

    this._uploadService.upload(
      this.fileName,
      this.publishVideoForm.controls.titleVideo.value,
      this.publishVideoForm.controls.descriptionVideo.value,
      this.publishVideoForm.controls.pointName.value, "1")
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
    this.publishVideoForm.controls.pointName.setValue(e.target.value, {
      onlySelf: true
    })
  }

  // onResize(event) {
  //   this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 2;
  //   console.log("ROW :", this.breakpoint)
  // }

}

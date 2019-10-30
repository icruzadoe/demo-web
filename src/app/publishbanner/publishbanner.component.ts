import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UploadService } from '../services/upload.service';

@Component({
  selector: 'app-publishbanner',
  templateUrl: './publishbanner.component.html',
  styleUrls: ['./publishbanner.component.css']
})
export class PublishbannerComponent implements OnInit {
  @ViewChild('fileInput', { static: true }) inputEl: ElementRef;

  //breakpoint: number;
  publishBannerForm: FormGroup;
  invalidLogin: boolean = false;
  points: Array<any>;
  fileName: string;
  files: File[];

  constructor(
    private formBuilder: FormBuilder,
    private _uploadService: UploadService,
    private router: Router,
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
    // console.log("event :", event)
    // console.log("target :", event.target)
    // console.log("files :", event.target.files)
    // console.log("loadImage :", event.target.files[0].name)
    this.fileName = event.target.files[0].name;
    this.files = event.target.files;
  }

  upload() {
 
console.log("upload")
    //console.log("Video Fomr :", this.publishBannerForm)
    let audioElement = this.inputEl.nativeElement;
    //console.log('Archivos:' + audioElement.files.length);
    let file = audioElement.files[0];
    this._uploadService.upload2(
      "asd",
      audioElement.files,
      this.publishBannerForm.controls.titleVideo.value,
      this.publishBannerForm.controls.descriptionVideo.value, "BANNER",
      this.publishBannerForm.controls.pointName.value);
      this.router.navigate(['managemultimedia']);


    /*   this._uploadService.upload(
         this.fileName,
         this.publishVideoForm.controls.titleVideo.value,
         this.publishVideoForm.controls.descriptionVideo.value,
         this.publishVideoForm.controls.pointName.value, "1")
         .subscribe(
           (data) => { // Success
             this.router.navigate(['managemultimedia']);
             console.log(" data :", data)
           },
           (error) => {
             console.error(error);
           }
         );*/
  }

  selectPoint(e) {
    this.publishBannerForm.controls.pointName.setValue(e.target.value, {
      onlySelf: true
    })
  }

  cancel() {
    this.router.navigate(['managemultimedia'])
  }
}

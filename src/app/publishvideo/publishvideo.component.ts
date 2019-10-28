import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UploadService } from '../services/upload.service';

@Component({
  selector: 'app-publishvideo',
  templateUrl: './publishvideo.component.html',
  styleUrls: ['./publishvideo.component.css']
})
export class PublishvideoComponent implements OnInit {
  @ViewChild('fileInput', { static: true }) inputEl: ElementRef;

  publishVideoForm: FormGroup;
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
    this.points = JSON.parse(localStorage.getItem('point'));
    this.publishVideoForm = this.formBuilder.group({
      titleVideo: ['', Validators.compose([Validators.required])],
      descriptionVideo: ['', Validators.required],
      fileVideo: ['', Validators.required],
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
    

    // console.log("Video Fomr :", this.publishVideoForm)
    let audioElement = this.inputEl.nativeElement;
    // console.log('Archivos:' + audioElement.files.length);
    let file = audioElement.files[0];
    this._uploadService.upload2(localStorage.getItem("correo"),
    audioElement.files, this.publishVideoForm.controls.titleVideo.value,
     this.publishVideoForm.controls.descriptionVideo.value)
     this.router.navigate(['managemultimedia']);


    /*   this._uploadService.upload(
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
         );*/
  }

  selectPoint(e) {
    this.publishVideoForm.controls.pointName.setValue(e.target.value, {
      onlySelf: true
    })
  }

  cancel() {
    this.router.navigate(['managemultimedia']);
  }
}

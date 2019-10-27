import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UploadService } from '../services/upload.service';

@Component({
  selector: 'app-publishaudio',
  templateUrl: './publishaudio.component.html',
  styleUrls: ['./publishaudio.component.css']
})
export class PublishaudioComponent implements OnInit {
  @ViewChild('fileInput',{ static: true }) inputEl: ElementRef;
  //breakpoint: number;
  publishAudioForm: FormGroup;
  invalidLogin: boolean = false;
  points: Array<any>;
  fileName : string;
  files : File[];

  constructor(
    private formBuilder: FormBuilder,
    private _uploadService: UploadService,
  ) { }

  ngOnInit() {
    //this.breakpoint = (window.innerWidth <= 400) ? 1 : 1;
    this.points = JSON.parse(localStorage.getItem('point'));
    this.publishAudioForm = this.formBuilder.group({
      titleAudio: ['', Validators.compose([Validators.required])],
      descriptionAudio: ['', Validators.required],
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
    if (this.publishAudioForm.invalid) {
      return;
    }

    console.log("Video Fomr :", this.publishAudioForm)
    let audioElement = this.inputEl.nativeElement;
    console.log('Archivos:' + audioElement.files.length);
    let file = audioElement.files[0];
    this._uploadService.upload2(audioElement.files,this.publishAudioForm.controls.titleAudio.value,this.publishAudioForm.controls.descriptionAudio.value)

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
    console.log("event", e)
    this.publishAudioForm.controls.pointName.setValue(e.target.value, {
      onlySelf: true
    })
  }

  // onResize(event) {
  //   this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 2;
  //   console.log("ROW :", this.breakpoint)
  // }

}

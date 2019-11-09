import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UploadService } from '../services/upload.service';


import { HttpClient } from '@angular/common/http';
import * as globals from '../services/globals';
import { Subject } from 'rxjs';
import {Upload} from '../publishvideo/upload.model'

interface HttpEvent {
  type: any;
  reason?: any;
  value?: number;
  id?: number;
  name?: string;
}

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

  progress: number = 0;
  loading: boolean = false;
  
  urlprueba : string = globals.BASE_URL+'file/upload2';

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
    this.upload2(
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
    this.router.navigate(['addmultimedia'])
  }

  upload2(user_correo,file : File[], title:string,des: string, category: string, point:string) {
    return new Promise((resolve, reject) => {
      let formData:FormData = new FormData();
      let xhr:XMLHttpRequest = new XMLHttpRequest();
      let files = file;
      var f:File;
     /* if (params) {
        for (var key in params) {
          if (params.hasOwnProperty(key)) {
            formData.append(key, params[key]);
          }
        }
      }*/
      formData.append('file', file[0]);
      formData.append('title',title);
      formData.append('user_correo',user_correo);
      formData.append('description', des);
      formData.append('category', category);
      console.log("point"+point)
      formData.append('point', point);
      
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.response);
          }
        }
      }

      
      xhr.upload.onprogress = (event) => {
        this.progress = Math.round(event.loaded / event.total * 100);
        console.log("progreso: "+this.progress)
        // this._eventBus.next({type: 'progress', reason: 'upload', value: this.progress, id: requestId, name: f.name});
        if(this.progress== 100){
            this.router.navigate(['managemultimedia']);
          // console.log("entrroooo****")
         }
      };

     

      xhr.open('POST', this.urlprueba, true);
      xhr.send(formData);
    });
  }
}

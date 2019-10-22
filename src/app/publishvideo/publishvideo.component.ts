import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publishvideo',
  templateUrl: './publishvideo.component.html',
  styleUrls: ['./publishvideo.component.css']
})
export class PublishvideoComponent implements OnInit {
  breakpoint: number;
  constructor() { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 1;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 2;
    console.log("ROW :", this.breakpoint)
  }

}

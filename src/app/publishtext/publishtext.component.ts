import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publishtext',
  templateUrl: './publishtext.component.html',
  styleUrls: ['./publishtext.component.css']
})
export class PublishtextComponent implements OnInit {
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

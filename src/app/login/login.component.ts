import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  breakpoint: number;
  hide = true;
  constructor() { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 3;
    console.log("tamaño :", window.innerWidth);
    console.log("ROW :", this.breakpoint)
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 3;
    console.log("ROW :", this.breakpoint)
  }
}

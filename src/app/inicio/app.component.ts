import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mode = new FormControl('over');
  shouldRun = true;
  breakpoint: number;
  private router: Router;

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 2;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 2;
    console.log("ROW :", this.breakpoint)
  }
}

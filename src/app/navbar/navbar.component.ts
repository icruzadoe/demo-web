import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loginData: any;
  showButton: boolean;
  mode = new FormControl('over');
  shouldRun = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.loginData = JSON.parse(localStorage.getItem('login'));

    if (this.loginData) {
      if (this.loginData.user = ! null && this.loginData.auth) {
        this.shouldRun = true;
      }
    }
  }

  logout(event) {
    localStorage.clear();
    this.router.navigate(['']);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loginData : any;
  showButton : boolean;
  isLogout : boolean = false;
  constructor() { }

  ngOnInit() {
    this.loginData = JSON.parse(localStorage.getItem('login'));

    if (this.loginData.user = ! null && this.loginData.auth) {
      this.showButton = true;
    }
  }

  login(event){
    this.isLogout = true;
  }

  logout(event){
    this.isLogout = false;
    localStorage.clear();
  }

}

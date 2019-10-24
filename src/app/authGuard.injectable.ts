import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate() {
    let login = JSON.parse(localStorage.getItem('login'));

    if (login.user = ! null && login.auth) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}

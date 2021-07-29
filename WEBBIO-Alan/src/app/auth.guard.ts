import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
//command
//ng g guard auth -> CanActivate
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  //step:1
  constructor(
    private authServices: AuthService,
    private router:Router
  ){}

  canActivate():boolean{
    if(this.authServices.logIn()){//está logueado
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

}

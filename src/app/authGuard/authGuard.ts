import { Injectable } from '@angular/core';
import { CanActivate,Route, Router } from '@angular/router';
import { LoginService } from '../service/login.service';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private loginService: LoginService,private router:Router){

    }
    // can Activate is an
    canActivate():boolean {

      if (this.loginService.loggedIn()) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    }


}

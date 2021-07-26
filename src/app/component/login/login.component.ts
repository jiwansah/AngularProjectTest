import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  providers:[LoginService]
})
export class LoginComponent {

  constructor(private loginService: LoginService, private router: Router){
  }

  login(data:any):void {
    console.log(data);
    this.loginService.login(data).subscribe(res=>{
      console.log(res);
      sessionStorage.setItem('token', res['token']);
      //sessionStorage.setItem('userName', 'true');
      this.router.navigate(['/usersList']);
    },error=>{
      console.log("error");
      console.log(error);
     // sessionStorage.setItem('userName', 'false');
    });
  }
}


import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService{

  loginUrl:string = 'http://localhost:9001/login';

  constructor(private httpClinet: HttpClient){
  }

  login(data):Observable<any>{
    return this.httpClinet.post(this.loginUrl, data);
  }

  loggedIn() {
    return sessionStorage.getItem('token');
  }

}

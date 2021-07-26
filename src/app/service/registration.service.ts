
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class RegistrationService{

 // url:string = 'https://jsonplaceholder.typicode.com/users';
  url:string = 'http://localhost:9001/users';

  constructor(private httpClinet: HttpClient){
  }

  getUser():Observable<any>{
    return this.httpClinet.get(this.url);
  }
  saveUser(data):Observable<any>{
    return this.httpClinet.post(this.url, data);
  }
  deleteUser(data:string):Observable<any>{
      return this.httpClinet.delete(this.url+'/'+data);
  }
}

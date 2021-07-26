
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CustomerService {

  url:string = 'http://localhost:9001/customers';

  constructor(private httpClinet: HttpClient){
  }

  getCustomersList():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + sessionStorage.getItem('token')
      })
    };
    return this.httpClinet.get(this.url);
  }
  getCustomer(id: String):Observable<any>{
    return this.httpClinet.get(this.url+"/"+id);
  }
  saveCustomer(data):Observable<any>{
    return this.httpClinet.post(this.url, data);
  }
  editCustomer(data):Observable<any>{
    return this.httpClinet.put(this.url, data);
  }
  deleteCustommer(customerId:string):Observable<any>{
      return this.httpClinet.delete(this.url+'/'+customerId);
  }
}

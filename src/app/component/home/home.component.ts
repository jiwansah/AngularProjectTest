import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormsModule, FormGroup, Validator} from '@angular/forms';

@Component({
  selector: 'home-root',
  //templateUrl: './app.component.html'
  /*template: ` App Component <br/>
  <a routerLink='/Register'>Sign Up</a> <br/>
  <a routerLink='/Login'>Login</a>
  <router-outlet></router-outlet>
  `*/
  /*template: ` Home Component <br/>
  <a routerLink='/registratin'>Sign Up</a> <br/>
  <a routerLink='/login'>Login</a> <br/><br/>
  <router-outlet></router-outlet>
  `*/
  template: `<br/><br/> <b>Home Page </b>`
})
export class HomeComponent {

  formGroup:FormGroup;

  constructor(private formBuilder: FormBuilder){
    // formGroup is a object of FormGroup Class which point to Structure known as Model
    this.formGroup = this.formBuilder.group({
      /* Define Model */
      'eCode':'',
      'eName':'',
      'eAge':0
    });
  }

  register(data:any) {
    console.log(data);
  }
}

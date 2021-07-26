import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { AuthGuard } from 'src/app/authGuard/authGuard';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent implements OnInit, OnChanges {

  isValidSession:boolean = false;
  constructor(private formBuilder: FormBuilder, private authGuard: AuthGuard){
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.isValidSession = this.authGuard.canActivate();
    console.log("LayoutComponent ngOnChange: " + this.isValidSession);
  }

  ngOnInit(){
    this.isValidSession = this.authGuard.canActivate();
    console.log("LayoutComponent OnInit " + this.isValidSession);
  }

  callHome(){
    console.log("callHome " + this.isValidSession);
  }

  logout(){
    sessionStorage.clear();
  }
}

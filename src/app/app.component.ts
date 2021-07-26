import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { SessionService } from './service/session.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnChanges {

  isValidSession:boolean = false;
  constructor(private formBuilder: FormBuilder, private sessionService: SessionService){
  }

  ngOnChanges(changes: SimpleChanges): void {

    console.log("AppComponent ngOnChange: " + this.isValidSession);
  }

  ngOnInit(){

    console.log("AppComponent OnInit " + this.isValidSession);
  }


}

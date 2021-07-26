
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../../service/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: 'registration.component.html',
  styleUrls: ['registration.component.css']
})
export class RegistrationComponent {

  formGroup:FormGroup;

  constructor(private formBuilder: FormBuilder, private router:Router, private registrationService: RegistrationService){
    // formGroup is a object of FormGroup Class which point to Structure known as Model
    this.formGroup = this.formBuilder.group({
      /* Define Model */
      'userName':'',
      'name':'',
      'age':20,
      'email':'',
      'password': ''
    });
  }

  // at this point we call service using httpclass once record save successfully should navigate to home page.
  register(data:any) {
    console.log(data);
    this.registrationService.saveUser(data).subscribe(res=>{
      this.router.navigate(['/home']);
    }, error=>{
      console.log(error);
    });

  }

}

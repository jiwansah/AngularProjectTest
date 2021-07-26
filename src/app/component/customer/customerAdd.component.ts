
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';
import { MustMatch } from './MustMatch';

@Component({
  selector: 'app-add-customer',
  templateUrl: 'customerAdd.component.html',
  styleUrls: ['customerAdd.component.css']
})
export class CustomerAddComponent implements OnInit{

  formGroup:FormGroup;
  submitted:boolean = false;

  constructor(private formBuilder: FormBuilder, private router:Router,
                private customerService: CustomerService) {

    this.formGroup = this.formBuilder.group({
      'title': ['', Validators.required],
      'name':['', Validators.required],
      'address':['', Validators.required],
      'email':['', Validators.email],
      'mobile': ['', [Validators.required, Validators.minLength(6)]],
      'mobile2': ['', [Validators.required, Validators.minLength(6)]]
    },
    {
      validator: MustMatch('mobile', 'mobile2')
    });
  }

  ngOnInit(): void {
    this.submitted = false;
  }

  get f() { return this.formGroup.controls; }

  saveCustomer(data:any) {
    this.submitted=true;
    if (this.formGroup.invalid) {
      return;
    }
    console.log(data);
    this.customerService.saveCustomer(data).subscribe(success=>{
      this.router.navigate(['/customerList']);
    }, error=>{
      console.log(error);
    });
  }

  onReset() {
    this.submitted = false;
    this.formGroup.reset();
}
}

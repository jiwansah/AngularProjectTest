import { Component } from '@angular/core';
import { CustomerService } from 'src/app/service/customer.service';


@Component({
  selector: 'app-customer-list',
  templateUrl: 'customerList.component.html'
})
export class CustomerListComponent {

  customersData: any = [];
  headers = [{name: "Title", id: "title"}, {name: "Name", id: "name"}, {name: "Address", id: "address"},
              {name: "Email", id: "email"},{name: "Mobile", id: "mobile"}];

  constructor(private customerService: CustomerService) {
    this.listCustomers();
  }

  listCustomers():void {
    this.customerService.getCustomersList().subscribe(success=>{
      this.customersData = success;
    }, error=>{
      console.log(error);
    });
  }

  deleteUser(id:string):void {
    this.customerService.deleteCustommer(id).subscribe(success=>{
      this.listCustomers();
    }, error=>{
      console.log(error);
    });
  }

}

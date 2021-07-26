import { Component } from '@angular/core';
import { RegistrationService } from '../../service/registration.service';

@Component({
  selector: 'app-user',
  templateUrl: 'user.component.html'
})
export class UserComponent {

  usersData: any = [];
  constructor(private registrationService: RegistrationService){
    this.listUsers();
  }

  listUsers():void {
    this.registrationService.getUser().subscribe(success=>{
      console.log(success);
      this.usersData = success;
    }, error=>{
      console.log(error);
    });
  }

  deleteUser(userName):void {
    this.registrationService.deleteUser(userName).subscribe(success=>{
      this.listUsers();
    }, error=>{
      console.log(error);
    });
  }

}

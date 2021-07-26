import { Injectable } from "@angular/core";

@Injectable()
export class SessionService
{
  userName:string = "";
  validSession:boolean = false;

  constructor(){
  }

  public isValidSession(): boolean{
    return this.validSession;
  }
  public setValidSession(validSession: boolean){
    this.validSession = validSession;
  }

  public setUserName(userName: string){
    this.userName = userName;
  }
  public getUserName():string {
    return this.userName;
  }
}

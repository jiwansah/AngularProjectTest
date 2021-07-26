import { Injectable } from "@angular/core";
import { TestAPI } from "./testAPI.service";


@Injectable()
export class Test {

  constructor(private testAPI: TestAPI) {
  }
  getAddress():string {
    return this.testAPI.getAddress();
  }
}

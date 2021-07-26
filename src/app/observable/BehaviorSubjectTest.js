// Behaviour Subject
import { BehaviorSubject } from "rxjs";

const obj = new BehaviorSubject("Virtual function");// Default value "Virtual Function"

//Subscriber 1
obj.subscribe((data)=>{
    console.log("Subscriber 1", {data});
});
console.log("------------------------------------");
/*npm install rxjs
obj.next("Override function 1");*/
obj.next("Last Emitted function 2");


//Subscriber 2; it will get current/last value only
obj.subscribe((data)=>{
    console.log("Subscriber 2", {data});
});
console.log("------------------------------------");
 obj.next("Final Emitted function 3");

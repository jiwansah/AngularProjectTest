//Subject: It is an observable that provides real time values to multiple subscribers.
import {Subject} from 'rxjs';

const obj = new Subject();
console.log("---------------------------");
//Subscriber 1
obj.subscribe((data)=>{
    console.log("Subscriber1:", data);
});

console.log("---------------------------");
//Subscriber 2
obj.subscribe((data)=>{
    console.log("Subscriber2:", data);
});

//Both subscriber 1 and 2 will get all emitted values
obj.next("A");
//obj.complete(); //complete can be called to stop new emits
obj.next("B");
console.log("---------------------------");
//Newly added subscriber can't see previous values
obj.subscribe((data)=>{
    console.log("Subscriber3:", data);
});
obj.next("C");

//Async Subject that only emits a value when it completes.
 //It will emit its latest value to all its observers on completion.

 import { AsyncSubject } from 'rxjs';//Emits its last value on completion
 const sub = new AsyncSubject();
 sub.subscribe((data)=>{

     console.log("subscriber1",{data});
 });
 sub.next(123); //nothing logged
 sub.next(345); //nothing logged
 sub.subscribe((data)=>{

     console.log("subscriber2",{data});
 });

 sub.next(456); //nothing logged
 sub.complete(); //456, 456 logged by both subscribers  // Last value gets pushed to Observer

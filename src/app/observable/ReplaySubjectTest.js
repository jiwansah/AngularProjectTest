import * as Rx from "rxjs";

const subject = new Rx.ReplaySubject(2);

// subscriber 1
subject.subscribe((data) => {
    console.log('Subscriber A:', data);
});

subject.next("First")
subject.next("Second")
subject.next("Third")

// subscriber 2
subject.subscribe((data) => {
    console.log('Subscriber B:', data);
});

subject.next("Fourth");
subject.complete();
subject.next("Five");



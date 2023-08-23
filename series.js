const { Subject, of, delay, concatAll } = require("rxjs");

// const stream = from(input);
const stream = new Subject();

const subject = new Subject();

subject.pipe(concatAll()).subscribe(x => console.log(`${x}`));

stream.subscribe((x) => {
    subject.next((x % 2 === 0) ? of(x).pipe(delay(10)) : of(x).pipe(delay(1500)));
});

setInterval(() => {
    // generate random integer between 1 and 1000
    const random = Math.floor(Math.random() * 1000) + 1;

    stream.next(random);
}, 500);
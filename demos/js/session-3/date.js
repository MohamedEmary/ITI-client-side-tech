// Date time
// date constuctor
// OOP => Class
// object from Date Class
// Date() constructor
// new keyword
console.log(Date);

var d = new Date();

// milliseconds from 1 Jan 1970
console.log(Date.now()); // 1755584165460
console.log(Date.now() / 1000 / 60 / 60 / 24 / 365);
console.log(2025 - 1970);

console.log(d);

// setter
// h  m?  s?  ms?
d.setHours(24); // 0 -> 23
d.setHours(2, 10, 20, 1000); // 0 -> 23
console.log(d);
// getter methods

// m s? ms?
d.setMinutes(30, 60);
console.log(d);

// s ms?
d.setSeconds(20, 1000);
console.log(d);

d.setMonth(0); // 0 -> 11
console.log(d);

d.setFullYear(2001);
console.log(d);

console.log(d.getDate());

// sunday 0
// monday 1
// tuesday 2
// wednesday 3
// thursday 4
// friday 5
// saturday 6
console.log(d.getDay());

console.log(new Date().getDay());

console.log(d.getMonth());
console.log(d.getFullYear());
d.setMilliseconds(10);
console.log(d.getMilliseconds());

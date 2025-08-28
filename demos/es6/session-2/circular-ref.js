const a = {};
const b = {};

a.circularRef = b;
b.circularRef = a;

// a -> circularRef -> b -> circularRef -> a

console.log(a);

// console.log(JSON.stringify(a));

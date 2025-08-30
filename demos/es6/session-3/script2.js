import { sub, summation, x } from "./math-lib.js";
import sayHello from "./math-lib.js";

function sum(a, b) {
	console.log("inner sum");
	return a + b;
}

console.log(x);

// function multiply(a, b) {
// 	return a * b;
// }

// console.log(x);
console.log(sub(10, 5));
console.log(summation(10, 5));
console.log(sum(10, 5));

sayHello("test");

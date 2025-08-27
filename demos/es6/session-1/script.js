// "use strict";
/* 
variable => let (can be reassigned)
constant => const (only one value at declaration)

block scoped {  }
can't redeclare
TDZ
*/

var a = 10;
var a;
console.log(a);

// let b = 10;
// let b;
// console.log(b);

// const PI = 3.14;
// // PI = 22 / 7;
// console.log(PI);

// console.log("before", c);
// TDZ
// console.log(d);
// const c = 10;
// console.log("after", c);

/* 
hoisting

variables and constants to the top of their scope

var hoisting global scope or function scope

let or const => block scoped 
 */

function sayHi(name) {
	var result = "hello, " + name;
	let x = 10;
	return result;
}

if (true) {
	let y = 10;
}

let flag = true;
while (flag) {
	let z = 100;
	flag = !flag;
}

// console.log(x);
// console.log(y);
// console.log(z);

{
	let abc = 11;
	var e = 11;
	// console.log(abc);
}
// console.log(e);

// console.log(abc);

// console.log(result);

// ======================================

/* 
for
for in (objects)
for of (arrays)
while
do while
 */

const myObj = {
	name: "John",
	age: 30,
	city: "New York",
};

// dot notation and bracket notation
for (const k in myObj) {
	console.log(k, myObj[k]);
}

// how can we use const with for loops
const arr = [1, 2, 5, 6];
for (const value of arr) {
	console.log(value);
}

// ======================================

function greet(name = "world") {
	console.log("hello " + name);
}

greet("mohamed");
greet();

function greetOld(name) {
	// OR => returns first truthy value
	name = name || "Worlddd";
	console.log("hello " + name);
}

greetOld("");
greetOld(0);
greetOld("Mohamed");

// ======================================

let name = "mohamed";
let hi = "hi, " + name;
console.log(hi);

let sum = 10 + 20;
let multiLineStr = `
hi, ${name}
${sum}
${25 / 5}
`;

console.log(multiLineStr);

// const cardContainer = document.querySelector(".card-container")
// cardContainer.innerHTML += `
// <div class="card">
//   ${productName}

// </div>
// `

// =======================================

const names = ["ali", "ahmed", "mohamed", "khalid", "omar"];
let n1 = names[1];
console.log(n1);
n1 = "mahmoud";

const [, , y] = names;
// console.log(x);
console.log(y);

const objData = {
	id: 101,
	price: 15000,
	productName: "iphone",
	getPrice: function () {
		return this.price;
	},
};
let { id, productName: pn } = objData;

console.log(id, pn);

let [name1, name2, ...rest] = names;
console.log(name1, name2, rest);

function sum2(a, ...rest) {
	let result = rest.reduce((acc, cur, i) => {
		// console.log(i);
		return acc + cur;
	}, a);

	return result;
}

// 1
// [2, 3, 4, 5, 6]
console.log(sum2(1, 2, 3, 4, 5, 6));

// reduce(callbackFn(), initialVal)

// function vs method (inside object)
// "use strict"; // at the top of the js file

// function getThis() {
// 	console.log(this);
// }
// getThis();

const input = document.querySelector("input");
var value = 999;
input.addEventListener("input", () => {
	console.log(this.value);
});

/* 

one line
() => returned value // without return keyword

() => {

  // have to use return keyword
}
*/

// let add = (a, b) => a + b;
// console.log(add(1, 2));

var age = 10;
console.log(window);
const obj = {
	age: 20,
	getThis: function () {
		// this -> obj
		// 20 from obj
		let inner = () => console.log(this.age);
		inner();
	},
	getThisArrow: () => {
		// this -> window
		// 10 from window object
		let inner = () => console.log(this.age);
		inner();
	},
};

obj.getThis();
obj.getThisArrow();

const UserData = {
	username: "TechPro123",
	logUsernameAfterDelay: function () {
		console.log("Fetching user...");
		// console.log(this);

		setTimeout(() => {
			// console.log(this);
			console.log(`The username is: ${this.username}`);
		}, 1000);
	},
};

UserData.logUsernameAfterDelay();



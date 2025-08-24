// creates new object
// bind this to the new object
// returns the new object from the constructor function

function Doctor(name, age) {
	var doctor = {};
	doctor.name = name;
	doctor.age = age;
	return doctor;
}

function Employee(name, age) {
	this.name = name;
	this.age = age;
}

var emp = new Employee("name", 22);
// console.log(emp);

console.log(this);

var testObj = {
	role: "admin",
	getThis() {
		console.log(this);
		console.log(this.role);
	},
};

console.log(testObj);

// this
var btn = document.querySelector("button");
btn.addEventListener("click", function () {
	console.log(this);
});

function test() {
	"use strict";
	// var x = 10
	// x = 10;
	// console.log(x);
	console.log(this);
}

// console.log(x);
test();

x = 10;
console.log(x);

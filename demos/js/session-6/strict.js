// "use strict";

// backward compatibility

// let yeild
// var let = 2;
// var yeild = 20;
// console.log(let, yeild);

// noDeclaration = 20;
// console.log(noDeclaration);
// console.log(window);

var myObj = {
	age: 20,
	city: "cairo",
};
// delete => remove property inside object
console.log(myObj);
console.log(delete myObj.age);
console.log(myObj);

var arr = [1, 2, 3];
console.log(delete arr[1]);
console.log(arr);

// var x = 20;
// console.log(delete x);
// console.log(x);

// function sum(a, a) {
//   // a = 10
//   // a = 20
// 	return a + a;
// }

// console.log(sum(10, 20));

// binary decimal octal hexadecimal
// var octalNum = 073
// console.log(octalNum);

// class Doctor extends Employee{

class Doctor {
	constructor(name) {
		// super()
		this.name = name;
	}

	sayHi() {
		// x = 2;
		// console.log(x);
		console.log(this.name);
	}
}

var doc1 = new Doctor("test");
doc1.sayHi();
console.log(doc1);

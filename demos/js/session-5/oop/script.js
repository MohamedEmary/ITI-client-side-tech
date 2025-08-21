// new
// function Doctor(name, age, salary) {
// 	var doctor = {};
// 	doctor.name = name;
// 	doctor.age = age;
// 	doctor.salary = salary;
// 	return doctor;
// }

// var drAhmed = Doctor("Ahmed", 33, 10000);
// console.log(drAhmed);

// var aa = 10;
// console.log(window.aa);
// console.log(this);

var obj = {
	fName: "Mohamed",
	age: 20,
	sayHi: function () {
		console.log(obj.fName + " " + obj.age);
	},
};

var obj = {
	fName: "Mohamed",
	age: 20,
	sayHi: function () {
		console.log(this.fName + " " + this.age);
	},
};

// console.log(obj);

// function Doctor(name, age, salary) {
// 	this.name = name;
// 	this.age = age;
// 	this.salary = salary;
// }

// Doctor.prototype.sayHi = function () {
// 	console.log("hi i'm a doctor and my name is " + this.name);
// };

// // // logic => same logic

// var drAhmed = new Doctor("Ahmed", 33, 10000);
// var drMohamed = new Doctor("Mohamed", 35, 12000);

// console.log(drAhmed);
// console.log(drMohamed);

// drAhmed.sayHi();
// drMohamed.sayHi();

// creates new object
// this => that new object
// return object

// var myStrObj = new String("abc");
// console.log(myStrObj);

// sugar syntax => prototype
// Prototypal based OOP
class Employee {
	#name;
	constructor(name, age, salary) {
		this.#name = name;
		this.age = age;
		this.salary = salary;
	}

	#sayHi() {
		console.log("hi i'm an Employee and my name is " + this.#name);
	}

	getSalary() {
		console.log("Emp sal = " + this.salary);
	}

	// getFullName() {
	// 	return this.fname + " " + this.lname;
	// }
}

class Doctor extends Employee {
	constructor(name, age, salary, s) {
		super(name, age, salary);
		this.s = s;
	}

	// sayHi() {
	// 	console.log("hi i'm a Doctor and my name is " + this.name);
	// }

	getSalary() {
		console.log("doctor sal = " + this.salary);
	}
}

var doc1 = new Doctor("Ahmed", 44, 10000, "dentist");

// doc1.sayHi();
console.log(doc1);
console.log(doc1.age);
doc1.getSalary();

var emp1 = new Employee("Mohamed", 44, 10000);
console.log(emp1);
console.log(emp1.name);
// emp1.sayHi();
// emp1.getSalary();
// emp1.sayHi();

// polymorphism => overriding (same function name, same parameters)
// overloading => same function with different params

// game health 100
// mario.health = 999
// mario.updateHealth(1000) // 100

// public inherit outside
// private only within the same class
// protected (not in js) accissible within the same class and the classes that inherit from it

// inheritance
// polymorphism (overloading, overriding (supported by js))
// abstraction
// encapsulation (access modifiers) #

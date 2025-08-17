// function funcName(param1, param2){ //logic }

// sum
function sum(n1, n2) {
	var result = n1 + n2;
	return result;
}
console.log(sum(3, 4));

// sub
// default value

// parameters
function sub(n1 = 0, n2 = 0) {
	var result = n1 - n2;
	return result;
}
console.log(sub(10)); // arguments
console.log(sub(10, 3)); // arguments

// greet user

// inside a variable => function exp

var sumVar = function (n1, n2) {
	var result = n1 + n2;
	return result;
};
console.log(sumVar(10, 9));

// =================================

// JS functional programming paradigm
// first-class citizen
// assign function to a variable
// return function from a function
// pass function as a parameter to another function

function greetName(usrName) {
	return function () {
		console.log("hello " + usrName);
	};
}

var helloAhmed = greetName("Ahmed");
console.log(typeof helloAhmed);
helloAhmed();

// ==================================

function doMathOperation(sum, sub, n1, n2) {
	console.log(n1 + " + " + n2 + " = " + sum(n1, n2));
	console.log(n1 + " - " + n2 + " = " + sub(n1, n2));
}

doMathOperation(sum, sub, 4, 6);

// not pure function
// pure functions returns same input for same output
function sumWithRandom(num) {
	return num + Math.random();
}

console.log(sumWithRandom(1));

var i = 0;
function incrementNum() {
	i++;
	return i;
}
incrementNum();
incrementNum();

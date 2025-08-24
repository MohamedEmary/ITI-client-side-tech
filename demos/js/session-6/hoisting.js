console.log(x);

var x = 5;

console.log(x);

sayHi("before");

function sayHi(word) {
	console.log(abc);
	var abc = "abc";
	console.log(abc);

	console.log("hello world", word);
}

// assign function to variable
console.log(sayHiVar);

var sayHiVar = function (word) {
	console.log(abc);
	var abc = "abc";
	console.log(abc);

	console.log("hello world", word);
};

sayHiVar("after");

// global scope => window
// function scope

// console.log(foo());
// var foo = function () {
// 	return bar();
// 	function bar() {
// 		return 3;
// 	}
// 	var bar = function () {
// 		return 8;
// 	};
// };

// ==================================

// IIFE Immediately Invoked Function Expression
(function (a, b) {
	var sum = a + b;
	console.log(sum);
})(1, 20);

console.log(sum);
console.log(window);

// ==================================

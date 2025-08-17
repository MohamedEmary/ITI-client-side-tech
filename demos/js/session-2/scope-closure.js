// hoisting

// console.log(myVar);

var myVar = 10;

if (true) {
	var n1 = 20;
}

function sum(num1, num2) {
	// can't be accessed outside the function
	var result = num1 + num2;
	return result;
}

console.log(myVar, n1);
// console.log(result);

function outer() {
	var a = "abc";

	function inner() {
		var b = "xyz";
		console.log("inner", a, b);
	}

	inner();
	console.log("outer", a, b);
}

outer();

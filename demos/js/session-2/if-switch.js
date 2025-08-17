// if
// true false
// > < <= >= == === && || !
// falsy values and truthy values
// 0 "" undefind null NaN
// any other value truthy (evaluates to true)
// falsy values (evaluate to false)
var number = 7;

if (number % 2 === 0) {
	// run this code
	console.log("even");
} else {
	// code
	console.log("odd");
}

console.log("always run");

// if else
// if else if

var color = "orange";
var wordFirstLetter = "S";

if (color === "blue") {
	console.log(color);
} else if (color === "orange") {
	console.log(color);
	if (wordFirstLetter === "S") {
		console.log("sun");
	} else if (wordFirstLetter === "O") {
		console.log("orange");
	}
} else {
	console.log("not a color");
}
// =======================

var age = 18;
var hasId = true;

if (age >= 18 && hasId) {
	console.log("you are allowed to enter");
} else {
	console.log("not allowed");
}

// =========================
console.log("=====================");

wordFirstLetter = "t";
color = "red";
// color values
switch (color) {
	// red
	case "red":
		// do something
		console.log("red");
		switch (wordFirstLetter) {
			case "b":
				console.log("blood");
				break;
			case "t":
				console.log("tomato");
				break;
			default:
				console.log("unkown word");
		}
		break;
	case "green":
		// do something else
		console.log("green");
		break;
	case "yellow":
		// do something else
		console.log("yellow");
		break;
	default:
		console.log("not a valid color");
}

// (condition) ? execute if true : execute if false

5 > 2 ? console.log("greater") : console.log("less");

var result = 5 > 8 ? "yes" : "no";
console.log("result = " + result);

var num1 = 13;
result =
	num1 > 10 ? (num1 < 15 ? "gt 10 and lt 15" : "gt 10") : "less than ten";
console.log(result);

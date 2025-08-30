let x = 99;

function sum(a, b) {
	return a + b;
}

function sub(a, b) {
	return a - b;
}

function sayHi(str) {
	console.log(str);
}

// console.log(multiply(3, 3));

// import and export
export { sum as summation, sub, x };

export default sayHi;

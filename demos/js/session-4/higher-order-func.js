// var ul = document.querySelector("ul");
// var names = ["mohamed", "ahmed", "omar"];
// // htmlCollection -> Array.from

// names.forEach(function (name) {
//   var newLi = document.createElement("li");
// 	console.log(name);
// 	newLi.textContent = "name = " + name;
// 	ul.appendChild(newLi);
// });

// ============================

var numbers = [99, 2, 4, 4, 5, 7, 8];
// // [2,4,6,8,10,12]
// var double = numbers.map(function (num, index) {
// 	// console.log("index = ", index);
// 	var x2 = num * 2;
// 	return x2;
// });

// console.log(double);
// // map returns a **new** array with the new values
// console.log(numbers);

// ============================

// var odd = numbers.find(function (number) {
// 	return number % 2 !== 0;
// });

// console.log(odd);

// // ============================

// var evens = numbers.filter(function (number) {
// 	return number % 2 === 0;
// });

// console.log(evens);

// ============================

// console.log(numbers);
// var iteration = 1;
// var sum = numbers.reduce(
// 	function (acc, cur, index) {
// 		console.log("index = ", index);
// 		console.log("acc = ", acc);
// 		console.log("cur = ", cur);
// 		console.log("iteration ", iteration);
// 		iteration++;
// 		console.log("=========================");
// 		return acc * cur;
// 	},
// 	20
// );
// console.log(sum);

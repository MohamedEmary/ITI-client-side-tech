//            [0, 1, 2 , 3, 4]
var numbers = [2, 4, 65, 3, 1];
// numbers[index]
// numbers[2]
console.log(numbers);
// console.log(numbers[2]);

// loops
// for loop
// for(iterationVariable; condition; step){
//    some code
// }
// i++;
// i--;
// ++i
// --i
// i+=2
// i-=2
// i+=3

// i++
// ++i

// .length
// console.log("array length = ", numbers.length);
// for (var i = 0; i < numbers.length; i++) {
// 	console.log(numbers[i]);
// }

// while
// do while

var j = 10;
// console.log(++j);
// console.log(j++);
// console.log(j);

var i = 0;
for (;;) {
	// i < numbers.length

	// break

	// continue

	console.log(numbers[i]);

	if (i === numbers.length - 1) break;

	// infinite loop
	i++;
}

console.log("=================");

for (var i = 0; i < numbers.length; i++) {
	// if (i === 2) continue;
	// if (i === 2) break;
	console.log(numbers[i]);
}

console.log("=================");

for (var i = 0; i < numbers.length; i++) {
	numbers[i] *= 2;
}
console.log(numbers);

console.log("=================");

var k = 99;
do {
	// code that runs at least once
	console.log("hello world", k);
	k++;
} while (k < 5);

console.log("=================");

// while loops => unknown number of iterations
// for loops => known number of iterations

var names = ["mohamed", "ahmed", "ali", "sara", "salma"];
var i2 = 0;
while (true) {
	// logic
	if (i2 === names.length) break;
	console.log(names[i2]);
	i2++;
}

// for in
// for of in ES6

var myobj = {
	key: "value", // property
	username: "mohamed",
	age: 24,
	city: "benha",
	"fav-color": "red",
	[4 - 2]: "some js expr",
	myName: "this should have `myName` as a key",
	sum: function (a = 0, b = 0) {
		return a + b;
	},
	arr: [1, 2, 3],
};

// array => for loop
// for in
// loop over object keys
for (var k in myobj) {
	console.log(k + " = ", myobj[k]);
}

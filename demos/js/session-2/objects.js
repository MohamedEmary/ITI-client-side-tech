// variables
// arrays
// objects

var myName = "Mohamed";
var nums = [1, 2, 3, 4, 5];

// k:v
// k => string
// v => of any type
const myobj = {
	key: "value", // property
	username: "mohamed",
	age: 24,
	city: "benha",
	"fav-color": "red",
	[4 - 2]: "some js expr",
	[myName]: "this should have my name as a key",
	myName: "this should have `myName` as a key",
	[nums]: "this should have some numbers",
	numbers: nums,
	sum: function (a = 0, b = 0) {
		return a + b;
	},
};
console.log(myobj);
console.log(myobj.city); // dot notation
console.log(myobj["city"]); // bracket notation

// variable names can't contain -
// console.log(myobj.fav-color);
// console.log(undefined - ReferenceError);
console.log(myobj["fav-color"]);
// console.log(myobj["username"]);
// console.log(myobj["age"]);

console.log(myobj);
myobj.age = 33;
myobj["city"] = "cairo";
console.log(myobj);

console.log(typeof myobj.sum);
console.log(typeof myobj.numbers);
console.log(myobj.sum(11, 4));

// everything in js is an object

// var CONSTANT_WITH_UPPERCASE_LETTERS;

// Math object

// var number = prompt("please enter a number");
// console.log(typeof number);
// console.log(parseInt(number)); // "123abc"
// console.log(Number(number));  //

// rounding Math.round, Math.ceil, Math.floor => integer
// toFixed
var num = 2.34567;
console.log(Number(num.toFixed(3)));
console.log(parseInt(num.toFixed(3)));
console.log(parseFloat(num.toFixed(3)));

console.log(num.toString());



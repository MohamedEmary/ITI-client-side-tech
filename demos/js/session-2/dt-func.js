// string
// number
// boolean
// object
// null => object

var myName = "mohamed";

console.log(myName.length);
console.log(myName[3]);
// ascii table
console.log(myName.charCodeAt(0));
// 7 => 0 => 127 = 128 character
console.log(String.fromCharCode(97));
var englishLetters = [];
console.log(myName.toLowerCase());
console.log(myName.toUpperCase());
console.log(myName[3].toUpperCase());
console.log("i".toLocaleUpperCase("TR"));
console.log("i".toUpperCase());

// a => z

// for (var i = 97; i <= "z".charCodeAt(0); i++) {
// 	englishLetters.push(String.fromCharCode(i));
// }
// console.log(englishLetters);

console.log(myName.indexOf("m"));
console.log(myName.indexOf("z"));
console.log(myName.indexOf("m", 2));
console.log(myName.indexOf("med", 2));
console.log(myName.indexOf("meo", 2));
console.log(myName.includes("oha"));
console.log(myName.includes("oha", 2));
console.log(myName.replace("oha", "99"));
console.log(myName);
console.log(myName.endsWith("d"));
console.log(myName.endsWith("ed"));
console.log(myName.endsWith("a"));
console.log(myName.substring(2));
console.log(myName.substring(2, 5)); // start -> end (end is not included)
console.log(myName);

// object methods

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

console.log(Object.keys(myobj));
console.log(Object.values(myobj));
// [["key", "value"],["username", "mohamed"],...]
console.log(Object.entries(myobj));
// apply call bind => IMPORTANT interview questions
// will be explained later with `this`

// array => for loop
// for in
// loop over object keys
for (var k in myobj) {
	console.log(k + " = ", myobj[k]);
}

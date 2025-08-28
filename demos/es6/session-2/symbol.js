// symbol string
// new
const symbol1 = Symbol("desc");
const symbol2 = Symbol("id");
console.log(symbol1);
console.log(symbol1 === symbol2);

// alert([1, 2, 3]);
// alert(symbol1.toString()); // doesn't allow auto-conversion to string
console.log(symbol1.description);

const userInfo = {
	name: "John",
	age: 30,
	[symbol1]: "some hidden data",
	// id: 20,
	// id: 30,
};

for (const key in userInfo) {
	console.log(key, userInfo[key]);
}

console.log(Object.keys(userInfo));

console.log(userInfo[symbol1]);

userInfo[symbol2] = "other hidden data";
console.log(userInfo[symbol2]);

console.log(userInfo);

const symbol3 = Symbol.for("key1");
const symbol4 = Symbol.for("key1");
const symbol5 = Symbol.for("key1");
console.log(symbol3 === symbol4);

console.log(symbol3);
console.log(symbol3.description);

console.log(Symbol.keyFor(symbol1));
console.log(Symbol.keyFor(symbol5));

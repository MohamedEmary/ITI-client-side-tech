// Map => k v
// object => k v

// integers (asc), strings, Symbols
// allowed keys are only of string or symbol type
const add = (a, b) => a + b;
const obj = {
	age: 22,
	3: "three",
	1: "one",
	[[1, 2, 3]]: "array",
	[add]: "function",
};

console.log(Object.keys(obj));

for (const k of Object.keys(obj)) {
	console.log(typeof k);
}

console.log(obj);

for (const k of Object.keys(obj)) {
	console.log(obj[k]);
}

console.log(Object.keys(obj).length);

// ===================================

// preserves insertion order
// keys of any type
const map = new Map([
	["age", 22],
	["3", "three"],
	[1, "one"],
	[[1, 2, 3], "array"],
	[add, "function"],
]);

console.log(map);

for (const [k, v] of map) {
	console.log(k, v);
}

console.log(map.size);


/* 

| Feature   | Object                           | Map                        |
| --------- | -------------------------------- | -------------------------- |
| Key Types | Strings / Symbols only           | Any type (objects, funcs…) |
| Key Order | ints, then strings, then Symbols | Insertion order preserved  |
| Iteration | Manual via `Object.keys()`       | Directly iterable          |
| Size      | `Object.keys(obj).length`        | `map.size`                 |

*/


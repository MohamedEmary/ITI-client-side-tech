const numbers = [1, 2, 3];

const arr = [
	1,
	2,
	3,
	1,
	2,
	"mohamed",
	"ahmed",
	"mohamed",
	numbers, // 0x123
	numbers, // 0x123
	{ age: 21 },
	{ age: 21 },
];

const set1 = new Set(arr);
console.log(set1);

/* 
objects 

variable 
*/

// set1.add("abc");
// set1.delete({ age: 21 });
// set1.delete(numbers);

// set1.forEach((val) => console.log(val));
console.log(set1.has("mohamed"));
console.log(set1.has(99));
console.log(set1.size);
// const setEntries = set1.entries();
// for (const entry of setEntries) {
// 	console.log(entry);
// }
// set1.clear();
console.log(set1);

const map1 = new Map([
	["k1", "v1"],
	["k2", "v2"],
]);
map1.set("k3", "v3");
console.log(map1.get("k2"));
map1.delete("k1");
// map1.clear()
console.log(map1.has("k2"));
console.log(map1.has("k10"));
console.log(map1);

// for in => used with objec
map1.set("name", "mohamed");
map1.set("age", "22");

for (const [k, v] of map1) {
	console.log(k, v);
}

// 5. Nested array destructuring
let [p, [q, r]] = [1, [2, 3]];
console.log(p, q, r);
// p = 1, q = 2, r = 3

// 6. Simple object destructuring
let { name, age } = { name: "Ali", age: 25 };
console.log(name, age);
// name = "Ali", age = 25

// 7. Renaming variables and default values
let { x: foo = 100, y: bar = 200 } = { x: 5 };
console.log(foo, bar);
// foo = 5, bar = 200

// 8. Nested object destructuring
let person = {
	id: 1,
	info: {
		first: "Sara",
		last: "Khaled",
	},
};
let {
	info: { first, last },
} = person;
// first = "Sara", last = "Khaled"
console.log(first, last);

let user = {
	id: 42,
	profile: {
		name: "Omar",
		contacts: [
			{ type: "email", value: "omar@mail.com" },
			{ type: "phone", value: "123456" },
		],
	},
};
// name = "Omar",
// email = "omar@mail.com",
// phone = "123456"

let {
	profile: {
		name: n1,
		contacts: [{ value: v1 }, { value: v2 }],
	},
} = user;

console.log(n1, v1, v2);

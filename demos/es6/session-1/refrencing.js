// primitive value => variable holds the value
let msg = "abc";
let phrase = msg;

msg = "efg";
phrase = "xyz";

console.log(msg, phrase);

const usr = {
	role: "admin",
	id: 20,
};

const admin = usr;
admin.id = 30;
usr.role = "user";

// usr = "test";

console.log(usr, admin);

let obj1 = {
	role: "admin",
	id: 20,
};

let obj2 = {
	role: "admin",
	id: 20,
};

console.log(obj1 === obj2);

obj2 = obj1;
console.log(obj1 === obj2);

// const PI = 3.14;
// PI = 22 / 7;
// console.log(PI);

let user = { name: "John", age: 30 };
let copiedUsr = Object.assign({}, user);
copiedUsr.age = 22;
console.log(copiedUsr, user);

const place = { city: "New York", country: "USA" };
const healthInfo = {
	bloodType: "O+",
	allergies: ["Peanuts", "Shellfish"],
	obj: {
		k1: "v1",
	},
};

// copiedUsr = { name: "John", age: 22,  city: "New York", country: "USA" , .....};

copiedUsr = Object.assign(copiedUsr, place, healthInfo);
console.log(copiedUsr);

let clone = { ...healthInfo };
// clone.bloodType = "A+";
clone.allergies[0] = "test";
clone.obj.k1 = "vvvv";
console.log(clone, healthInfo);

console.log(copiedUsr.allergies === healthInfo.allergies);

const healthClone = JSON.parse(JSON.stringify(healthInfo));
healthClone.allergies[0] = "123";

console.log(healthClone);
console.log(healthInfo);

const object1 = {
	a: 1,
	b: {
		c: 2,
	},
	// func: function () {
	// 	console.log("Hello");
	// },
};

// const object1clone = JSON.parse(JSON.stringify(object1));
const object1clone = structuredClone(object1);
object1clone.b.c = 99;
console.log(object1);
console.log(object1clone);

console.log("this = ", this);

var obj = {
	fname: "Mohamed",
	lname: "Emary",
	getFullName: function () {
		return this.fname + " " + this.lname;
	},
};

console.log(obj.getFullName());

// new
// creates new object
// assign this to the newly created object
// returns the object
function Doctor(name, salary) {
	this.name = name;
	this.salary = salary;
}

var doc1 = new Doctor("Ahmed", 33);
console.log(doc1);

document.querySelector("button").addEventListener("click", function () {
	console.log(this);
});

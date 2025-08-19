var sum = 0;

var start = Date.now();
for (var i = 0; i < 1000; i++) {
	for (var j = 0; j < 10000; j++) {
		sum += j;
	}
}
var end = Date.now();

console.log(end - start);

// ==================================

document.querySelector("form").addEventListener("submit", (e) => {
	e.preventDefault();
	var bYear = e.target.querySelector("input").value;
	console.log(bYear);
	var today = new Date();
	var bDate = new Date(bYear);

	console.log("you are = ", (today - bDate) / 1000 / 60 / 60 / 24 / 365);
});

// ==================================
const event = new Date(Date.UTC(2025, 7, 20, 3, 0, 0));

// British English uses day-month-year order and 24-hour time without AM/PM
console.log(
	event.toLocaleString("en-US", {
		timeZone: "UTC",
		weekday: "short",
		month: "long",
		day: "numeric",
		year: "numeric",
	})
);

console.log(
	event.toLocaleString("en-GB", {
		timeZone: "UTC",
	})
);

console.log(new Date("01-1"));

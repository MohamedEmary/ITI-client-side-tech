/* console.log("before");

// string containing json data
// "[{"title": "iphone"},{"title": "ipad"}]"
try {
	var x = JSON.parse("hello world");
} catch (e) {
	// console.log(e);
	// console.error(e);
	// name
	// msg
	// console.log(e.name);
	// console.log(e.message);
	// throw new Error("my custom error");
	// console.warn(e);
	// console.table({
	// 	name: "mohamed",
	// 	age: 22,
	// 	city: "cairo",
	// });
}

console.log("after");

// try catch finally
 */

// ===========================

// constuctor function
var xhr = new XMLHttpRequest();
console.log(xhr); // readyState 0

// Method URL
xhr.open("POST", "https://fakestoreapi.com/products");

xhr.setRequestHeader("Content-Type", "application/json");

var productData = JSON.stringify({
	id: 0,
	title: "IPhone X",
	price: 999.99,
	description: "Iphone device",
	category: "Mobile Phones",
	image: "https://i.pravatar.cc",
});

xhr.send(productData);

// readyState 0 -> 4
// xhr.addEventListener("readystatechange")

// onreadyStateChange  => change in readyState
// onload => when readyState = 4
xhr.onload = function () {
	// successfull req 200 -> 299
	// console.log(xhr.readyState);
	if (xhr.status >= 200 && xhr.status < 300) {
		// console.log(xhr);
		// responseType => empty => string
		try {
			var response = JSON.parse(xhr.responseText);
			console.log(response);
			JSON.parse("abc");
		} catch (error) {
			console.log("error occurred");
			console.log(error.name);
			console.log(error.message);
		} finally {
			console.log("always run");
		}

		console.log("after");
		// console.log("res recieved");
	}
};

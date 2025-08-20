var obj = { age: 22, location: "cairo", job: "doctor" };

console.log(obj);
console.log(JSON.stringify(obj));

var obj2 = {
	age: 24,
	location: "benha",
	job: "doctor",
};

var objArr = [obj, obj2];
console.log(objArr);
console.log(obj);

// object []

// XMLHttpRequest
// object

var xhr = new XMLHttpRequest();
// console.log(xhr);

// 0 request not initialized
console.log(xhr.readyState);

// 1 server connection established
xhr.open("GET", "https://fakestoreapi.com/products");
console.log(xhr.readyState);

xhr.send();
// console.log(xhr.readyState); async sync

xhr.addEventListener("readystatechange", function () {
	if (xhr.readyState === 4 && xhr.status === 200) {
		var products = JSON.parse(xhr.response);
		console.log(xhr.response);
		console.log(products);
		display(products);
		// console.log(resJson[1].image);
		// console.log(); // 200-299
	}
});

// readyState
// 2
// 3
// 4

function display(products) {
	console.log("products = ", products);
	// var ul = document.querySelector("ul");
	// products.forEach(function (productItem) {
	// 	// console.log(productItem.title);
	// 	var li = document.createElement("li");
	// 	li.textContent = productItem.title;
	// 	ul.appendChild(li);
	// });

	/* 
<div class="card">
  <img
    src="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png"
    alt="Solid Gold Petite Micropave" />
  <h3>This is a title</h3>
  <p>
    Your perfect pack for everyday use and walks in the forest. Stash your
    laptop (up to 15 inches) in the padded sleeve, your everyday
  </p>
</div>
*/

	// multi line
	// variables inside string

	// ''
	// ""
	// `` ES6 multi-line
	// 	var number = 99;
	// 	var multiLineStr = `
	// line1 ${number}
	// line2
	// line3`;
	// 	console.log(multiLineStr);

	var container = document.querySelector(".container");
	var random = Math.floor(Math.random() * 20); // 0 => 19
	products.splice(random);
	console.log(random);

	products.forEach(function (product) {
		// console.log(products.length);
		var card = `
		<div class="card">
		  <img
		    src="${product.image}"
		    alt="${product.title}" />
		  <h3>${product.title}</h3>
		  <p>${product.price}</p>
		  <p>${product.description}</p>
		</div>
		`;

		// document.createElement("li")
		// node
		container.innerHTML += card;
	});
}

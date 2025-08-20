// var myDiv = document.getElementsByClassName("div-text")[0];
var myBtn = document.getElementById("btn");
// console.log(myDiv);
// console.log(myDiv[0]);

// console.log(myBtn);

// element.onclick
// element.onmouseenter
// element.onmouseleave
// element.onmouseover
// element.addEventListener("event-name", function(){
//    logic when event happens
// })

// myBtn.onclick = function (e) {
// 	console.log(e);
// 	console.log(e.target);
// 	console.log("button got clicked");
// };

// myBtn.onclick = test;

// function test(e) {
// 	console.log(e);
// 	console.log(e.target);
// 	console.log(e["target"]);
// 	console.log("button got clicked");
// }

// myBtn.addEventListener("mouseover", function (e) {
// 	console.log(e);
// 	console.log(e.target);
// 	console.log(e["target"]);
// 	console.log("button got clicked");
// });

// myBtn.onclick = function () {
// 	console.log("click 1");
// };

// myBtn.onclick = function () {
// 	console.log("click 2");
// };

myBtn.addEventListener("mousedown", function (e) {
	console.log(e);
	console.log(e.type);
});

// document.addEventListener("keydown", function (e) {
// 	console.log(e);
// 	// TODO: what is the new alternative
// 	console.log(e.keyCode);
// });

// myBtn.addEventListener("click", function () {
// 	console.log("click 2");
// });

// type target clientX clientY keyCode

// const obj = {
// 	age: 20,
// };

// obj.age = 21;
// obj.age = 22;
// console.log(obj);

document.forms[0].addEventListener("submit", function (e) {
	e.preventDefault();
	console.log("form submitted");
});

var textInput = document.forms[0].querySelector("input");

textInput.addEventListener("input", function (e) {
	console.log(e.target.value);
});

textInput.addEventListener("focus", function (e) {
	console.log("input focused");
});

textInput.addEventListener("blur", function (e) {
	console.log("input blured");
});

// textInput.style.backgroundColor = "green";
// textInput.style.marginBottom = "100px";
// textInput.style.cssText = "background-color: red; margin-bottom: 200px";

// classes add and remove classes
// bg-red -> background-color: red

// textInput.setAttribute("class", "bg-red");
// console.log(textInput.getAttribute("class"));
// console.log(textInput.getAttribute("type"));
// textInput.setAttribute("type", "email");
// textInput.removeAttribute("name");

// textInput.setAttribute("class", "bg-red");
// textInput.setAttribute("class", "bg-green");
textInput.className = "bg-red";
console.log(textInput.classList);
textInput.classList.add("bg-green");
console.log(textInput.classList);
textInput.classList.remove("bg-green");
console.log(textInput.classList);
textInput.classList.toggle("on-off");
console.log(textInput.classList);
console.log(textInput.classList.contains("on-off"));
console.log(textInput.classList, "before replace");
console.log(textInput.classList.replace("on-off", "always-on"));
console.log(textInput.classList, "after replace");
textInput.classList.toggle("on-off");
console.log(textInput.classList);
console.log(textInput.classList.contains("on-off"));

var myParagraph = document.querySelector(".par");
console.log(myParagraph);
console.log(myParagraph.textContent);
myParagraph.textContent += "new value";
console.log(myParagraph.textContent);

// myParagraph.textContent += "new value <a href='#'>Google</a>";

myParagraph.innerHTML = "new value <a href='#'>Google</a>";

// =======================================

// var newLi = document.createElement("li");
// newLi.textContent = "item 4";

// document.querySelector("ul").appendChild(newLi);

var initialCount = 4;
var addLi = document.querySelector("#add-li");
var ul = document.querySelector("ul");
console.log(ul.parentElement);
console.log(ul.parentNode);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);

console.log(ul.firstChild);
console.log(ul.lastChild);
console.log(ul.childNodes);
console.log(ul.children);

console.log(ul.nextElementSibling);
console.log(ul.previousElementSibling);

console.log(document.querySelector(".my-items").childNodes);

console.log(ul.nextSibling);
console.log(ul.previousSibling);

// html
console.log(document.documentElement.parentNode);
console.log(document.documentElement.parentElement);

addLi.addEventListener("click", function () {
	var newLi = document.createElement("li");
	newLi.textContent = "item " + initialCount;
	initialCount++;
	ul.after(newLi);
});

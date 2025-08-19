// getElementById('id')
console.log(document.getElementById("btn"));

console.log(document.getElementsByClassName("par"));

console.log(document.getElementsByTagName("button"));
console.log(document.getElementsByTagName("div"));

console.log("email", document.getElementsByName("email"));

console.log("f-of-type", document.querySelectorAll(".par:first-of-type"));
console.log(document.querySelector("button"));

console.log(document.querySelectorAll(".par"));
console.log(document.querySelectorAll("button"));

console.log(document.querySelectorAll(".par"));
console.log(document.getElementsByClassName("par"));

// HTMLCollection vs NodeList

console.log(document.documentElement);
console.log(document.images);
console.log(document.forms);
console.log(document.title);
console.log(document.head);
console.log(document.body);
console.log(document.links);
console.log(document.scripts);
console.log(document.styleSheets);

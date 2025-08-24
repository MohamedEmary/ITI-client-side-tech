var names = ["mohamed"];

names.push("after");
names.unshift("before");

console.log(names);

console.log(names.pop());
console.log(names);
console.log(names.shift());
console.log(names);

// =============================================

var books = [];
var id = 0;

var bk1 = {
	name: "book 1",
	author: "author 1",
	pages: 222,
	read: true,
	id: id++,
};

var bk2 = {
	name: "book 2",
	author: "author 2",
	pages: 213,
	read: true,
	id: id++,
};

var bk3 = {
	name: "book 3",
	author: "author 3",
	pages: 657,
	read: false,
	id: id++,
};

var bk4 = {
	name: "book 4",
	author: "author 5",
	pages: 234,
	read: false,
	id: id++,
};

console.log("a", "b");
books.push(bk1, bk2, bk3, bk4);
console.log(books);
// localStorage.setItem("books", JSON.stringify(books));
var attrId = 2;
var index = books.findIndex(function (book) {
	return book.id === attrId;
});

console.log(books[index]);
books[index].read = !books[index].read;
console.log(books[index]);
// loop over books array items and display books again

// TODO: search for bind, call, apply
// Interview topic => related to `this`

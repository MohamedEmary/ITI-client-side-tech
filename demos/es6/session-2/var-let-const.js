const arr = [1, 2, 3, 4, 5];

// let const block scoped
// var => function scoped
for (var number of arr) {
	console.log(number);
}

console.log(window.number);
console.log("=================");

// block scoped =>
// let i;
// for (let i = 1; i <= 5; i++) {
// 	setTimeout(() => {
// 		console.log(i); // 1 2 3 4 5
// 	}, 800 * i);
// }
// console.log(window);

// for (var i = 1; i <= 5; i++) {
// 	setTimeout(() => {
// 		console.log(i); // 6 6 6 6 6
// 	}, 800 * i);
// }
// console.log(window);

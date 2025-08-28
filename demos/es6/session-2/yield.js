// yield and generator functions
// yield => generator function*
// generator functions returns => iterator

// function* myGenFunc() {
// 	console.log(99);
// 	yield 99;
// 	console.log(4);
// 	yield 4;
// 	console.log(5);
// 	yield 5;
// }

// const iterator = myGenFunc();
// console.log(iterator);
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// for (const v of iterator) {
// 	console.log(v);
// }

// function* genIds() {
// 	let id = 9;
// 	while (true) {
// 		yield id;
// 		id++;
// 	}
// }

// let iterator2 = genIds();
// console.log(iterator2.next().value);
// console.log(iterator2.next());
// console.log(iterator2.next());
// console.log(iterator2.next());
// console.log(iterator2.next());
// console.log(iterator2.next());
// console.log(iterator2.next());
// console.log(iterator2.next());
// console.log(iterator2.next());
// console.log(iterator2.next());
// console.log(iterator2.next());
// console.log(iterator2.next());
// console.log(iterator2.next());
// console.log(iterator2.next());
// console.log(iterator2.next());
// console.log(iterator2.return());

// function* proccessData(items) {
// 	for (let i = 0; i < items.length; i++) {
// 		console.log("proccessing", i);
// 		yield items[i];
// 	}
// }

// const iter = proccessData([1, 2, 3, 4, 5, 6]);
// console.log(iter.next());
// console.log("============");
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// fetch async await =>

function* genWithErrors() {
	let id = 0;
	while (true) {
		try {
			yield id++;
		} catch (e) {
			console.log(e.name);
			console.log(e.message);
		}
	}
}

// try catch

let iterator3 = genWithErrors();
console.log(iterator3.next());
console.log(iterator3.next());
console.log(iterator3.throw(new RangeError("Error custom message")));

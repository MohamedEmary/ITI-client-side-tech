// service workers API
// allows me to run js code in bg in a separate thread
const worker = new Worker("bg.js");
console.log(worker);

console.log(this);
console.log("main thread");

worker.postMessage("msg from main");
worker.onmessage = (e) => {
	console.log("main", e.data);
};

worker.postMessage([1, 2, 3, 4]);
worker.postMessage({ arr: [1, 2, 3, 4], name: "moahmed", age: 33 });

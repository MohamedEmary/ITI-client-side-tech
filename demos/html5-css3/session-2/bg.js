console.log("runs in bg");
console.log(this);

onmessage = (e) => console.log("bg", e.data);
postMessage("msg from bg");
postMessage({
	arr: [1, 2, 3, 4],
	name: "moahmed",
	age: 33,
});



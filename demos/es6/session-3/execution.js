Promise.resolve()
	.then(() => {
		console.log("Promise 1");
		return Promise.resolve();
	})
	.then(() => {
		console.log("Promise 2");
		setTimeout(() => console.log("Timeout 1"), 0);
	});

setTimeout(() => {
	console.log("Timeout 2");
	Promise.resolve().then(() => console.log("Promise 3"));
}, 0);

/* 
Start
End
Promise 1
Promise 2
Timeout 2
Promise 3
Timeout 1
*/

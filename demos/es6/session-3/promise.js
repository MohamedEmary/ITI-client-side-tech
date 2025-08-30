// let promise = new Promise(function (resolve, reject) {
// 	setTimeout(() => resolve("done1"), 1000);
// });

// console.log(promise);

// promise
// 	.then((result) => {
// 		console.log(result);
// 		console.log(promise);

// 		let promise2 = new Promise(function (resolve, reject) {
// 			setTimeout(() => resolve("done2"), 1000);
// 		});
// 		promise2.then((result) => {
// 			console.log(promise2);
// 			console.log(result);
// 		});
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 		console.log(promise);
// 	})
// 	.finally(() => console.log("finished"));

// /*
// --
// ---
// ----
// -----
// */

// ==========================================

function getUser(userId) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open("GET", `https://jsonplaceholder.typicode.com/users/${userId}`);
		xhr.send();

		xhr.onload = () => {
			if (xhr.status === 200) {
				console.log(JSON.parse(xhr.responseText));
				resolve(JSON.parse(xhr.responseText));
			} else {
				reject(new Error("something wrong happened when calling api"));
			}
		};
	});
}

function getPosts(userId) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open(
			"GET",
			`https://jsonplaceholder.typicode.com/posts?userId=${userId}`
		);
		xhr.send();

		xhr.onload = () => {
			if (xhr.status === 200) {
				console.log(JSON.parse(xhr.responseText));
				resolve(JSON.parse(xhr.responseText));
			} else {
				reject(new Error("something wrong happened when calling api"));
			}
		};
	});
}

function getComments(postId) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open(
			"GET",
			`https://jsonplaceholder.typicode.com/posts/${postId}/comments`
		);
		xhr.send();

		xhr.onload = () => {
			if (xhr.status === 200) {
				console.log(JSON.parse(xhr.responseText));
				resolve(JSON.parse(xhr.responseText));
			} else {
				reject(new Error("something wrong happened when calling api"));
			}
		};
	});
}


getUser(1)
	.then((userData) => getPosts(userData.id))
	.then((postData) => getComments(postData[0].id));

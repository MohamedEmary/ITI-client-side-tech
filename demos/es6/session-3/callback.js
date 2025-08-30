function getUser(userId, callback) {
	const xhr = new XMLHttpRequest();
	xhr.open("GET", `https://jsonplaceholder.typicode.com/users/${userId}`);
	xhr.send();

	xhr.onload = () => {
		callback(JSON.parse(xhr.responseText));
	};
}

function getPosts(userId, callback) {
	const xhr = new XMLHttpRequest();
	xhr.open(
		"GET",
		`https://jsonplaceholder.typicode.com/posts?userId=${userId}`
	);
	xhr.send();

	xhr.onload = () => {
		callback(JSON.parse(xhr.responseText));
	};
}

function getComments(postId, callback) {
	const xhr = new XMLHttpRequest();
	xhr.open(
		"GET",
		`https://jsonplaceholder.typicode.com/posts/${postId}/comments`
	);
	xhr.send();

	xhr.onload = () => {
		callback(JSON.parse(xhr.responseText));
	};
}

getUser(1, (user) => {
	console.log("user = ", user, "and userId = ", user.id);
	
  getPosts(user.id, (userPosts) => {
		console.log("user posts = ", userPosts);

		getComments(userPosts[0].id, (postComments) => {
			console.log("postComments = ", postComments);
		});
	});
});


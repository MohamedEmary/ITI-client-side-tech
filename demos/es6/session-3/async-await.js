// async function
// fetch => call apis => XMLHttpReq
async function getUsers(userId) {
	// await
	// xmlhttpreq
	const resObj = await fetch(
		`https://jsonplaceholder.typicode.com/users/${userId}`
	);
	const resJson = await resObj.json();
	return resJson;
}

async function getPosts(userId) {
	const resObj = await fetch(
		`https://jsonplaceholder.typicode.com/posts?userId=${userId}`
	);
	const resJson = await resObj.json();
	return resJson;
}

async function getComments(postId) {
	const resObj = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${postId}/comments`
	);
	const resJson = await resObj.json();
	return resJson;
}

getUsers(1)
	.then((user) => {
		console.log(user);
		return getPosts(user.id);
	})
	.then((postsArr) => {
		console.log(postsArr);
		return getComments(postsArr[0].id);
	})
	.then((data) => console.log(data));

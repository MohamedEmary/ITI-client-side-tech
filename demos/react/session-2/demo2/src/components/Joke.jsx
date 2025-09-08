// function Joke({ joke }) {
function Joke({ setup, punch = "no punchline" }) {
	// console.log(joke);
	// console.log(setup, punch);

	// {} one line js expression

	// let result ;
	// if (punch) {
	// 	result = punch
	// } else {
	// 	result = "no punchline"
	// }

	console.log("joke rendered");
	return (
		<div>
			{/* <p>Setup: {joke.setup}</p> */}
			{/* conditional rendering */}
			{/* <p>Punchline: {joke.punchline ? joke.punchline : "no punchline"}</p> */}
			{/* {joke.punchline && <p>Punchline: {joke.punchline}</p>} */}
			{/* {0 && <p>Punchline: {joke.punchline}</p>} */}
			{/* {result} */}

			<p>setup: {setup}</p>
			<p>punchline: {punch}</p>
			<hr />
		</div>
	);
}

export default Joke;

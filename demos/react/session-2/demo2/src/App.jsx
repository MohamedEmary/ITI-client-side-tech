// import { createElement } from "react";
import Card from "./components/Card";
import Counter from "./components/Counter";
import Counter2 from "./components/Counter2";
import Header from "./components/Header";
import Joke from "./components/Joke";
import Login from "./components/Login";
import Meals from "./components/Meals";
import TestEffect from "./components/TestEffect";
import jokes from "./jokes";
import distintations from "./travel";

function App() {
	// console.log(<h1 className="header">This is h1</h1>);
	// console.log(
	// 	createElement(
	// 		"h1",
	// 		{
	// 			className: "header",
	// 		},
	// 		"This is h1"
	// 	)
	// );

	// console.log(<Counter />);
	// console.log(jokes);
	// const firstJoke = jokes[0];

	// const jokesPrev = jokes.map((joke) => <Joke joke={joke} />);
	// const jokesPrev = jokes.map((joke) => (
	// 	<Joke setup={joke.setup} punch={joke.punchline} />
	// ));
	// console.log(jokesPrev);

	// console.log(<Joke joke={firstJoke} />);

	// console.log(
	// 	<div>
	// 		<div>
	// 			<button>+</button>
	// 			<p>10</p>
	// 		</div>
	// 	</div>
	// );

	return (
		<>
			{/* <Counter /> */}
			{/* <Joke joke={firstJoke} /> */}
			{/* {jokesPrev} */}

			{/* {jokes.map((joke) => (
				<Joke setup={joke.setup} punch={joke.punchline} key={joke.setup} />
			))} */}

			{/* no punchline prop passed */}
			{/* <Joke setup={"test setup"} /> */}

			{/* Travel Journal App */}
			{/* <Header />
			<ul>
				{distintations.map((dist) => (
					<Card cardData={dist} key={dist.id} />
				))}
			</ul> */}

			<Login />

			<Meals/>

			{/* <Counter2 /> */}
			{/* <TestEffect /> */}
		</>
	);
}

export default App;

import { useState } from "react";
import NumberOfDays from "./NumberOfDays";

// function components always start with capital letters

// Hooks can be used inside
// custom hook (a function starting with `use`)
// functional component starting with uppercase letter

function Counter() {
	// let counter = 0;
	// react state is immutable
	// object array primitive value (string, true/false, number)
	const [counter, setCounter] = useState(0);

	console.log("new", counter);

	const increment = () => {
		// counter += 1;
		// counter = counter + 1;
		// console.log(counter);
		// setState(3);

		// setState((prev) => {
		// const newValue = prev + 1;
		// return newValue;
		// });

		setCounter((prev) => prev + 1);
		console.log("old", counter);
	};

	const decrement = () => {
		// counter -= 1;
		// console.log(counter);
		setCounter((prev) => prev - 1);
		console.log("old", counter);
	};

	// function toggle() {
	// 	setState((prev) => !prev);
	// }

	// const changeName = () => {
	// 	// setUserObj((prev) => [...prev, "mohamed"]);
	// 	setCounter((prev) => {
	// 		/*
	//       {
	//         name: "mohamed";
	//         age: 22;
	//         city: "cairo";

	//         name: "ahmed"
	//       }
	//     */

	// 		return { ...prev, name: "ahmed" };
	// 	});
	// };

	console.log("counter rendered");
	// rerender
	return (
		<div className="counter">
			{/* <p>{counter.name}</p> */}
			<p>{counter}</p>
			{/* <p>{userObj}</p> */}
			<div>
				<button onClick={increment}>+</button>
				<button onClick={decrement}>-</button>

				{/* <NumberOfDays counter={counter} /> */}
				<NumberOfDays />
				{/* <button onClick={toggle}>Toggle</button> */}
				{/* <button onClick={changeName}>Change Name</button> */}
			</div>
		</div>
	);
}

export default Counter;

// schedula re-render
// calls the component again
// state keeps its value between renders

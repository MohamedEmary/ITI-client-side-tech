import { useEffect, useState } from "react";

function TestEffect() {
	const [state1, setState1] = useState(0);
	const [state2, setState2] = useState(0);
	// // hooks are always at the top level of the component
	// logs on mount only
	// useEffect(() => {
	// 	console.log("effect called");
	// }, []);

	// // runs on mount and on state1 change
	// useEffect(() => {
	// 	console.log("effect called");
	// }, [state1]);

	// // runs on mount and on each update of any state or prop
	// useEffect(() => {
	// 	console.log("effect called");
	// });

	return (
		<>
			<div>
				<p>State1: {state1}</p>
				<button onClick={() => setState1((prev) => prev + 1)}>+</button>
				<button onClick={() => setState1((prev) => prev - 1)}>-</button>
			</div>

			<div>
				<p>State2: {state2}</p>
				<button onClick={() => setState2((prev) => prev + 1)}>+</button>
				<button onClick={() => setState2((prev) => prev - 1)}>-</button>
			</div>
		</>
	);
}

export default TestEffect;

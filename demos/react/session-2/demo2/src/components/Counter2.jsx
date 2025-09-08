import { useRef, useState } from "react";

function Counter2() {
	const counterRef = useRef(0);
	const [counterState, setCounterState] = useState(0);
	let counterVar = 0;

	console.log(
		`After rerender var = ${counterVar}, ref = ${counterRef.current}, state = ${counterState}`
	);

	function incrementVar() {
		counterVar += 1;
		console.log("Variable =", counterVar);
	}
	return (
		<>
			<div>
				<p>Ref: {counterRef.current}</p>
				<button onClick={() => (counterRef.current += 1)}>+</button>
				<button onClick={() => (counterRef.current -= 1)}>-</button>
			</div>

			{/* inifinte loop of rerenders */}
			<div>
				<p>State: {counterState}</p>
				<button onClick={() => setCounterState((prev) => prev + 1)}>+</button>
				<button onClick={() => setCounterState((prev) => prev - 1)}>-</button>
			</div>

			<div>
				<p>Variable: {counterVar}</p>
				<button onClick={incrementVar}>+</button>
				<button onClick={() => (counterVar -= 1)}>-</button>
			</div>
		</>
	);
}

export default Counter2;

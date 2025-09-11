import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router";

function Mohamed() {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		// let counter = 0;
		// const interval = setInterval(() => {
		// 	console.log(counter);
		// 	counter++;
		// }, 1000);

		// cleanup function
		// on unmount
		// rerender
		// clean before running effect setup func
		// return () => clearInterval(interval);
		// ==================================
		const handleResize = () => {
			console.log(window.innerWidth);
		};
		window.addEventListener("resize", handleResize);

		// memory leaks
		return () => window.removeEventListener("resize", handleResize);
	});
	// },[]);

	return (
		<>
			<p>{counter}</p>
			<button
				className="px-[12px] py-[5px] bg-amber-400 me-1.5"
				onClick={() => setCounter((prev) => prev + 1)}>
				+
			</button>
			<button
				className="px-[12px] py-[5px] bg-amber-400 "
				onClick={() => setCounter((prev) => prev - 1)}>
				-
			</button>
			<h2>This is mohamed inside profile </h2>
			<Link to="/profile/ahmed">Move to Ahmed</Link>
		</>
	);
}

export default Mohamed;

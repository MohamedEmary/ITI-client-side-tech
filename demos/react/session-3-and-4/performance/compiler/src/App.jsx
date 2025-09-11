import { useState } from "react";
import GrandParent from "./components/GrandParent";

function App() {
	const [counter, setCounter] = useState(0);
	const [theme, setTheme] = useState("light");

	const style = {
		color: theme === "light" ? "#000" : "#fff",
		backgroundColor: theme === "light" ? "#fff" : "#000",
	};

	const sayHi = (componenet) => console.log(`hi there from ${componenet}`);

	return (
		<>
			<p>{counter}</p>
			<button onClick={() => setCounter(counter + 1)}>+</button>
			<button onClick={() => setCounter(counter - 1)}>-</button>
			<br />
			<button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
				Toggle Theme
			</button>

			<GrandParent style={style} sayHi={sayHi} />
			<GrandParent style={style} sayHi={sayHi} />
		</>
	);
}

export default App;

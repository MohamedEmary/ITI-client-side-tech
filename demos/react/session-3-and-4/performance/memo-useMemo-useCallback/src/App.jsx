import { useCallback, useMemo, useState } from "react";
import GrandParent from "./components/GrandParent";

// state
// ref
// variable

function App() {
	const [counter, setCounter] = useState(0);
	const [theme, setTheme] = useState("light");

	// created again and again with each rerender
	// old render 0x123
	// new render 0x456
	const style = useMemo(() => {
		return {
			color: theme === "light" ? "#000" : "#fff",
			backgroundColor: theme === "light" ? "#fff" : "#000",
		};
	}, [theme]);

	// const sayHi = (componenet) => console.log(`hi there from ${componenet}`);
	// const sayHi = useMemo(() => {
	// 	return (componenet) => console.log(`hi there from ${componenet}`);
	// }, []);
	const sayHi = useCallback((componenet) => console.log(`hi there from ${componenet}`),[])

	return (
		<>
			<p>{counter}</p>
			<button onClick={() => setCounter(counter + 1)}>+</button>
			<button onClick={() => setCounter(counter - 1)}>-</button>
			<br />
			<button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
				Toggle Theme
			</button>
			{/* <GrandParent theme={theme} />
			<GrandParent theme={theme} /> */}

			<GrandParent style={style} sayHi={sayHi} />
			<GrandParent style={style} sayHi={sayHi} />
		</>
	);
}

export default App;

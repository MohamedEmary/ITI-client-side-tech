import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";
import Home from "./pages/Home";

function App() {
	const result = useContext(ThemeContext);
	console.log("result from app", result);
	return (
		<>
			<button onClick={result.toggleTheme}>Toggle Theme</button>
			<Home />
		</>
	);
}

export default App;

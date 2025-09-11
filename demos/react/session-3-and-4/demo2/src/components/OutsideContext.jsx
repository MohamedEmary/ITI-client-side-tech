// import { useContext } from "react";
// import ThemeContext from "../context/ThemeContext";
import useTheme from "../hooks/useTheme";

function OutsideContext() {
	// const result = useContext(ThemeContext);
	const result = useTheme();

	console.log("result from outside", result);

	return <h1>im OutsideContext</h1>;
}

export default OutsideContext;

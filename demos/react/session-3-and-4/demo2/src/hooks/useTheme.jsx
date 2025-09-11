import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function useTheme() {
	const result = useContext(ThemeContext);

	if (result === null) {
		throw new Error("Please use theme context within ThemeContextProvider");
	}

	return result;
}

export default useTheme;

// inside provider
// const result = useTheme()
// outside provider => error

import { useState } from "react";
import ThemeContext from "../context/ThemeContext";

function ThemeContextProvider({ children }) {
	const [theme, setTheme] = useState("light");
	console.log(theme);

	const toggleTheme = () => {
		setTheme((prev) => (prev === "light" ? "dark" : "light"));
	};

	return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
}

export default ThemeContextProvider;

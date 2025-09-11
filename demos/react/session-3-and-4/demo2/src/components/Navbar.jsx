// import { useContext } from "react";
// import ThemeContext from "../context/ThemeContext";
import useTheme from "../hooks/useTheme";

function Navbar() {
	// const { theme } = useContext(ThemeContext);
	const { theme } = useTheme();

	const styles = {
		color: theme === "light" ? "black" : "white",
		backgroundColor: theme === "light" ? "white" : "black",
	};

	return (
		<nav>
			<ul style={styles}>
				<li>Home</li>
				<li>Profile</li>
			</ul>
		</nav>
	);
}

export default Navbar;

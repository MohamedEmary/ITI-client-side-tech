import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import useTheme from "../hooks/useTheme";

function MainContent() {
	// const { theme } = useContext(ThemeContext);
	const { theme } = useTheme();

	const styles = {
		color: theme === "light" ? "black" : "white",
		backgroundColor: theme === "light" ? "white" : "black",
	};

	return (
		<p style={styles}>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, illo
			aut reprehenderit accusantium maiores odio est vel amet quia inventore
			ducimus aliquid, dolor animi enim debitis. Ea voluptate numquam ipsam?
		</p>
	);
}

export default MainContent;

import { useContext } from "react";
import { ToggleContext } from "./Toggle";

function ToggleOn({ children }) {
	// Toggle on will return a value when toggle on is true
	const { on } = useContext(ToggleContext);
	return on ? children : null;
}

export default ToggleOn;

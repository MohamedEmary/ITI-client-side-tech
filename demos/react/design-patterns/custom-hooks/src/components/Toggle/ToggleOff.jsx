import { useContext } from "react";
import { ToggleContext } from "./Toggle";
function ToggleOff({ children }) {
	const { on } = useContext(ToggleContext);
	return on ? null : children;
}

export default ToggleOff;

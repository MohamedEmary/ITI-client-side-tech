import { createContext } from "react";
import Toggle from "../Toggle";
import useToggle from "../../hooks/useToggle";

const MenuContext = createContext();

export default function Menu({ children, onToggle }) {
	const [on, toggle] = useToggle({ onToggle, initialValue: true});

	return (
		<MenuContext value={{ on, toggle }}>
			<div className="menu">{children}</div>
		</MenuContext>
	);
}

export { MenuContext };

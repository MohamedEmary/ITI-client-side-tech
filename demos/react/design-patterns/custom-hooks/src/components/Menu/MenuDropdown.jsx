import { useContext } from "react";
import Toggle from "../Toggle";
import { MenuContext } from "./Menu";

export default function MenuDropdown({ children }) {
	const { on } = useContext(MenuContext);

	return on ? <div className="menu-dropdown">{children}</div> : null;
}

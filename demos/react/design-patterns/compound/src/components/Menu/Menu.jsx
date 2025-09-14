import React, { createContext } from "react";
import MenuButton from "./MenuButton";
import MenuDropdown from "./MenuDropdown";

// { buttonText = "Menu", items }
const MenuContext = createContext();

export default function Menu({ children }) {
	// Prop Drilling
	// DRY (Don't Repeat Youself)

	const [open, setOpen] = React.useState(true);
	function toggle() {
		setOpen((prevOpen) => !prevOpen);
	}

	return (
		<div className="menu">
			{/* <MenuButton buttonText={buttonText} onClick={toggle} />

			{open && <MenuDropdown items={items} />} */}

			{/* As an array Children API */}
			{/* {React.Children.map(children, (child) => {
				return React.cloneElement(child, {
					open,
					toggle,
				});
			})} */}

			<MenuContext value={{ open, toggle }}>{children}</MenuContext>
		</div>
	);
}

export { MenuContext };

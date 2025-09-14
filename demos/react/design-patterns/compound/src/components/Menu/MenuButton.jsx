import React, { useContext } from "react";
import Button from "../Button/Button";
import { MenuContext } from "./Menu";

export default function MenuButton({ children }) {
	const { toggle } = useContext(MenuContext);
	return <Button onClick={toggle}>{children}</Button>;
}

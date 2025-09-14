import { createContext } from "react";
import useToggle from "../../../../custom-hooks/src/hooks/useToggle";

const ToggleContext = createContext();

function Toggle({ children, onToggle = () => {} }) {
	const [on, toggle] = useToggle({ onToggle, initialValue: true });

	return <ToggleContext value={{ on, toggle }}>{children}</ToggleContext>;
}

export default Toggle;

export { ToggleContext };

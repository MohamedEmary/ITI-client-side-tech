import { createContext, useEffect, useRef, useState } from "react";

const ToggleContext = createContext();

// noop function
function Toggle({ children, onToggle = () => {} }) {
	const [on, setOn] = useState(false);
	// const [mounted, setMounted] = useState(false);
	const mounted = useRef(false);
	// const [counter, setCounter] = useState(0);

	function toggle() {
		setOn((prev) => !prev);
	}

	// useEffect runs at least once
	// when component mounts
	// infinite rerenders
	useEffect(() => {
		if (mounted.current) {
			onToggle();
		} else {
			// setMounted((prev) => !prev);
			mounted.current = true;
		}
	}, [on]);

	return <ToggleContext value={{ on, toggle }}>{children}</ToggleContext>;
}

export default Toggle;

export { ToggleContext };

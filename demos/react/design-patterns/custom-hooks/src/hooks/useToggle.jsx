import { useState } from "react";
import useEffectOnUpdate from "./useEffectOnUpdate";
function useToggle({ onToggle = () => {}, initialValue = false }) {
	const [on, setOn] = useState(initialValue);
	function toggle() {
		setOn((prev) => !prev);
	}

	useEffectOnUpdate(onToggle, [on]);

	return [on, toggle];
}

export default useToggle;

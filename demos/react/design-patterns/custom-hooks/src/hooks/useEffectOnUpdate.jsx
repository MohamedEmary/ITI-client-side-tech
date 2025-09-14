import { useRef } from "react";
import { useEffect } from "react";

function useEffectOnUpdate(EffectFunc, deps) {
	const mounted = useRef(false);

	useEffect(() => {
		if (mounted.current) {
			EffectFunc();
		} else {
			// setMounted((prev) => !prev);
			mounted.current = true;
		}
	}, deps);
}

export default useEffectOnUpdate;

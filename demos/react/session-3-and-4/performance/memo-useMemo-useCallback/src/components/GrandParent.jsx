import { memo } from "react";
import Parent from "./Parent";

// function GrandParent({ theme }) {
function GrandParent({ style, sayHi }) {
	// function GrandParent({ style }) {
	// console.log("theme from GP", theme);
	console.log("style from GP", style);
	sayHi("GP");

	console.log("[👴] [ ] [ ] [ ]");
	// heavy calculation
	function sleep(ms) {
		const start = Date.now();
		// 10 + 100 => 110
		// 10 11 12
		while (Date.now() < start + ms) {}
		console.log("finished");
	}
	sleep(200);

	return (
		<>
			<Parent />
			<Parent />
		</>
	);
}

// Object.is() === => NaN, 0, -0
// propsAreEqual
// export default memo(GrandParent, (prev, next) => {
// 	console.log(prev.theme, next.theme);

// 	// false
// 	// return true;
// 	// return false;
// 	return prev.theme === next.theme;
// });

export default memo(GrandParent);

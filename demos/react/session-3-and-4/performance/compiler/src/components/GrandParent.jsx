import Parent from "./Parent";

function GrandParent({ style, sayHi }) {
	console.log("style from GP", style);
	sayHi("GP");

	console.log("[👴] [ ] [ ] [ ]");
	function sleep(ms) {
		const start = Date.now();
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

export default GrandParent;

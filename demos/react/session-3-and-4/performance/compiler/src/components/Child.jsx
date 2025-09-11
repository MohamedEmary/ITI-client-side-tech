import GrandChild from "./GrandChild";

function Child() {
	console.log("[ ] [ ] [👦] [ ]");
	return (
		<>
			<GrandChild />
			<GrandChild />
		</>
	);
}

export default Child;

import Child from "./Child";
function Parent() {
	console.log("[ ] [👨] [ ] [ ]");
	return (
		<>
			<Child />
			<Child />
		</>
	);
}

export default Parent;

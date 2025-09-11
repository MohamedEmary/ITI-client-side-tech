import useAuth from "../hooks/useAuth";

function OutsideContext() {
	// const data = useContext(AuthContext);
	const data = useAuth();
	console.log("data =", data);

	return <h1>outside</h1>;
}

export default OutsideContext;

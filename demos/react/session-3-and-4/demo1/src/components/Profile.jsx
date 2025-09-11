import { Outlet, useParams } from "react-router";
import Mohamed from "./Mohamed";
import Ahmed from "./Ahmed";

function Profile() {
	// const { name } = useParams();

	// let result;
	// if (name === "mohamed") {
	// 	result = <Mohamed />;
	// } else if (name === "ahmed") {
	// 	result = <Ahmed />;
	// }

	return (
		<>
			<h1>this is profile page</h1>
			<Outlet />
			{/* {result} */}
		</>
	);
}

export default Profile;

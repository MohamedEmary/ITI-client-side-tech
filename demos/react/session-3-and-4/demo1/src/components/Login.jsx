import { Link } from "react-router";

function Login() {
	return (
		<>
			<h1>Login</h1>
			{/* Move to <a href="/">Home Page</a> */}
			Move to <Link href="/">Home Page</Link>
		</>
	);
}

export default Login;

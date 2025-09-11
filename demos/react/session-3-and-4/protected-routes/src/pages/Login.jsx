import useAuth from "../hooks/useAuth";
import { Link, Navigate } from "react-router";

function Login() {
	const { login, isLoggedIn } = useAuth();

	if (isLoggedIn) return <Navigate to="/" replace />;

	return (
		<>
			<form action={login}>
				<h3>Login</h3>
				<label>
					Username: <input type="text" name="username" />
				</label>
				<br />
				<label>
					Password: <input type="password" name="password" />
				</label>
				<br />
				<button>Submit</button>
			</form>

			{/* <p>
				<Link to="/profile">Move to profile</Link>
			</p> */}
		</>
	);
}

export default Login;

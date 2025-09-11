import { Link } from "react-router";
import useAuth from "../hooks/useAuth";
// import { useContext } from "react";
// import AuthContext from "../context/AuthContext";

function Navbar() {
	const { isLoggedIn, logout } = useAuth();
	// const { isLoggedIn, logout } = useContext(AuthContext);
	// useAuth

	return (
		<nav>
			<ul>
				{isLoggedIn ? (
					<>
						<li>
							<Link to="/profile">Profile</Link>
						</li>
						<li>
							<Link to="/dashboard">Dashboard</Link>
						</li>
						<li>
							<button onClick={logout}>Logout</button>
						</li>
					</>
				) : (
					<>
						<li>
							<Link to="/login">Login</Link>
						</li>
					</>
				)}
			</ul>
		</nav>
	);
}

export default Navbar;

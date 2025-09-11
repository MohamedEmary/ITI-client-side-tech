import { Outlet } from "react-router";
import Navbar from "./components/Navbar";

function App() {
	return (
		<>
			<Navbar />
			<div className="container mx-auto">
				{/* <h1>Hi from App component</h1>
				<p>
					Move to <Link to="/login">Login Page</Link>
				</p>
				<p>
					Move to <Link to="/profile">Profile Page</Link>
				</p>

				*/}
				<Outlet />
			</div>
		</>
	);
}

export default App;

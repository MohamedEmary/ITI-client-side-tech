import { useNavigate } from "react-router";
import Navbar from "./components/Navbar";
import useAuth from "./hooks/useAuth";

function App() {
	const { isLoggedIn } = useAuth();
	const navigate = useNavigate();
	const handleAddToCart = () => {
		if (isLoggedIn) {
			navigate("/dashboard");
		} else {
			console.log("please login");
		}
	};
	return (
		<>
			<Navbar />
			<h1>App</h1>
			<button onClick={handleAddToCart}>Add to cart</button>
		</>
	);
}

export default App;

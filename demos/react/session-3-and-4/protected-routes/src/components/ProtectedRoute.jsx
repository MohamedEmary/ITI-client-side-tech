import { Navigate } from "react-router";
import useAuth from "../hooks/useAuth";

function ProtectedRoute({ children }) {
	const { isLoggedIn } = useAuth();

	return isLoggedIn ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;

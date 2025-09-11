import { useContext } from "react";
import AuthContext from "../context/AuthContext";

function useAuth() {
	const data = useContext(AuthContext);

	if (data === null) {
		throw new Error("Please wrap your component within AuthContextProvider");
	}

	return data;
}

export default useAuth;

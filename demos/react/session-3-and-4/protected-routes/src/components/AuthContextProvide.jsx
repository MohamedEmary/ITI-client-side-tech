import { useState } from "react";
import AuthContext from "../context/AuthContext";

function AuthContextProvide({ children }) {
	const [isLoggedIn, setIsLoggedIn] = useState(
		localStorage.getItem("token") ? true : false
	);


	console.log(isLoggedIn);

	const login = async (formData) => {
		const username = formData.get("username");
		const password = formData.get("password");
		// console.log({ username, password });

		// https://fakestoreapi.com/auth/login
		// Content-Type: application/json
		// { username: username, password: password }
		const response = await fetch("https://fakestoreapi.com/auth/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			// string
			// bloob binary
			// formData
			// file
			// JWT
			body: JSON.stringify({ username, password }),
		});
		const data = await response.json();
		if (data?.token) {
			// document.cookies = http-only cookie not accessible by js
			// access token 15min
			// refresh token
			// https://youtu.be/AcYF18oGn6Y
			localStorage.setItem("token", data.token);
			setIsLoggedIn(true);
		}
	};
	const logout = () => {
		localStorage.removeItem("token");
		setIsLoggedIn(false);
	};

	return (
		<AuthContext value={{ isLoggedIn, login, logout }}>{children}</AuthContext>
	);
}

export default AuthContextProvide;

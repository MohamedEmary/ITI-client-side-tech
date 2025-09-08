import { useState, useRef, useEffect } from "react";

function Login() {
	// Controlled Components
	// Value of the input field is controlled by react

	// reference current value is mutable
	// { current: initialValue }
	// inputRef.current = 99
	const inputRef = useRef(null);

	const [username, setUsername] = useState("");
	const [passwd, setPasswd] = useState("");

	// const handleSubmitAction = (formData) => {
	//  // React 19 feature
	//  // Form Actions
	// 	// Data validation then
	// 	// Call API
	// 	// e.preventDefault();
	// 	// console.log(e.traget);
	// 	// // console.log(new FormData(e.traget));
	// 	// const data = new FormData(e.traget);
	// 	// console.log(data.get("username"));
	// 	// for (const inputField of data) {
	// 	// 	console.log(inputField);
	// 	// }

	// 	// console.log(username, passwd);

	// 	for (const entry of formData) {
	// 		console.log(entry);
	// 	}

	// 	console.log(formData.get("favFruit"));
	// 	console.log(formData.getAll("favFruit"));

	//   // API Call
	//   // fetch(url, {
	//     // loginData: {
	//       // username: formData.get("username")
	//       // password: formData.get("password")
	//     // }
	//   // })
	// };

	// useEffect
	// useRef

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(username, passwd);
		inputRef.current.focus();
		e.target.reset();
	};

	// runs on mount only
	useEffect(() => {
		inputRef.current.focus();
	}, []);

	return (
		<div className="center">
			<form
				// action={handleSubmitAction}
				onSubmit={handleSubmit}>
				<label>
					Username:
					<input
						type="text"
						name="username"
						ref={inputRef}
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</label>
				<br />
				<label htmlFor="passwd">Password:</label>
				<input
					id="passwd"
					type="password"
					name="pass"
					value={passwd}
					onChange={(e) => setPasswd(e.target.value)}
				/>
				<br />

				<label>
					Orange <input type="checkbox" value="Orange" name="favFruit" />
				</label>
				<label>
					Apple
					<input type="checkbox" value="apple" name="favFruit" />
				</label>
				<label>
					Banana
					<input type="checkbox" value="banana" name="favFruit" />
				</label>

				<button>Submit</button>
			</form>

			{/* <p>You Entered</p>
			<p>{username}</p>
			<p>{passwd}</p> */}
		</div>
	);
}

export default Login;

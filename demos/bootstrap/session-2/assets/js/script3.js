const username = document.querySelector("#username-field");

username.addEventListener("input", (e) => {
	if (username.value.length >= 5) {
		console.log("ttt");
		e.target.classList.remove("is-invalid");
		e.target.classList.add("is-valid");
	} else {
		e.target.classList.remove("is-valid");
		e.target.classList.add("is-invalid");
	}
});

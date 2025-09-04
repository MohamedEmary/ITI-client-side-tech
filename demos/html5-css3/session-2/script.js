// console.log(navigator.geolocation);

// navigator.geolocation.getCurrentPosition(
// 	(pos) => {
// 		console.log(pos.coords.latitude, pos.coords.longitude);
// 		const link = document.querySelector("a");
// 		link.setAttribute(
// 			"href",
// 			`https://www.google.com/maps/place/${pos.coords.latitude},${pos.coords.longitude}`
// 		);
// 	}, // success
// 	(e) => console.log("err", e), // error
// 	{
// 		enableHighAccuracy: true,
// 		timeout: 1000,
// 	}
// );

// // https://www.google.com/maps/place/@30.4562256,31.19254,17z

// ==========================================

// localStorage.setItem("colorMode", "dark");
// console.log(localStorage.getItem("colorMode"));
// localStorage.removeItem("colorMode");
// document.cookie = "colorMode=light; path=/";

// Polyfill
// console.log(window.localStoragee);
// if (!window.localStoragee) {
// 	var localStoragee = {
// 		getItem: (k) => {
// 			console.log(document.cookie);
// 			return document.cookie.indexOf(` ${k}=`);
// 		},
// 		setItem: (k, v) => {
// 			document.cookie = `${k}=${v}; path=/`;
// 		},
// 	};
// }

// localStoragee.setItem("k", "v");
// console.log(localStoragee.getItem("k"));

// console.log(Modernizr);

console.log(conditionizr);

conditionizr.add("chrome", () => {
	return navigator.userAgent.toLowerCase().includes("chrome");
	// return document.documentElement.classList.includes("localstorage")
});

conditionizr.add("firefox", () => {
	return navigator.userAgent.toLowerCase().includes("firefox");
});

conditionizr.polyfill("chrome.js", ["chrome"]);
conditionizr.polyfill("firefox.js", ["firefox"]);

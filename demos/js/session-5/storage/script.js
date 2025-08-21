// localStorage.clear();
// localStorage.setItem("theme", "dark");
// localStorage.setItem("user-info", 123);
// localStorage.setItem("user-info", [1, 2, 3]);

// // var myStrObj = new String();
// // console.log(myStrObj);
// // console.log(String([1, 2, 3]));
// // console.log(String(true));
// // console.log([1, 2, 3].join(","));

// localStorage.setItem(
// 	"user-info",
// 	JSON.stringify({
// 		name: "moahmed",
// 		age: 24,
// 	})
// );

// console.log(localStorage.getItem("theme"));
// console.log(localStorage.getItem("user-info"));
// console.log(JSON.parse(localStorage.getItem("user-info")));

// // localStorage.removeItem("theme");
// If i remove cache will local storage be removed or not

// ======================================

// sessionStorage.clear();
// sessionStorage.setItem("course", "client-side-tech");
// var input = document.querySelector('[name="username"]');

// input.value = localStorage.getItem("username");

// input.addEventListener("input", function (e) {
// 	localStorage.setItem("username", input.value);
// });

// ======================================

document.cookie =
	"theme=light; expires=Thu Aug 29 2025 11:43:15; path=/; ";
// cookies JWT token

// Cookies.set("name", "value", { expires: 7, path: "/test" });
// TODO: path
// Cookies.set("test", "value", { expires: 7, path: "/test" });

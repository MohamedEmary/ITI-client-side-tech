const themeSwitcher = document.querySelector("#theme-switcher");

themeSwitcher.addEventListener("click", () => {
	let currentMode = document.documentElement.getAttribute("data-bs-theme");
	if (currentMode === "light") {
		document.documentElement.setAttribute("data-bs-theme", "dark");
		themeSwitcher.innerHTML = `<i class="fa-solid fa-moon"></i> Dark`;
	} else {
		document.documentElement.setAttribute("data-bs-theme", "light");
		themeSwitcher.innerHTML = `<i class="fa-regular fa-sun"></i> Light`;
	}
});



const liveAlertBtn = document.querySelector("#liveAlertBtn")
liveAlertBtn.addEventListener("click",()=>{
	document.getElementById("liveAlertPlaceholder").innerHTML=`
	<div class="alert alert-warning" role="alert">
  	A simple warning alert—check it out!
	</div>`
})
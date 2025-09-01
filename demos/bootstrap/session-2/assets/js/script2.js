// This is an example script, please modify as needed
const rangeInput = document.getElementById("range4");
const rangeOutput = document.getElementById("rangeValue");

// Set initial value
rangeOutput.textContent = rangeInput.value;

rangeInput.addEventListener("input", function () {
	rangeOutput.textContent = this.value;
});



const progress = document.querySelector(".progress-bar");
let width = 0;
const interval = setInterval(() => {
	progress.style.width = `${width}%`;
	width += 10;
}, 1000);

setTimeout(() => {
	clearInterval(interval);
}, 10000);

const tooltipTriggerList = document.querySelectorAll(
	'[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
	(tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

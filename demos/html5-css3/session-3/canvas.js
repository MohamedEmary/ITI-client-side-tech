const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// ctx.beginPath();
// ctx.moveTo(10, 10);
// ctx.lineTo(200, 200);
// ctx.lineWidth = 4;
// ctx.lineTo(10, 200);
// ctx.closePath();
// // fill
// ctx.fillStyle = "red";
// ctx.fill();

// ctx.font = "40px sans-serif";
// ctx.strokeText("Some text", 0, 30);

// ctx.rect(150, 250, 100, 50);

// ctx.translate(10, 10);
// ctx.fillRect(150, 250, 100, 50);

// ctx.setTransform(1, 0, 0, 1, 0, 0);
// ctx.rect(0, 200, 100, 50);

// ctx.stroke();

// =========================

// ctx.beginPath();
// ctx.rect(100, 50, 100, 50);
// ctx.fillStyle = "red";
// ctx.rotate(Math.PI / 10);
// ctx.fillRect(100, 50, 100, 50);
// ctx.stroke();

// ==========================

let x = 0;
let y = 0;
ctx.moveTo(0, 0);
const inteval = setInterval(() => {
	ctx.clearRect(0, 0, 400, 400);
	ctx.beginPath();
	ctx.moveTo(0, 0);
	ctx.lineTo(x, y);

	x += 10;
	y += 10;

	ctx.stroke();

	if (x === 400 || y === 400) clearInterval(inteval);
}, 1000);

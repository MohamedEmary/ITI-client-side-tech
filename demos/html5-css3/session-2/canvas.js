const canvas = document.querySelector("canvas");
console.log(canvas);
const ctx = canvas.getContext("2d");
console.log(ctx);

// ctx.moveTo(100, 100);
// ctx.lineTo(150, 150);
// ctx.lineTo(250, 150);
// ctx.lineTo(400, 100);
// ctx.lineTo(200, 200);
// ctx.fillStyle = "red";
// ctx.fillRect(0, 10, 30, 30);
// ctx.rect(50, 30, 100, 50);

ctx.arc(200, 200, 50, (3 / 4) * Math.PI, (1 / 4) * Math.PI, true);

let x = 0;
let y = 0;

ctx.moveTo(0, 0);
const interval = setInterval(() => {
	ctx.lineTo(x, y);
	// ctx.moveTo(x, y);

	x += 10;
	y += 10;
	ctx.stroke();
	if (x === 100 || y === 100) {
		clearInterval(interval);
		alert("animation finished");
	}
}, 1000);

ctx.stroke();

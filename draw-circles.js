function drawIt() {
	const canvas = document.getElementById("myCanvas");
	const ctx = canvas.getContext("2d");
	const img = document.getElementById("lampTiny");//"./高樓的風(small).jpg";
	const pattern = ctx.createPattern(img, "repeat");

	const min = 20;
	const max = 50;

	let count = 0;
	let circles = []

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	const interval = setInterval(() => {
		count = count + 1;
		console.log(`Inside Anonymous(): ${count}`)

		let x = Math.floor(Math.random() * canvas.width);
		let y = Math.floor(Math.random() * canvas.height);
		let r = Math.floor(Math.random() * (max - min + 1)) + min;

		for (const one of circles) {
			const a = x - one[0];
			const b = y - one[1];
			if (Math.sqrt(a*a + b*b) < r + one[2]) return;
		}

		circles.push([x, y, r]);

		ctx.beginPath();
		ctx.arc(x, y, r, 0, 2 * Math.PI);
		ctx.stroke();
		ctx.fillStyle = pattern;
		ctx.fill();
		ctx.fillStyle = "orange";
		ctx.font = "12px serif";
		ctx.textAlign = "center";  // horizontal alignment
		ctx.textBaseline = "middle";  // vertical alignment
		ctx.fillText(circles.length, x, y);

		if (circles.length == 1 || circles.length == 20) {
			ctx.beginPath();
			ctx.arc(x, y - 1, 10, 0, 2 * Math.PI);
			ctx.strokeStyle = "crimson";
			ctx.stroke();
			if (circles.length == 20) clearInterval(interval);
		}

	}, 100);
console.log(`Inside drawIt(): ${count}`)
	return count;
}

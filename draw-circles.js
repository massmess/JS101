drawIt() {
	const canvas = document.getElementById("myCanvas"):
	const ctx = canvas.getContext("2d");
	let count = 0;
	let circles = [];

	ctx.lineWidth = 1;

	const interval = setInterval(() => {
		const img = document.getElementById("lampTiny");//"./高樓的風(small).jpg";
		const pat = ctx.createPattern(img, "repeat");
		const min = 20;
		const max = 50;

		let x = Math.floor(Math.random() * canvas.width);
		let y = Math.floor(Math.random() * canvas.height);
		let r = Math.floor(Math.random() * (max - min + 1)) + min;
		for (const one of circles) {
			const a = x - one[0];
			const b = y - one[1];
			if (Math.sqrt(a*a + b*b) < r + one[2]) return;
		}
		circles.push([x, y, r]);
		count = count + 1;
			
		ctx.beginPath();
		ctx.arc(x, y, r, 0, 2 * Math.PI);
		ctx.stroke();
		ctx.fillStyle = pat;//colors[col];//rgb(r,g,b); //red
		ctx.fill();
		ctx.fillStyle = "orange"//`rgb(${r}, ${g}, ${b})`;//"red";
		ctx.font = "12px serif";
		//ctx.font = "10px monospace";
		ctx.textAlign = "center";  // horizontal alignment
		ctx.textBaseline = "middle";  // vertical alignment
		//ctx.fillText("Koch", 10, 10);
		//ctx.fillText(zeroPad(myCount, 3).toString()/*myCount.toString()*/, x, y);
		ctx.fillText(circles.length, x, y);
		//ctx.fillText(zeroPad(myCount, 3).toString()/*myCount.toString()*/, x - 9, y + 5);

		if (circles.length == 20) {
			ctx.beginPath();
			ctx.arc(x, y - 1, 10, 0, 2 * Math.PI);
			ctx.strokeStyle = "crimson";
			ctx.stroke();
			clearInterval(interval);
		}
	}, 100);
}

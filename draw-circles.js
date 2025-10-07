		const interval = setInterval(() => {
			const img = document.getElementById("lampTiny");//"./高樓的風(small).jpg";
			const pat = ctx.createPattern(img, "repeat");
			const min = 20;
			const max = 50;
	
			let x = Math.floor(Math.random() * myCanvas.width);
			let y = Math.floor(Math.random() * myCanvas.height);
			let rho = Math.floor(Math.random() * (max - min + 1)) + min;
			let r = Math.floor(Math.random() * 256);
			let g = Math.floor(Math.random() * 256);
			let b = Math.floor(Math.random() * 256);
			let col = Math.floor(Math.random() * 12);
			for (const circle of myCircles) {
				const a = x - circle[0];
				const b = y - circle[1];
				if (Math.sqrt(a*a + b*b) < rho + circle[2]) return;
			}
			myCircles.push([x, y, rho]);
			myCount = myCount + 1;
				
			ctx.beginPath();
			ctx.arc(x, y, rho, 0, 2 * Math.PI);
			ctx.stroke();
			ctx.fillStyle = pat;//colors[col];//rgb(r,g,b); //red
			ctx.fill();
			ctx.fillStyle = "orange"//`rgb(${r}, ${g}, ${b})`;//"red";
			//if (myCount == countMax)
			//ctx.fillStyle="crimson";
			ctx.font = "12px serif";
			//ctx.font = "10px monospace";
			ctx.textAlign = "center";  // horizontal alignment
			ctx.textBaseline = "middle";  // vertical alignment
			//ctx.fillText("Koch", 10, 10);
			//ctx.fillText(zeroPad(myCount, 3).toString()/*myCount.toString()*/, x, y);
			ctx.fillText(myCircles.length, x, y);
			//ctx.fillText(zeroPad(myCount, 3).toString()/*myCount.toString()*/, x - 9, y + 5);
	
			if (myCircles.length == 20) {
				ctx.beginPath();
				ctx.arc(x, y - 1, 10, 0, 2 * Math.PI);
				ctx.strokeStyle = "white";
				ctx.lineWidth = 1;
				ctx.stroke();
				clearInterval(interval);
			}
		}, 100);

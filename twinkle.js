function twinkle() {
	let count = 0;
	const d = document.getElementById("twinkle");
	save = d.innerHTML;
	saveColor = d.style.color;
	tmp = save.slice(0, save.length - "<br>(Be<br>&#9675;&#9675;&#9675;<br>There)".length+5);
	tmp = tmp + "<br><em>I am good, very good indeed.</em><br>";

	(() => {
	let qwerty = window.setInterval(() => {
		count += 1;

		if (count == 73) {
		window.clearInterval(qwerty);
		setTimeout(() => {
			d.style.color = saveColor;
			d.innerHTML = save;
		}, 3000);
		}

		d.innerHTML = tmp + `<em>${count.toString()}</em>`;

		if (count % 2 == 1) {
		d.style.color = `hsla(240, 95%, 25%, 1.0)`;
		//d.style.opacity = 0.95;
		} else {
		d.style.color = `hsla(0, 95%, 25%, 0.8)`;
		//d.style.opacity = 0.75;
		}
	}, 3000);
	})();
}

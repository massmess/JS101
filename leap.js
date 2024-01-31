function leap(year) {
	let y = 0;

	if (year % 400 == 0) {
		y = 1;
	} else if ( year % 100 == 0) {
		;
	} else if (year % 4 == 0) {
		y = 1
	} else {
		;
	}

	return y;
}

<script>
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();
</script> 

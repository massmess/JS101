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

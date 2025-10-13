// calendar-page.js

const MONTHS = [
	"",	"January", "February", "March", "April", "May", "June",
	"July",	"August", "September", "October", "November", "December"
];

const MONTH_DAYS_28 = [
	"<pre>"
	+ "Sun Mon Tue Wed Thu Fri Sat<br>"
	+ "  1   2   3   4   5   6   7<br>  8   9  10  11  12  13  14<br>"
	+ " 15  16  17  18  19  20  21<br> 22  23  24  25  26  27  28<br>"
	+ "<br><br></pre>",
	"<pre>"
	+ "Sun Mon Tue Wed Thu Fri Sat<br>"
	+ "      1   2   3   4   5   6<br>  7   8   9  10  11  12  13<br>"
	+ " 14  15  16  17  18  19  20<br> 21  22  23  24  25  26  27<br>"
	+ " 28<br><br></pre>",
	"<pre>"
	+ "Sun Mon Tue Wed Thu Fri Sat<br>"
	+ "          1   2   3   4   5<br>  6   7   8   9  10  11  12<br>"
	+ " 13  14  15  16  17  18  19<br> 20  21  22  23  24  25  26<br>"
	+ " 27  28<br><br></pre>",
	"<pre>"
	+ "Sun Mon Tue Wed Thu Fri Sat<br>"
	+ "              1   2   3   4<br>  5   6   7   8   9  10  11<br>"
	+ " 12  13  14  15  16  17  18<br> 19  20  21  22  23  24  25<br>"
	+ " 26  27  28<br><br></pre>",
	"<pre>"
	+ "Sun Mon Tue Wed Thu Fri Sat<br>"
	+ "                  1   2   3<br>  4   5   6   7   8   9  10<br>"
	+ " 11  12  13  14  15  16  17<br> 18  19  20  21  22  23  24<br>"
	+ " 25  26  27  28<br><br></pre>",
	"<pre>"
	+ "Sun Mon Tue Wed Thu Fri Sat<br>"
	+ "                      1   2<br>  3   4   5   6   7   8   9<br>"
	+ " 10  11  12  13  14  15  16<br> 17  18  19  20  21  22  23<br>"
	+ " 24  25  26  27  28<br></pre>",
	"<pre>"
	+ "Sun Mon Tue Wed Thu Fri Sat<br>"
	+ "                          1<br>  2   3   4   5   6   7   8<br>"
	+ "  9  10  11  12  13  14  15<br> 16  17  18  19  20  21  22<br>"
	+ " 23  24  25  26  27  28<br><br></pre>"
];

const MONTH_DAYS_29 = [
	"<pre>"
	+ "Sun Mon Tue Wed Thu Fri Sat<br>"
	+ "  1   2   3   4   5   6   7<br>  8   9  10  11  12  13  14<br>"
	+ " 15  16  17  18  19  20  21<br> 22  23  24  25  26  27  28<br>"
	+ " 29<br><br></pre>",
	"<pre>"
	+ "Sun Mon Tue Wed Thu Fri Sat<br>"
	+ "      1   2   3   4   5   6<br>  7   8   9  10  11  12  13<br>"
	+ " 14  15  16  17  18  19  20<br> 21  22  23  24  25  26  27<br>"
	+ " 28  29<br><br></pre>",
	"<pre>"
	+ "Sun Mon Tue Wed Thu Fri Sat<br>"
	+ "          1   2   3   4   5<br>  6   7   8   9  10  11  12<br>"
	+ " 13  14  15  16  17  18  19<br> 20  21  22  23  24  25  26<br>"
	+ " 27  28  29<br><br></pre>",
	"<pre>"
	+ "Sun Mon Tue Wed Thu Fri Sat<br>"
	+ "              1   2   3   4<br>  5   6   7   8   9  10  11<br>"
	+ " 12  13  14  15  16  17  18<br> 19  20  21  22  23  24  25<br>"
	+ " 26  27  28  29<br><br></pre>",
	"<pre>"
	+ "Sun Mon Tue Wed Thu Fri Sat<br>"
	+ "                  1   2   3<br>  4   5   6   7   8   9  10<br>"
	+ " 11  12  13  14  15  16  17<br> 18  19  20  21  22  23  24<br>"
	+ " 25  26  27  28  29<br><br></pre>",
	"<pre>"
	+ "Sun Mon Tue Wed Thu Fri Sat<br>"
	+ "                      1   2<br>  3   4   5   6   7   8   9<br>"
	+ " 10  11  12  13  14  15  16<br> 17  18  19  20  21  22  23<br>"
	+ " 24  25  26  27  28  29<br></pre>",
	"<pre>"
	+ "Sun Mon Tue Wed Thu Fri Sat<br>"
	+ "                          1<br>  2   3   4   5   6   7   8<br>"
	+ "  9  10  11  12  13  14  15<br> 16  17  18  19  20  21  22<br>"
	+ " 23  24  25  26  27  28  29<br><br></pre>"
];

const MONTH_DAYS_30 = [
	"<pre>"
	+ "Sun Mon Tue Wed Thu Fri Sat<br>"
	+ "  1   2   3   4   5   6   7<br>  8   9  10  11  12  13  14<br>"
	+ " 15  16  17  18  19  20  21<br> 22  23  24  25  26  27  28<br>"
	+ " 29  30<br><br></pre>",
	"<pre>"
	+ "Sun Mon Tue Wed Thu Fri Sat<br>"
	+ "      1   2   3   4   5   6<br>  7   8   9  10  11  12  13<br>"
	+ " 14  15  16  17  18  19  20<br> 21  22  23  24  25  26  27<br>"
	+ " 28  29  30<br><br></pre>",
	"<pre>"
	+ "Sun Mon Tue Wed Thu Fri Sat<br>"
	+ "          1   2   3   4   5<br>  6   7   8   9  10  11  12<br>"
	+ " 13  14  15  16  17  18  19<br> 20  21  22  23  24  25  26<br>"
	+ " 27  28  29  30<br><br></pre>",
	"<pre>"
	+ "Sun Mon Tue Wed Thu Fri Sat<br>"
	+ "              1   2   3   4<br>  5   6   7   8   9  10  11<br>"
	+ " 12  13  14  15  16  17  18<br> 19  20  21  22  23  24  25<br>"
	+ " 26  27  28  29  30<br><br></pre>",
	"<pre>"
	+ "Sun Mon Tue Wed Thu Fri Sat<br>"
	+ "                  1   2   3<br>  4   5   6   7   8   9  10<br>"
	+ " 11  12  13  14  15  16  17<br> 18  19  20  21  22  23  24<br>"
	+ " 25  26  27  28  29  30<br><br></pre>",
	"<pre>"
	+ "Sun Mon Tue Wed Thu Fri Sat<br>"
	+ "                      1   2<br>  3   4   5   6   7   8   9<br>"
	+ " 10  11  12  13  14  15  16<br> 17  18  19  20  21  22  23<br>"
	+ " 24  25  26  27  28  29  30<br><br></pre>",
	"<pre>"
	+ "Sun Mon Tue Wed Thu Fri Sat<br>"
	+ "                          1<br>  2   3   4   5   6   7   8<br>"
	+ "  9  10  11  12  13  14  15<br> 16  17  18  19  20  21  22<br>"
	+ " 23  24  25  26  27  28  29<br>"
	+ " 30<br></pre>"
];

const MONTH_DAYS_31 = [
	"<pre>"
	+ "Sun Mon Tue Wed Thu Fri Sat<br>"
	+ "  1   2   3   4   5   6   7<br>  8   9  10  11  12  13  14<br>"
	+ " 15  16  17  18  19  20  21<br> 22  23  24  25  26  27  28<br>"
	+ " 29  30  31<br><br></pre>",
	"<pre>"
	+ "Sun Mon Tue Wed Thu Fri Sat<br>"
	+ "      1   2   3   4   5   6<br>  7   8   9  10  11  12  13<br>"
	+ " 14  15  16  17  18  19  20<br> 21  22  23  24  25  26  27<br>"
	+ " 28  29  30  31<br><br></pre>",
	"<pre>"
	+ "Sun Mon Tue Wed Thu Fri Sat<br>"
	+ "          1   2   3   4   5<br>  6   7   8   9  10  11  12<br>"
	+ " 13  14  15  16  17  18  19<br> 20  21  22  23  24  25  26<br>"
	+ " 27  28  29  30  31<br><br></pre>",
	"<pre>"
	+ "Sun Mon Tue Wed Thu Fri Sat<br>"
	+ "              1   2   3   4<br>  5   6   7   8   9  10  11<br>"
	+ " 12  13  14  15  16  17  18<br> 19  20  21  22  23  24  25<br>"
	+ " 26  27  28  29  30  31<br><br></pre>",
	"<pre>"
	+ "Sun Mon Tue Wed Thu Fri Sat<br>"
	+ "                  1   2   3<br>  4   5   6   7   8   9  10<br>"
	+ " 11  12  13  14  15  16  17<br> 18  19  20  21  22  23  24<br>"
	+ " 25  26  27  28  29  30  31<br><br></pre>",
	"<pre>"
	+ "Sun Mon Tue Wed Thu Fri Sat<br>"
	+ "                      1   2<br>  3   4   5   6   7   8   9<br>"
	+ " 10  11  12  13  14  15  16<br> 17  18  19  20  21  22  23<br>"
	+ " 24  25  26  27  28  29  30<br>"
	+ " 31<br></pre>",
	"<pre>"
	+ "Sun Mon Tue Wed Thu Fri Sat<br>"
	+ "                          1<br>  2   3   4   5   6   7   8<br>"
	+ "  9  10  11  12  13  14  15<br> 16  17  18  19  20  21  22<br>"
	+ " 23  24  25  26  27  28  29<br>"
	+ " 30  31<br></pre>"
];

const PTR_MONTH_DAYS = [
	MONTH_DAYS_28, MONTH_DAYS_29, MONTH_DAYS_30, MONTH_DAYS_31
];

const DAYS_IN_MONTH = [
	0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
];

const DAYS_PAST = [
	0, 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334
];

function leap(year) {
	let y = 0;

	if (year % 400 == 0) {
		y = 1;
	} else if ( year % 100 == 0) {
		;
	} else if (year % 4 == 0) {
		y = 1;
	} else {
		;
	}

	return y;
}

function seven(yy, mm) {
	let r = ((yy - 1))
		+ Math.floor((yy - 1) / 4)
		+ (mm > 2 ? leap(yy) : 0)
		+ DAYS_PAST[mm];
	return r % 7;
}

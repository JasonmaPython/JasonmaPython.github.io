const LETTERS = [
	"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
	"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
	"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
	"N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
	"0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
				];

canvs = document.getElementById("cvsimg").getContext("2d");
console.log("06");
function rand() {
	r = Math.floor(Math.random() * 62);
	console.log("08");
	return LETTERS[r];
}
class letter {
	constructor(pos,text) {
		this.real = [10 + pos * 74, 30];
		canvs.fillStyle = "black";
		canvs.font = '74px "Arial"';
		canvs.fillText(text, this.real[0], this.real[1]);
		console.log("07");
	}
}
function newrand() {
	randed = []
	for (i = 0; i <= 3; i++) {
		rdd = rand();
		randed.push(rdd);
		letr = new letter(i, rdd);
	}
	rstring = "0123".replace("0", randed[0]).replace("1", randed[1]).replace("2", randed[2]).replace("3", randed[3])
	checker = document.getElementById("checkinp")
}

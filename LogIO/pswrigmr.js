const LETTERS = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
				 "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

canvs = document.getElementById("cvsimg").getContext("2d");
console.log("06");
function rand() {
	r = Math.floor(Math.random() * (max - min)) + min;
	console.log("08");
	return LETTERS[r];
}
class letter {
	constructor(pos,text) {
		this.real = [10 + pos * 74, 30];
		canvs.fillStyle = "black";
		canvs.font = '74px "Arial"';
		canvs.fillText(text.toUpperCase(), this.real[0], this.real[1]);
		console.log("07");
	}
}
for (i = 0; i <= 3; i++) {
	letr = new letter(i,);
}

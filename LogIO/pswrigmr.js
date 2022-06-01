canvs = document.getElementById("cvsimg").getContext("2d");
console.log("06");
class letter {
	constructor(pos,text) {
		this.real = [10 + pos * 74, 30];
		canvs.fillStyle = "black";
		canvs.font = '74px "Arial"';
		canvs.fillText(text.toUpperCase(), this.real[0], this.real[1]);
		console.log("07");
	}
}
letr = new letter(0,"a");

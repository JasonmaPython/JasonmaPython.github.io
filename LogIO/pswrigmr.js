canvs = document.getElementById("cvsimg").getContext("2d");
class letter {
	constructor(pos) {
		this.real = [10 + pos * 74, 30];
		canvs.fillStyle = "black";
		canvs.font = '74px "Arial"';
		console.log("");
	}
	a() {
		canvs.fillText("A", this.real[0], this.real[1]);
	}
}
letr = new letter(0);
letr.a();

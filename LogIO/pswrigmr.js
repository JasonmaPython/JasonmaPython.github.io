canvs = document.getElementById("cvsimg").getContext("2d")
class letter {
	constructor(pos) {
		this.real = [10 + pos * 74,]
		canvs.fillStyle = "black";
		canvs.font = '100px "Arial"';
		consle.log("0")
	}
	a() {
		canvs.fillText("A", this.real[0], this.real[1])
		consle.log("F")
	}
}
letr = new letter(0)
letr.a();

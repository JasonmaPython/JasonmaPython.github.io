canvs = document.getElementById("cvsimg").getContext("2d")
class letter {
    constructor(pos){
        if (pos == 0) {
            this.real=[10,50]
        }
    }
    a() {
        canvs.fillStyle = "black";
        canvs.font = '100px "Arial"';
        canvs.fillText("A",this.real[0],this.real[1])
    }
}
letr = new letter(0);
letr.a();

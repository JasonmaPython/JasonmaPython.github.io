canvs = document.getElementById("cvsimg").getContext("2d")
class letter {
    a() {
        canvs.moveTo(300, 300);
        canvs.fillStyle = "black";
        canvs.font = '20px "Arial"';
        canvs.textBaseline = "bottom";
        canvs.textAlign = "left";
        canvs.fillText("A",0,0)
    }
}
letr = new letter()
letr.a()

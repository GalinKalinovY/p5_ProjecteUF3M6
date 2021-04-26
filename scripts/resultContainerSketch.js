const sres = ( p ) => {

    let bg;

    p.preload = function () {

    }

    p.setup = function () {
        p.createCanvas(400, 800);
        bg = p.loadImage('images/fondoStats.jpg');
    }
    p.draw = function () {
        p.background('red');
        p.background(bg);

    }
}
var myp5 = new p5(sres,'resultContainer');
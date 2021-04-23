const sres = ( p ) => {

    p.preload = function () {

    }

    p.setup = function () {
        p.createCanvas(300, 800);

    }
    p.draw = function () {
        p.background('red');


    }
}
var myp5 = new p5(sres,'resultContainer');
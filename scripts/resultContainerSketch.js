import {jugador1,jugador2,inciJoc} from './sketch.js';

const sres = ( p1 ) => {

    let fons;
    var timer=200;
    var seconds, minutes;

    p1.preload = function () {

    }

    p1.setup = function () {
        p1.createCanvas(400, 800);
        fons = p1.loadImage('images/fondoStats.jpg');
    }
    p1.draw = function () {
        if(inciJoc == true){
            p1.background(fons);
            p1.clear();
            p1.textSize(24);
            p1.fill(255);
            p1.text('***STATS***', 120, 70);
            p1.text('Punts jugador 1:', 20, 200);
            p1.text('Punts jugador 2:', 20, 300);
            p1.text('Temps:', 20, 400);

            if (jugador1 != null) {
                p1.text(jugador1, 300,200);
            }
            if (jugador2 != null) {
                p1.text(jugador2, 300,300);
            }

            if (p1.frameCount % 60 == 0 && timer > 0) {
                timer-=1;
            }
            if (timer == 0) {
                p1.noLoop();
            }
            minutes = p1.floor(timer/60);
            seconds = timer % 60;

            p1.text(minutes+":"+seconds, 120, 400);

        }
    }
}
var myp5 = new p5(sres,'resultContainer');
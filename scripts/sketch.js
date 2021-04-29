import {arrayString} from './formContainerSketch.js';
const s = ( p ) => {

    let bgViaLactea;
    let bgAndromeda;
    let bola;
    let goblin;
    let monstre;

    p.preload = function () {
        bola = new Ball(p);
        goblin = new Player("jugador1", p);
        monstre = new Player("jugador2", p);
    }

    p.setup = function () {
        p.createCanvas(800, 800);
        bgViaLactea = p.loadImage('images/fondoGalaxia.png');
        bgAndromeda = p.loadImage('images/fondoAndromeda.jpg');
        bola.iniciJocInstanceMode(p);
    }
    p.draw = function () {
        if (arrayString[0] == true) {
            if (arrayString[3] == "1") {
                console.log("setup "+ arrayString);
                p.background(bgViaLactea);
            }else if(arrayString[3] == "2"){
                p.background(bgAndromeda);
            }
            p.drawSprites();

            bola.bounce(p);
            bola.bouceJugadorInstanceMode(p, monstre);
            bola.bouceJugadorInstanceMode(p, goblin);

            switch (bola.tocarBordesInstanceMode(p)) {
                case 1: //punt per jugador 1
                    goblin.punts++;
                    alert("El jugador 1 ha guanyat 1 punt clica ok per reiniciar la partida.");
                    bola.iniciJocAlFerPunt(p, goblin);
                    console.log("Punts del goblin " + goblin.punts);
                    break;
                case 2: //punt per jugador 2
                    monstre.punts++;
                    alert("El jugador 2 ha guanyat 1 punt clica ok per reiniciar la partida.");
                    bola.iniciJocAlFerPunt(p, monstre);
                    console.log("Punts del monstre " + monstre.punts);
                    break;
                default:
            }

            movimentJugadors();

        }
    }

    function movimentJugadors() {

        if (p.keyIsDown(p.LEFT_ARROW) ) {
            goblin.moveLeft(p);
        } else if (p.keyIsDown(p.RIGHT_ARROW)) {
            goblin.moveRight(p);
        }

        if (p.keyIsDown(65)) {
            monstre.moveLeft(p);
        } else if (p.keyIsDown(68)) {
            monstre.moveRight(p);
        }

    }
}
var myp5 = new p5(s, 'gameContainer');
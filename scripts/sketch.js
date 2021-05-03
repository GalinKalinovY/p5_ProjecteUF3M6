import {arrayString} from './formContainerSketch.js';
export var jugador1,jugador2,inciJoc;

const s = ( p ) => {

    let bgViaLactea;
    let bgAndromeda;
    let bgBima;

    let bola;
    let goblin;
    let monstre;
    var song1;
    var song2;
    var song3;

    p.preload = function () {
        bola = new Ball(p);
        goblin = new Player("jugador1", p);
        monstre = new Player("jugador2", p);
    }

    p.setup = function () {
        p.createCanvas(800, 800);
        bgViaLactea = p.loadImage('images/fondoGalaxia.png');
        bgAndromeda = p.loadImage('images/fondoAndromeda.jpg');
        bgBima = p.loadImage('images/fondoBima.jpg');

        p.soundFormats('wav' , 'ogg');
        song1 = p.loadSound('soJoc/song1.wav');
        song2 = p.loadSound('soJoc/song2.wav');
        song3 = p.loadSound('soJoc/song3.wav');
        bola.iniciJocInstanceMode(p);
    }

    p.dibuixarFons =  function(){
        if (arrayString[3] == "1") {
            p.background(bgViaLactea);
        }else if(arrayString[3] == "2"){
            p.background(bgAndromeda);
        }else if(arrayString[3] == "3"){
            p.background(bgBima);
        }
    }
    p.nivellJoc = function(){
        if (arrayString[2] == "1") {
            bola.setSpeed(2);
        }else if(arrayString[2] == "2"){
            bola.setSpeed(6);
        }else if(arrayString[2] == "3"){
            bola.setSpeed(10);
        }
    }
    p.sonsMusica = function(){
        if (arrayString[4] == "1") {
            song1.play();
        }else if(arrayString[4] == "2"){
            song2.play();
        }else if(arrayString[4] == "3"){
            song3.play();
        }
    }

    p.draw = function () {
        if (arrayString[0] == true) {
            p.dibuixarFons();
            p.drawSprites();
            inciJoc=true;
            p.sonsMusica();
            
            bola.bounce(p);
            bola.bouceJugadorInstanceMode(p, monstre);
            bola.bouceJugadorInstanceMode(p, goblin);

            switch (bola.tocarBordesInstanceMode(p)) {
                case 1: //punt per jugador 1
                    goblin.punts++;
                    jugador1=[goblin.punts];
                    alert("El jugador 1 ha guanyat 1 punt clica ok per reiniciar la partida.");
                    bola.iniciJocAlFerPunt(p, goblin, arrayString);
                    console.log("Punts del goblin " + goblin.punts);
                    break;
                case 2: //punt per jugador 2
                    monstre.punts++;
                    jugador2=[monstre.punts];
                    alert("El jugador 2 ha guanyat 1 punt clica ok per reiniciar la partida.");
                    bola.iniciJocAlFerPunt(p, monstre, arrayString);
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

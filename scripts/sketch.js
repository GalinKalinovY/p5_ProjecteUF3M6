
const s = ( p ) => {

    let bg;
    var bola = new Ball(p);
    var goblin = new Player("jugador1",p);
    var monstre = new Player("jugador2",p);

    p.setup = function () {
        p.createCanvas(800, 800);
        //p.createSprite(400, 200, 50, 50);
        bg = p.loadImage('images/fondoGalaxia.png');
        bola.iniciJoc(p);
    }
    p.draw = function () {
        p.background(bg);
        p.drawSprites();

        bola.bounce(p);
        bola.bouceJugador(p,monstre);

        switch (bola.tocarBordes(p))
        {
            case 1: //punt per jugador 1
                    goblin.punts ++;
                    alert("El jugador 1 ha guanyat 1 punt clica ok per reiniciar la partida.");
                    bola.iniciJoc(p);
                    console.log("Punts del goblin "+goblin.punts);
                    break;
            case 2: //punt per jugador 2
                    monstre.punts++;
                    alert("El jugador 2 ha guanyat 1 punt clica ok per reiniciar la partida.");
                    bola.iniciJoc(p);
                    console.log("Punts del monstre "+monstre.punts);
                    break;
            default:
        }

        movimentJugadors();

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
var myp5 = new p5(s, 'myContainer');

const s = ( p ) => {

    let bg;
    var bola = new Ball(p);
    var goblin = new Player("jugador1",p);
    var monstre = new Player("jugador2",p);

    p.setup = function () {
        p.createCanvas(800, 800);
        //p.createSprite(400, 200, 50, 50);
        bg = p.loadImage('images/fondoGalaxia.png');
    }
    p.draw = function () {
        p.background(bg);
        p.drawSprites();

        bola.moureBola(p);

        movimentJugadors();


           /* if (p.key === 'd'){
                pacman.moveRight();
                console.log("coordx",pacman.coordX);
            }
            if (p.key === 'a'){
                pacman.moveLeft();
                console.log("coordx",pacman.coordX);
            }
            if (p.key === 'w'){
                pacman.moveUp();
                console.log("coordx",pacman.coordY);
            }
            if (p.key === 's'){
                pacman.moveDown();
                console.log("coordx",pacman.coordY);
            }*/
        }
    function movimentJugadors() {

        if (p.keyIsDown(p.LEFT_ARROW) ) {
            goblin.moveLeft();
        } else if (p.keyIsDown(p.RIGHT_ARROW)) {
            goblin.moveRight();
        }
    }
}
var myp5 = new p5(s, 'myContainer');
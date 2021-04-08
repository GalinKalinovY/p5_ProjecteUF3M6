
class Player {

    constructor(str,p) {
        if (str == "jugador1") {
            this.spritePlayer = p.createSprite(150, 150, 60, 60);
            this.spritePlayer.addAnimation('idle', 'images/goblinIdle1.png', 'images/goblinIdle2.png', 'images/goblinIdle3.png', 'images/goblinIdle4.png');
            this.spritePlayer.changeAnimation('idle');
        }else if(str == "jugador2"){
            //jugador 2
        }


    }
    moveLeft(){
        this.spritePlayer.position.x = this.spritePlayer.position.x - 15;

        console.log("moure esquerra");
    }
    moveRight(){
        this.spritePlayer.position.x = this.spritePlayer.position.x + 15;
    }
}
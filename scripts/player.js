const posicioX = 400;
const posicioY = 50;


class Player {


    constructor(str,p) {
        this.speed = 15;
        if (str == "jugador1") {
            this.spritePlayer = p.createSprite(posicioX, posicioY, 60, 60);
            this.spritePlayer.addAnimation('idle', 'images/goblinIdle1.png', 'images/goblinIdle2.png', 'images/goblinIdle3.png', 'images/goblinIdle4.png');
            this.spritePlayer.changeAnimation('idle');
            this.punts = 0;
        }else if(str == "jugador2"){
            //jugador 2
            this.spritePlayer = p.createSprite(400, 750, 60, 60);
            this.spritePlayer.addAnimation('idle', 'images/idleMonster1.png', 'images/idleMonster2.png', 'images/idleMonster3.png', 'images/idleMonster4.png');
            this.spritePlayer.changeAnimation('idle');
            this.punts = 0;
        }


    }
    moveLeft(p){
        if(this.spritePlayer.position.x > this.speed){
            //per canviar de direccio la imatge fem un mirror -1 o +1
            this.spritePlayer.position.x = this.spritePlayer.position.x - this.speed;
        }

    }
    moveRight(p){
        if(this.spritePlayer.position.x < p.width - this.speed - 10) {
            console.log(p.width);
            this.spritePlayer.position.x = this.spritePlayer.position.x + this.speed;
        }
    }
}
class Ball{
    constructor(p){
        this.speed=2;
        this.angle= 5;
        this.spriteBall = p.createSprite(200, 100, 32, 32);
        this.spriteBall.addAnimation('moving', 'images/tennis-ball.png');
        this.spriteBall.addAnimation('spinning', 'images/tennis-ball.png','images/tennis-ball1.png', 'images/tennis-ball2.png','images/tennis-ball3.png');
        this.spriteBall.changeAnimation('spinning');
        this.spriteBall.limitSpeed(10);//el maxim de la velocitat es de 10.
    }

    moureBola(p){
        if(p.mouseX < this.spriteBall.position.x - 10) {
            this.spriteBall.changeAnimation('moving');
            //flip horizontally
            this.spriteBall.mirrorX(-1);
            //negative x velocity: move left
            this.spriteBall.velocity.x = -2;
        }
        else if(p.mouseX > this.spriteBall.position.x + 10) {
            this.spriteBall.changeAnimation('moving');
            //unflip
            this.spriteBall.mirrorX(1);
            this.spriteBall.velocity.x = 2;
        }
        if(p.mouseIsPressed) {
            //the rotation is not part of the spinning animation
            this.spriteBall.rotation -= 10;
            this.spriteBall.changeAnimation('spinning');
        }
        else {
            this.spriteBall.rotation = 0;
        }
    }

    iniciJoc(){
        this.spriteBall.position.x = 600;
        this.spriteBall.position.y = 200;
       // this.spriteBall.velocity.x = 2;
       // this.spriteBall.velocity.y = 2;
        this.spriteBall.setSpeed(2,-45);
    }
    bounce(p){//bounce del mapa
        if(this.spriteBall.position.x >= p.width){
            this.spriteBall.setSpeed(5,145);
        }else if(this.spriteBall.position.x < 0){
            this.spriteBall.setSpeed(5,-45);
        }
        var angle = this.spriteBall.getDirection();
    }
    //bounce amb el jugador
    show(p){
        /*rocaImng ha de estar definida y cargada ne preload del sketch*/
        p.image(ballImg,this.coordX,this.coordY);
    }
    showInstanceMode(p,ballImg){
        p.image(ballImg,this.coordX,this.coordY);
    }
}
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

    iniciJoc(p){
        var angle = this.spriteBall.getDirection();

        angle = p.random(210,330);
        this.spriteBall.position.x =  angle;
        this.spriteBall.setSpeed(5,angle);
        this.spriteBall.position.y = 400;
        this.spriteBall.setVelocity(5 , 5);
    }
    tocarBordes(p){
        if (this.spriteBall.position.y > p.height - this.spriteBall.height/2 ) {
            console.log(this.spriteBall.position.y);
            return 1;
        }
        if (this.spriteBall.position.y < this.spriteBall.height/2) {
            console.log(this.spriteBall.position.y);
            return 2;
        }
    }
    bouceJugador(p,player){
        this.spriteBall.collide(player.spritePlayer);

        let veloc = this.spriteBall.getSpeed();
        veloc = veloc *1.05;
        var angle = this.spriteBall.getDirection();

        if (this.spriteBall.position.x < player.spritePlayer.position.x){
            console.log(this.spriteBall.position.x);
        }else if(this.spriteBall.position.x >= player.spritePlayer.position.x){
            //angle= p.random(0,90);
        }
        //this.spriteBall.setSpeed( veloc, angle)
    }
    bounce(p){//bounce del mapa
        var angle = this.spriteBall.getDirection();
        var xspeed=  this.spriteBall.velocity.x;
        var yspeed=  this.spriteBall.velocity.y;

        //en el eix de les X
        if (this.spriteBall.position.x > p.width - this.spriteBall.width/2 || this.spriteBall.position.x < this.spriteBall.width/2) {
            xspeed = xspeed *-1;
        }
        if (this.spriteBall.position.y > p.height - this.spriteBall.height/2 || this.spriteBall.position.y < this.spriteBall.height/2) {
            yspeed = yspeed *-1;
        }
        this.spriteBall.setVelocity(xspeed , yspeed);

        /*
        if(this.spriteBall.position.x > (p.width - this.spriteBall.width/2)){
            console.log("angle dreta"+angle);
            console.log(this.spriteBall.position.x);
            console.log(p.width);
            angle += 90;
            this.spriteBall.position.x =( p.width - this.spriteBall.width )-1;
            /*if(angle < 270){
                angle = angle + 60;
            }
            if(angle > 270){
                angle = angle - 60;
            }
            this.spriteBall.setSpeed(5,angle);
        }else if(this.spriteBall.position.x < this.spriteBall.width){
            console.log("angle esquerra"+angle);
            this.spriteBall.setSpeed(5,angle-90);
        }else if(this.spriteBall.position.y > (p.height - this.spriteBall.height/2)){
            this.spriteBall.setSpeed(5,angle-90);
        }else if(this.spriteBall.position.y < this.spriteBall.height/2){
            this.spriteBall.setSpeed(5,angle+90);
        }
        */
    }

}
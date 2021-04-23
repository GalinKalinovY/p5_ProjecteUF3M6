class Ball{
    constructor(p){//passar la velocitat a partir de la dificultat
        this.angle= 5;
        this.spriteBall = p.createSprite(200, 100, 32, 32);
        this.spriteBall.addAnimation('moving', 'images/tennis-ball.png');
        this.spriteBall.addAnimation('spinning', 'images/tennis-ball.png','images/tennis-ball1.png', 'images/tennis-ball2.png','images/tennis-ball3.png');
        this.spriteBall.changeAnimation('spinning');
        this.spriteBall.limitSpeed(10);//el maxim de la velocitat es de 10.
        this.spriteBall.setSpeed(2);
    }
    /*constructor(){
        this.angle= 5;
        this.spriteBall = createSprite(200, 100, 32, 32);
        this.spriteBall.addAnimation('moving', 'images/tennis-ball.png');
        this.spriteBall.addAnimation('spinning', 'images/tennis-ball.png','images/tennis-ball1.png', 'images/tennis-ball2.png','images/tennis-ball3.png');
        this.spriteBall.changeAnimation('spinning');
        this.spriteBall.limitSpeed(10);//el maxim de la velocitat es de 10.
        this.spriteBall.setSpeed(2);
    }*/

    iniciJocAlFerPunt(p,str){
        this.spriteBall.position.x =  400;
        this.spriteBall.position.y = 400;

        if(str == "jugador1"){
            var angle = this.spriteBall.getDirection();
            angle = p.random(210, 330);
            while(angle > 260 && angle < 280) {
                  angle = p.random(210, 330);
            }
        }else if (str == "jugador2"){
            var angle = this.spriteBall.getDirection();
            angle = p.random(60, 140);
            while(angle > 80 && angle < 100) {
                angle = p.random(60, 140);
            }
        }
        this.spriteBall.setSpeed(2, angle);
    }
    iniciJocInstanceMode(p){
        this.spriteBall.position.x =  400;
        this.spriteBall.position.y = 400;

        var angle = this.spriteBall.getDirection();
        angle = p.random(210, 330);
        while(angle > 260 && angle < 280) {
            angle = p.random(210, 330);
        }
        this.spriteBall.setSpeed(2, angle);

    }
    tocarBordesInstanceMode(p){
        if (this.spriteBall.position.y > p.height - this.spriteBall.height/2 ) {
            console.log(this.spriteBall.position.y);
            return 1;
        }
        if (this.spriteBall.position.y < this.spriteBall.height/2) {
            console.log(this.spriteBall.position.y);
            return 2;
        }
    }
    tocarBordes(){
        if (this.spriteBall.position.y > height - this.spriteBall.height/2 ) {
            console.log(this.spriteBall.position.y);
            return 1;
        }
        if (this.spriteBall.position.y < this.spriteBall.height/2) {
            console.log(this.spriteBall.position.y);
            return 2;
        }
    }
    bouceJugadorInstanceMode(p,player){
        this.spriteBall.collide(player.spritePlayer,tornaBola);
    }
    bouceJugador(player){
        this.spriteBall.collide(player.spritePlayer,tornaBola);
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

    }

}
function tornaBola(spriteA, spriteB) {
    spriteA.velocity.y =  (spriteA.velocity.y)*-1;

    let veloc  = spriteA.getSpeed();
    veloc = veloc *1.05;
    spriteA.setSpeed(veloc);
}
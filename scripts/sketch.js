'use strict';


const s = ( p ) => {

    var bolaTenis;

    p.setup = function () {
        p.createCanvas(800, 400);
        p.createSprite(400, 200, 50, 50);
        p.dibuixarBolaTenis();
    }

    p.dibuixarBolaTenis = function() {
        bolaTenis = p.createSprite(200, 100, 32, 32);
        bolaTenis.addAnimation('moving', 'images/tennis-ball.png');
        bolaTenis.addAnimation('spinning', 'images/tennis-ball.png','images/tennis-ball1.png', 'images/tennis-ball2.png','images/tennis-ball3.png');

        bolaTenis.changeAnimation('spinning');
    }
    p.moureBolaTenis= function () {
        if(p.mouseX < bolaTenis.position.x - 10) {
            bolaTenis.changeAnimation('moving');
            //flip horizontally
            bolaTenis.mirrorX(-1);
            //negative x velocity: move left
            bolaTenis.velocity.x = -2;
        }
        else if(p.mouseX > bolaTenis.position.x + 10) {
            bolaTenis.changeAnimation('moving');
            //unflip
            bolaTenis.mirrorX(1);
            bolaTenis.velocity.x = 2;
        }
        if(p.mouseIsPressed) {
            //the rotation is not part of the spinning animation
            bolaTenis.rotation -= 10;
            bolaTenis.changeAnimation('spinning');
        }
        else
            bolaTenis.rotation = 0;
    }

    p.draw = function () {
        p.background(0, 0, 0);
        p.drawSprites();

        p.moureBolaTenis();

/*
        //if mouse is to the left
        if(mouseX < bolaTenis.position.x - 10) {
            bolaTenis.changeAnimation('moving');
            //flip horizontally
            bolaTenis.mirrorX(-1);
            //negative x velocity: move left
            bolaTenis.velocity.x = -2;
        }
        else if(mouseX > bolaTenis.position.x + 10) {
            bolaTenis.changeAnimation('moving');
            //unflip
            bolaTenis.mirrorX(1);
            bolaTenis.velocity.x = 2;
        }

        if(mouseIsPressed) {
            //the rotation is not part of the spinning animation
            bolaTenis.rotation -= 10;
            bolaTenis.changeAnimation('spinning');
        }
        else
            bolaTenis.rotation = 0;*/
    }
}
var myp5 = new p5(s, 'myContainer');
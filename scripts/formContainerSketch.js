
const sform = ( p ) => {

    let bg;
    let input, button, greeting;

    p.preload = function () {

    }

    p.setup = function () {
        p.createCanvas(500, 800);
        bg = p.loadImage('images/fondoGalaxia.png');

       formulari();
    }
    function formulari(){
        input = p.createInput();
        input.position(20, 65);

        input = p.createInput();
        input.position(20, 65);

        button = p.createButton('submit');
        button.position(input.x + input.width, 65);
        button.mousePressed(formulariUsuari);

        greeting = p.createElement('h2', 'what is your name?');
        greeting.position(20, 5);

        p.textAlign(p.CENTER);
        p.textSize(50);
    }
    function greet() {
        const name = input.value();
        greeting.html('hello ' + name + '!');
        input.value('');

        for (let i = 0; i < 200; i++) {
            p.push();
            p.fill(p.random(255), 255, 255);
            p.translate(p.random(p.width), p.random(p.height));
            p.rotate(p.random(2 * p.PI));
            p.text(name, 0, 0);
            p.pop();
        }
    }
    function formulariUsuari (){
        let numJugadors = document.getElementById("numJugadors").value;
        let dificultat = document.getElementById("dificultat").value;
        let fondo = document.getElementById("fondo").value;
        let musica = document.getElementById("musica").value;

        if(nomUsuari != "" && contraUsuari != "" ){
            alert("Usuari creat!");
            formulari.hide();
            localStorage.setItem("numJugadors", numJugadors);
            localStorage.setItem("dificultat", dificultat);
            localStorage.setItem("fondo", fondo);
            localStorage.setItem("musica", musica);
        }else {
            alert("Has de introduir totes les dades del formulari!!!!");
        }
    }



    p.draw = function () {
        p.background(bg);


    }

}
var myp5 = new p5(sform,'formContainer');
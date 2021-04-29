
export var arrayString = false;
document.getElementById('botoStart').onclick = doSomething;
    function doSomething (){
        let numJugadors = document.getElementById("numJugadors").value;
        let dificultat = document.getElementById("dificultat").value;
        let fondo = document.getElementById("fondo").value;
        let musica = document.getElementById("musica").value;

        if(numJugadors != "" && dificultat != "" && fondo != ""  && musica != ""){
            localStorage.setItem("numJugadors", numJugadors);
            localStorage.setItem("dificultat", dificultat);
            localStorage.setItem("fondo", fondo);
            localStorage.setItem("musica", musica);
            document.getElementById('numJugadors').disabled=true;
            document.getElementById('dificultat').disabled=true;
            document.getElementById('fondo').disabled=true;
            document.getElementById('musica').disabled=true;
            document.getElementById('botoStart').disabled=true;
            arrayString = [true , numJugadors , dificultat , fondo , musica];
        }else {
            alert("Has de introduir totes les dades del formulari!!!!");
        }
    }


//export var ArrayString
    function formulariUsuari (){

        let numJugadors = document.getElementById("numJugadors").value;
        let dificultat = document.getElementById("dificultat").value;
        let fondo = document.getElementById("fondo").value;
        let musica = document.getElementById("musica").value;

        if(nomUsuari != "" && contraUsuari != "" ){
            alert("Usuari creat!");
            localStorage.setItem("numJugadors", numJugadors);
            localStorage.setItem("dificultat", dificultat);
            localStorage.setItem("fondo", fondo);
            localStorage.setItem("musica", musica);
        }else {
            alert("Has de introduir totes les dades del formulari!!!!");
        }
    }

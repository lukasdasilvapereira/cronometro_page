let tempo = document.getElementById("tempo");
let segundos = 0
let minutos = 0;
let horas = 0;
let intervalo;

function iniciarCronometro() {
    if (segundos === 60) {
        segundos = 0
        minutos++
    } if (minutos === 60) {
        minutos = 0
        horas++
    }

}

function atualizarTempo() {
    segundos++;
    iniciarCronometro();
    tempo.innerHTML = `${segundos}${ minutos }${ horas }`

}




function start() {
    intervalo = setInterval(atualizarTempo, 1000);
}
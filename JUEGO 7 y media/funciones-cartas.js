var puntuacion = 0;
var puntuacionElement = null;
var cartaImgElement = null;
var mensajeJuegoElement = null;
var pedirCartaBtn = null;
var mePlantoBtn = null;
var nuevaPartidaBtn = null;
function muestraPuntuacion() {
    if (puntuacionElement) {
        puntuacionElement.textContent = puntuacion.toFixed(1);
    }
}
function dameCarta() {
    var numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    return numeroAleatorio > 7 ? numeroAleatorio + 2 : numeroAleatorio;
}
function obtenerUrlCarta(carta) {
    switch (carta) {
        case 1: return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
        case 2: return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
        case 3: return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
        case 4: return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
        case 5: return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
        case 6: return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
        case 7: return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
        case 10: return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
        case 11: return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
        case 12: return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
        default: return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
    }
}
function mostrarCarta(url) {
    if (cartaImgElement) {
        cartaImgElement.src = url;
    }
}
function sumarPuntuacion(carta) {
    var valor = carta >= 10 ? 0.5 : carta;
    puntuacion += valor;
    muestraPuntuacion();
}
function deshabilitarBotones() {
    if (pedirCartaBtn)
        pedirCartaBtn.disabled = true;
    if (mePlantoBtn)
        mePlantoBtn.disabled = true;
    if (nuevaPartidaBtn)
        nuevaPartidaBtn.classList.remove("hidden");
}
function comprobarGameOver() {
    if (puntuacion > 7.5) {
        if (mensajeJuegoElement) {
            mensajeJuegoElement.textContent = "¡GAME OVER! Te has pasado de 7.5";
        }
        deshabilitarBotones();
    }
}
function gestionarMensajeFinal() {
    var mensaje = "";
    if (puntuacion <= 4) {
        mensaje = "Has sido muy conservador 🤔";
    }
    else if (puntuacion === 5) {
        mensaje = "¿Te ha entrado el canguelo, eh? 😨";
    }
    else if (puntuacion < 7.5) {
        mensaje = "Casi, casi... ¡Buena partida! 😉";
    }
    else if (puntuacion === 7.5) {
        mensaje = "¡LO HAS CLAVADO! ¡Enhorabuena! 🥳🎉";
    }
    if (mensajeJuegoElement) {
        mensajeJuegoElement.textContent = mensaje;
    }
}
function handlePedirCarta() {
    var carta = dameCarta();
    mostrarCarta(obtenerUrlCarta(carta));
    sumarPuntuacion(carta);
    comprobarGameOver();
}
function handleMePlanto() {
    gestionarMensajeFinal();
    deshabilitarBotones();
}
function iniciarNuevaPartida() {
    puntuacion = 0;
    muestraPuntuacion();
    if (mensajeJuegoElement)
        mensajeJuegoElement.textContent = "";
    mostrarCarta("https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg");
    if (pedirCartaBtn)
        pedirCartaBtn.disabled = false;
    if (mePlantoBtn)
        mePlantoBtn.disabled = false;
    if (nuevaPartidaBtn)
        nuevaPartidaBtn.classList.add("hidden");
}
document.addEventListener("DOMContentLoaded", function () {
    puntuacionElement = document.getElementById("puntuacion");
    cartaImgElement = document.getElementById("carta-img");
    mensajeJuegoElement = document.getElementById("mensaje-juego");
    pedirCartaBtn = document.getElementById("pedir-carta");
    mePlantoBtn = document.getElementById("me-planto");
    nuevaPartidaBtn = document.getElementById("nueva-partida");
    if (pedirCartaBtn)
        pedirCartaBtn.addEventListener("click", handlePedirCarta);
    if (mePlantoBtn)
        mePlantoBtn.addEventListener("click", handleMePlanto);
    if (nuevaPartidaBtn)
        nuevaPartidaBtn.addEventListener("click", iniciarNuevaPartida);
    muestraPuntuacion();
});

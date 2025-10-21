"use strict";
exports.__esModule = true;
exports.sumarPuntuacion = exports.mostrarCarta = exports.obtenerUrlCarta = exports.dameCarta = exports.muestraPuntuacion = exports.puntuacionElement = exports.puntuacion = void 0;
// -- MODELO DE DATOS --
exports.puntuacion = 0;
// -- ELEMENTOS DEL DOM (usamos const porque no cambiarán) --
exports.puntuacionElement = document.getElementById("puntuacion");
var cartaImgElement = document.getElementById("carta-img");
var mensajeJuegoElement = document.getElementById("mensaje-juego");
var pedirCartaBtn = document.getElementById("pedir-carta");
var mePlantoBtn = document.getElementById("me-planto");
var nuevaPartidaBtn = document.getElementById("nueva-partida");
// -- FUNCIONES --
var muestraPuntuacion = function () {
    if (exports.puntuacionElement) {
        // Usamos toFixed(1) para mostrar siempre un decimal (ej: 5.0, 6.5)
        exports.puntuacionElement.textContent = exports.puntuacion.toFixed(1);
    }
};
exports.muestraPuntuacion = muestraPuntuacion;
var dameCarta = function () {
    var numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    return numeroAleatorio > 7 ? numeroAleatorio + 2 : numeroAleatorio;
};
exports.dameCarta = dameCarta;
var obtenerUrlCarta = function (carta) {
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
};
exports.obtenerUrlCarta = obtenerUrlCarta;
var mostrarCarta = function (url) {
    if (cartaImgElement) {
        cartaImgElement.src = url;
    }
};
exports.mostrarCarta = mostrarCarta;
var sumarPuntuacion = function (carta) {
    var valor = carta >= 10 ? 0.5 : carta;
    exports.puntuacion += valor;
    (0, exports.muestraPuntuacion)();
};
exports.sumarPuntuacion = sumarPuntuacion;
var deshabilitarBotones = function () {
    if (pedirCartaBtn && mePlantoBtn && nuevaPartidaBtn) {
        pedirCartaBtn.disabled = true;
        mePlantoBtn.disabled = true;
        nuevaPartidaBtn.classList.remove("hidden");
    }
};
var comprobarGameOver = function () {
    if (exports.puntuacion > 7.5) {
        if (mensajeJuegoElement) {
            mensajeJuegoElement.textContent = "¡GAME OVER! Te has pasado de 7.5";
        }
        deshabilitarBotones();
    }
};
var gestionarMensajeFinal = function () {
    var mensaje = "";
    // ✅ CORRECCIÓN LÓGICA: Usamos "< 5" para incluir 4 y 4.5
    if (exports.puntuacion < 5) {
        mensaje = "Has sido muy conservador 🤔";
    }
    else if (exports.puntuacion === 5) {
        mensaje = "¿Te ha entrado el canguelo, eh? 😨";
    }
    else if (exports.puntuacion < 7.5) { // Simplificado para cualquier puntuación entre 5 (excl.) y 7.5 (excl.)
        mensaje = "Buen juego, te has plantado con una buena mano 👍";
    }
    else if (exports.puntuacion === 7.5) {
        mensaje = "¡Perfecto! Has conseguido 7.5 🎯";
    }
    else {
        mensaje = "¡GAME OVER! Te has pasado de 7.5";
    }
    if (mensajeJuegoElement) {
        mensajeJuegoElement.textContent = mensaje;
    }
};
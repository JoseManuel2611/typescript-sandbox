// -- MODELO DE DATOS --
export let puntuacion: number = 0;

// -- ELEMENTOS DEL DOM (usamos const porque no cambiarán) --
export const puntuacionElement = document.getElementById("puntuacion");
const cartaImgElement = document.getElementById("carta-img") as HTMLImageElement;
const mensajeJuegoElement = document.getElementById("mensaje-juego");
const pedirCartaBtn = document.getElementById("pedir-carta") as HTMLButtonElement;
const mePlantoBtn = document.getElementById("me-planto") as HTMLButtonElement;
const nuevaPartidaBtn = document.getElementById("nueva-partida") as HTMLButtonElement;

// -- FUNCIONES --

export const muestraPuntuacion = (): void => {
    if (puntuacionElement) {
        // Usamos toFixed(1) para mostrar siempre un decimal (ej: 5.0, 6.5)
        puntuacionElement.textContent = puntuacion.toFixed(1);
    }
};

export const dameCarta = (): number => {
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    return numeroAleatorio > 7 ? numeroAleatorio + 2 : numeroAleatorio;
};

export const obtenerUrlCarta = (carta: number): string => {
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

export const mostrarCarta = (url: string): void => {
    if (cartaImgElement) {
        cartaImgElement.src = url;
    }
};

export const sumarPuntuacion = (carta: number): void => {
    const valor = carta >= 10 ? 0.5 : carta;
    puntuacion += valor;
    muestraPuntuacion();
};

const deshabilitarBotones = (): void => {
    if (pedirCartaBtn && mePlantoBtn && nuevaPartidaBtn) {
        pedirCartaBtn.disabled = true;
        mePlantoBtn.disabled = true;
        nuevaPartidaBtn.classList.remove("hidden");
    }
};

const comprobarGameOver = (): void => {
    if (puntuacion > 7.5) {
        if (mensajeJuegoElement) {
            mensajeJuegoElement.textContent = "¡GAME OVER! Te has pasado de 7.5";
        }
        deshabilitarBotones();
    }
};

const gestionarMensajeFinal = (): void => {
    let mensaje: string = "";

    // ✅ CORRECCIÓN LÓGICA: Usamos "< 5" para incluir 4 y 4.5
    if (puntuacion < 5) {
        mensaje = "Has sido muy conservador 🤔";
    } else if (puntuacion === 5) {
        mensaje = "¿Te ha entrado el canguelo, eh? 😨";
    } else if (puntuacion < 7.5) { // Simplificado para cualquier puntuación entre 5 (excl.) y 7.5 (excl.)
        mensaje = "Buen juego, te has plantado con una buena mano 👍";
    } else if (puntuacion === 7.5) {
        mensaje = "¡Perfecto! Has conseguido 7.5 🎯";
    } else {
        mensaje = "¡GAME OVER! Te has pasado de 7.5";
    }

    if (mensajeJuegoElement) {
        mensajeJuegoElement.textContent = mensaje;
    }
};
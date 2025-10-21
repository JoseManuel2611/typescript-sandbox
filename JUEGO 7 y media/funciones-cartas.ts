let puntuacion: number = 0;

let puntuacionElement: HTMLElement | null = null;
let cartaImgElement: HTMLImageElement | null = null;
let mensajeJuegoElement: HTMLElement | null = null;
let pedirCartaBtn: HTMLButtonElement | null = null;
let mePlantoBtn: HTMLButtonElement | null = null;
let nuevaPartidaBtn: HTMLButtonElement | null = null;

function muestraPuntuacion(): void {
  if (puntuacionElement) {
    puntuacionElement.textContent = puntuacion.toFixed(1);
  }
}

function dameCarta(): number {
  const numeroAleatorio: number = Math.floor(Math.random() * 10) + 1;
  return numeroAleatorio > 7 ? numeroAleatorio + 2 : numeroAleatorio;
}

function obtenerUrlCarta(carta: number): string {
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

function mostrarCarta(url: string): void {
  if (cartaImgElement) {
    cartaImgElement.src = url;
  }
}

function sumarPuntuacion(carta: number): void {
  const valor: number = carta >= 10 ? 0.5 : carta;
  puntuacion += valor;
  muestraPuntuacion();
}

function deshabilitarBotones(): void {
  if (pedirCartaBtn) pedirCartaBtn.disabled = true;
  if (mePlantoBtn) mePlantoBtn.disabled = true;
  if (nuevaPartidaBtn) nuevaPartidaBtn.classList.remove("hidden");
}

function comprobarGameOver(): void {
  if (puntuacion > 7.5) {
    if (mensajeJuegoElement) {
      mensajeJuegoElement.textContent = "¡GAME OVER! Te has pasado de 7.5";
    }
    deshabilitarBotones();
  }
}

function gestionarMensajeFinal(): void {
  let mensaje: string = "";
  if (puntuacion <= 4) {
    mensaje = "Has sido muy conservador 🤔";
  } else if (puntuacion === 5) {
    mensaje = "¿Te ha entrado el canguelo, eh? 😨";
  } else if (puntuacion < 7.5) {
    mensaje = "Casi, casi... ¡Buena partida! 😉";
  } else if (puntuacion === 7.5) {
    mensaje = "¡LO HAS CLAVADO! ¡Enhorabuena! 🥳🎉";
  }
  if (mensajeJuegoElement) {
    mensajeJuegoElement.textContent = mensaje;
  }
}

function handlePedirCarta(): void {
  const carta: number = dameCarta();
  mostrarCarta(obtenerUrlCarta(carta));
  sumarPuntuacion(carta);
  comprobarGameOver();
}

function handleMePlanto(): void {
  gestionarMensajeFinal();
  deshabilitarBotones();
}

function iniciarNuevaPartida(): void {
  puntuacion = 0;
  muestraPuntuacion();
  if (mensajeJuegoElement) mensajeJuegoElement.textContent = "";
  mostrarCarta("https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg");
  if (pedirCartaBtn) pedirCartaBtn.disabled = false;
  if (mePlantoBtn) mePlantoBtn.disabled = false;
  if (nuevaPartidaBtn) nuevaPartidaBtn.classList.add("hidden");
}

document.addEventListener("DOMContentLoaded", function (): void {
  puntuacionElement = document.getElementById("puntuacion");
  cartaImgElement = document.getElementById("carta-img") as HTMLImageElement;
  mensajeJuegoElement = document.getElementById("mensaje-juego");
  pedirCartaBtn = document.getElementById("pedir-carta") as HTMLButtonElement;
  mePlantoBtn = document.getElementById("me-planto") as HTMLButtonElement;
  nuevaPartidaBtn = document.getElementById("nueva-partida") as HTMLButtonElement;

  if (pedirCartaBtn) pedirCartaBtn.addEventListener("click", handlePedirCarta);
  if (mePlantoBtn) mePlantoBtn.addEventListener("click", handleMePlanto);
  if (nuevaPartidaBtn) nuevaPartidaBtn.addEventListener("click", iniciarNuevaPartida);

  muestraPuntuacion();
});


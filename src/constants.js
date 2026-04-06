// ============================================
// constants.js — Constantes del juego Tres en Raya
// ============================================

// Marcas de cada jugador (usamos emojis para un estilo visual divertido)
export const TURNS = {
  X: '❌',
  O: '⭕',
};

// Nombres personalizados con temática dominicana 🇩🇴
export const PLAYER_NAMES = {
  [TURNS.X]: 'Jugador Quisqueya',
  [TURNS.O]: 'Jugador Taíno',
};

// Las 8 combinaciones ganadoras posibles en un tablero 3x3
// Cada sub-array contiene los índices de las casillas que forman una línea
export const WINNING_COMBOS = [
  [0, 1, 2], // fila superior
  [3, 4, 5], // fila del medio
  [6, 7, 8], // fila inferior
  [0, 3, 6], // columna izquierda
  [1, 4, 7], // columna central
  [2, 5, 8], // columna derecha
  [0, 4, 8], // diagonal principal
  [2, 4, 6], // diagonal secundaria
];

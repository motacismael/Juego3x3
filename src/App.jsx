// ============================================
// App.jsx — Componente principal del juego Tres en Raya
// ============================================
// Aquí manejamos toda la lógica del juego:
// - Estado del tablero y turnos con useState
// - Persistencia con localStorage y useEffect
// - Detección de ganador y empate
// - Reinicio del juego

import { useState, useEffect } from 'react';
import Board from './components/Board';
import { TURNS, PLAYER_NAMES, WINNING_COMBOS } from './constants';
import './index.css';

function App() {
  // ── Estado del juego ──────────────────────────────────────────
  // Inicializamos el tablero y el turno desde localStorage (si existe)
  // para que el juego persista al recargar la página.

  const [board, setBoard] = useState(() => {
    // Intentamos recuperar el tablero guardado en localStorage
    const savedBoard = window.localStorage.getItem('ttt-board');
    return savedBoard ? JSON.parse(savedBoard) : Array(9).fill(null);
  });

  const [turn, setTurn] = useState(() => {
    // Intentamos recuperar el turno guardado en localStorage
    const savedTurn = window.localStorage.getItem('ttt-turn');
    return savedTurn ?? TURNS.X; // ❌ siempre empieza si no hay dato guardado
  });

  // ── Persistencia con useEffect ────────────────────────────────
  // Cada vez que cambia el tablero o el turno, guardamos en localStorage.
  // Así, si el usuario recarga la página, el juego continúa donde se quedó.

  useEffect(() => {
    window.localStorage.setItem('ttt-board', JSON.stringify(board));
    window.localStorage.setItem('ttt-turn', turn);
  }, [board, turn]);

  // ── Lógica para detectar ganador ──────────────────────────────
  // Recorre las 8 combinaciones ganadoras.
  // Si encuentra una línea completa del mismo jugador, retorna un objeto
  // con el ganador y los índices de la línea ganadora.

  const checkWinner = (currentBoard) => {
    for (const combo of WINNING_COMBOS) {
      const [a, b, c] = combo;
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return { winner: currentBoard[a], line: combo };
      }
    }
    return null;
  };

  // ── Lógica para detectar empate ───────────────────────────────
  // El juego termina en empate si todas las casillas están llenas
  // y no hay un ganador.

  const checkDraw = (currentBoard) => {
    return currentBoard.every((cell) => cell !== null);
  };

  // ── Calcular el resultado actual ──────────────────────────────
  const result = checkWinner(board);
  const winner = result?.winner ?? null;
  const winLine = result?.line ?? null;
  const isDraw = !winner && checkDraw(board);

  // ── Manejar clic en una casilla ───────────────────────────────
  // Solo permite jugar si la casilla está vacía y no hay ganador.

  const handleSquareClick = (index) => {
    // Si ya hay ganador o la casilla está ocupada, no hacemos nada
    if (winner || board[index]) return;

    // Creamos una copia del tablero (inmutabilidad)
    const newBoard = [...board];
    newBoard[index] = turn;

    // Actualizamos el tablero y alternamos el turno
    setBoard(newBoard);
    setTurn(turn === TURNS.X ? TURNS.O : TURNS.X);
  };

  // ── Reiniciar el juego ────────────────────────────────────────
  // Limpia el tablero, reinicia el turno y borra localStorage.

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    window.localStorage.removeItem('ttt-board');
    window.localStorage.removeItem('ttt-turn');
  };

  // ── Generar mensaje de resultado con toque dominicano 🇩🇴 ────
  const getResultMessage = () => {
    if (winner) {
      const name = PLAYER_NAMES[winner];
      const messages = [
        `¡Coronaste, ${name}! 🏆🇩🇴`,
        `¡${name} se la comió! ¡Ganó el juego! 🎉`,
        `¡Wepaaa! ¡${name} es el campeón! 🔥`,
      ];
      // Seleccionamos un mensaje aleatorio para variedad
      return messages[Math.floor(Math.random() * messages.length)];
    }
    if (isDraw) {
      return '¡Se trancó el juego! Empate total 🤝🇩🇴';
    }
    return null;
  };

  // ── Renderizado ───────────────────────────────────────────────
  return (
    <div className="app">
      {/* Título del juego */}
      <header className="header">
        <h1 className="title">
          Tres en Raya <span className="flag">🇩🇴</span>
        </h1>
        <p className="subtitle">Mi Primer Juego en React</p>
      </header>

      {/* Indicador de turno */}
      <section className="turn-indicator">
        <div className={`turn-card ${turn === TURNS.X ? 'active' : ''}`}>
          <span className="turn-mark">{TURNS.X}</span>
          <span className="turn-name">{PLAYER_NAMES[TURNS.X]}</span>
        </div>
        <span className="vs-text">VS</span>
        <div className={`turn-card ${turn === TURNS.O ? 'active' : ''}`}>
          <span className="turn-mark">{TURNS.O}</span>
          <span className="turn-name">{PLAYER_NAMES[TURNS.O]}</span>
        </div>
      </section>

      {/* Tablero de juego */}
      <Board
        squares={board}
        onSquareClick={handleSquareClick}
        winLine={winLine}
      />

      {/* Mensaje de resultado (ganador o empate) */}
      {(winner || isDraw) && (
        <div className="result-banner">
          <p className="result-message">{getResultMessage()}</p>
        </div>
      )}

      {/* Botón de reiniciar */}
      <button className="reset-button" onClick={resetGame}>
        🔄 Reiniciar Juego
      </button>

      {/* Footer */}
      <footer className="footer">
        <p>Hecho con ❤️ por <strong>Carlos Ismael Mota</strong></p>
      </footer>
    </div>
  );
}

export default App;

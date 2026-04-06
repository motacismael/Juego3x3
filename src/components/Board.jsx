// ============================================
// Board.jsx — Componente del tablero 3x3
// ============================================
// Este componente renderiza la cuadrícula del juego.
// Recibe el estado de las casillas, la función para manejar clics,
// y la línea ganadora (si existe) para resaltar las casillas ganadoras.

import Square from './Square';

/**
 * @param {Object} props
 * @param {Array} props.squares - Array de 9 elementos con el estado de cada casilla
 * @param {Function} props.onSquareClick - Función que se ejecuta al hacer clic en una casilla
 * @param {Array|null} props.winLine - Array con los 3 índices de la combinación ganadora, o null
 */
function Board({ squares, onSquareClick, winLine }) {
  return (
    <div className="board">
      {squares.map((value, index) => (
        <Square
          key={index}
          index={index}
          value={value}
          onClick={() => onSquareClick(index)}
          isWinning={winLine ? winLine.includes(index) : false}
        />
      ))}
    </div>
  );
}

export default Board;

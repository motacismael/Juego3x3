// ============================================
// Square.jsx — Componente de una casilla individual
// ============================================
// Cada casilla es un botón que muestra la marca del jugador (❌ o ⭕).
// Recibe props para saber su valor, manejar el clic, y si es parte
// de la línea ganadora para aplicar un efecto visual.

/**
 * @param {Object} props
 * @param {string|null} props.value - La marca actual de la casilla ('❌', '⭕' o null)
 * @param {Function} props.onClick - Función que se ejecuta al hacer clic
 * @param {boolean} props.isWinning - Indica si esta casilla es parte de la combinación ganadora
 * @param {number} props.index - Índice de la casilla en el tablero (0-8)
 */
function Square({ value, onClick, isWinning, index }) {
  // Construimos las clases CSS dinámicamente
  const className = `square ${isWinning ? 'winning' : ''} ${value ? 'filled' : ''}`;

  return (
    <button
      className={className}
      onClick={onClick}
      aria-label={`Casilla ${index + 1}`}
    >
      {value}
    </button>
  );
}

export default Square;

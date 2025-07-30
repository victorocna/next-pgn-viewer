import { Chess } from 'chess.js';

/**
 * Computes an arrow shape based on the current FEN and a variation.
 * Returns null if the move is invalid.
 */
const getMoveArrow = (fen, variation) => {
  try {
    if (!fen || !variation || !variation.move) {
      return null;
    }
    const chess = new Chess(fen);
    const move = chess.move(variation.move, { sloppy: true });
    if (move) {
      return {
        orig: move.from,
        dest: move.to,
        brush: 'blue',
      };
    }
  } catch (error) {
    console.error('Error parsing move:', error);
  }
  return null;
};

export default getMoveArrow;

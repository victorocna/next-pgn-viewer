import { useState } from 'react';
import { local } from 'store2';
import useRerender from './use-rerender';

const useLocalPgn = () => {
  // Load the default PGN if not already set in local storage
  const defaultPgn = [
    '[FEN "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"]', //
    '[SetUp "1"]',
    '',
    '*',
  ].join('\n');
  const localPgn = local.get('pgn') || defaultPgn;

  // State to manage the PGN and a rerender function
  const [pgn, setPgn] = useState(localPgn);
  const [key, rerender] = useRerender();

  return {
    pgn,
    setPgn,
    key,
    rerender,
  };
};

export default useLocalPgn;

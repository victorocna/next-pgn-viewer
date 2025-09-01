import {
  ChessProvider,
  extractFen,
  PuzzleLayout,
  PuzzleProvider,
} from 'next-pgn-viewer';
import { Layout, PgnFileLoader } from '../components';
import { useLocalPgn } from '../hooks';

const Page = () => {
  const { pgn, setPgn, key, rerender } = useLocalPgn();

  return (
    <Layout
      key={key}
      title="Chess puzzles"
      button={<PgnFileLoader rerender={rerender} onPgnLoad={setPgn} />}
    >
      <ChessProvider fen={extractFen(pgn)}>
        <PuzzleProvider>
          <div className="grid md:grid-cols-2 gap-12">
            <PuzzleLayout pgn={pgn} showMoves={true} />
          </div>
        </PuzzleProvider>
      </ChessProvider>
    </Layout>
  );
};

export default Page;

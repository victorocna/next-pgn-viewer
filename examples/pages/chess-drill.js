import {
  ChessProvider,
  DrillLayout,
  DrillProvider,
  extractFen,
} from 'next-pgn-viewer';
import { DrillMode, Layout, PgnFileLoader } from '../components';
import { useLocalPgn } from '../hooks';

const Page = () => {
  const { pgn, setPgn, key, rerender } = useLocalPgn();

  return (
    <Layout
      key={key}
      title="Chess drills"
      button={<PgnFileLoader rerender={rerender} onPgnLoad={setPgn} />}
    >
      <ChessProvider fen={extractFen(pgn)}>
        <DrillProvider mode="arrows">
          <div className="grid md:grid-cols-2 gap-12">
            <DrillLayout pgn={pgn} showMoves={true} />
          </div>
          <DrillMode />
        </DrillProvider>
      </ChessProvider>
    </Layout>
  );
};

export default Page;

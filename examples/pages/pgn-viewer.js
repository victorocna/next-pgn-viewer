import { ChessProvider, extractFen, PgnViewerLayout } from 'next-pgn-viewer';
import { Layout, PgnFileLoader } from '../components';
import { useLocalPgn } from '../hooks';

const Page = () => {
  const { pgn, setPgn, key, rerender } = useLocalPgn();

  return (
    <Layout
      key={key}
      title="Chess PGN viewer"
      button={<PgnFileLoader rerender={rerender} onPgnLoad={setPgn} />}
    >
      <ChessProvider fen={extractFen(pgn)}>
        <div className="grid md:grid-cols-2 gap-12">
          <PgnViewerLayout pgn={pgn} />
        </div>
      </ChessProvider>
    </Layout>
  );
};

export default Page;

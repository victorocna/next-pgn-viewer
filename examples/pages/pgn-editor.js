import { Layout, PgnFileLoader } from '../components';
import { useLocalPgn } from '../hooks';

const Page = () => {
  const { setPgn, key, rerender } = useLocalPgn();

  return (
    <Layout
      key={key}
      title="Chess PGN editor"
      button={<PgnFileLoader rerender={rerender} onPgnLoad={setPgn} />}
    >
      <h2>Coming soon</h2>
    </Layout>
  );
};

export default Page;

import { NextChessground } from 'next-chessground';
import { Layout } from '../components';

const Page = () => {
  return (
    <Layout title="Basic example">
      <div className="grid md:grid-cols-2 gap-12">
        <NextChessground />
      </div>
    </Layout>
  );
};

export default Page;

import { useRouter } from 'next/router';
import type { FC } from 'react';

const Restaurant: FC = () => {
  const { query } = useRouter();
  return <div>hello {query.id}</div>;
};

export default Restaurant;

import { useRouter } from 'next/router';
import { FC } from 'react';
import { CategoryList } from '../../../components/CategoryList';

const Category: FC = () => {
  const { query, push, isReady } = useRouter();
  console.log({ query });

  if (!isReady) {
    return null;
  }

  if (typeof query.category !== 'string') {
    if (typeof window !== 'undefined') {
      push(`/city/${query.city}`);
    }
    return null;
  }

  return <CategoryList category={query.category} />;
};

export default Category;

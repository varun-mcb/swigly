import { useRouter } from 'next/router';
import type { FC } from 'react';

import { CategoryList } from '../../../components/CategoryList';
import { categorySchema } from '../../../schemas/category';
import { execIfBrowser } from '../../../utils/browserUtils';

const Category: FC = () => {
  const { query, push, isReady } = useRouter();

  if (!isReady) {
    return null;
  }

  if (typeof query.city !== 'string') {
    execIfBrowser(() => {
      push(`/`);
    });

    return null;
  }

  const result = categorySchema.safeParse(query.category);
  if (!result.success) {
    execIfBrowser(() => {
      push(`/city/${query.city}`);
    });
    return null;
  }

  return <CategoryList city={query.city} category={result.data} />;
};

export default Category;

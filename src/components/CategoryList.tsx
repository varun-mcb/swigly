import { CircularProgress, Typography } from '@mui/material';
import type { FC } from 'react';

import type { CategoryType } from '../schemas/category';
import { trpc } from '../utils/trpc';

const categoryText: Record<CategoryType, string> = {
  biryani: 'Best Biryani',
  'north-indian': 'Best North Indian',
  'south-indian': 'Best South Indian',
  'top-rated': 'Top Rated',
} as const;

type Props = { category: CategoryType; city: string };

export const CategoryList: FC<Props> = (props) => {
  const { isLoading, isError, data } = trpc.useQuery([
    'restaurants.all',
    { category: props.category },
  ]);
  if (isLoading) {
    return <CircularProgress />;
  }
  if (isError) {
    return <div>Something went wrong...</div>;
  }
  return (
    <div>
      <div className="p-30" style={{ backgroundColor: '#494d60' }}>
        <Typography variant="h5" color="white">
          {categoryText[props.category]} restaurants in{' '}
          <span className="capitalize">{props.city}</span>
        </Typography>
      </div>
      Bread
    </div>
  );
};

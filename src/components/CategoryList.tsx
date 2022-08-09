import { CircularProgress } from '@mui/material';
import { FC } from 'react';
import { trpc } from '../utils/trpc';

type Props = { category: string };

export const CategoryList: FC<Props> = ({ category }) => {
  const { isLoading, isError, data } = trpc.useQuery([
    'restaurants.all',
    { category: category as any },
  ]);
  if (isLoading) {
    return <CircularProgress />;
  }
  if (isError) {
    return <div>Something went wrong...</div>;
  }
  return <div>{JSON.stringify(data)}</div>;
};

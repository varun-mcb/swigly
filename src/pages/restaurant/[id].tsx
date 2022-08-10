import { Skeleton, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import { RestaurantDetails } from '../../components/RestaurantDetails';
import { trpc } from '../../utils/trpc';

const RestaurantPage: FC = () => {
  const { query } = useRouter();

  const { isLoading, isError, data } = trpc.useQuery([
    'menus.all',
    { restaurantId: query.id as string },
  ]);

  if (isLoading) {
    return <Skeleton variant="rounded" width={400} height={300} />;
  }

  if (isError || !data) {
    return <Typography>Something went wrong</Typography>;
  }

  return <RestaurantDetails menu={data} />;
};

export default RestaurantPage;

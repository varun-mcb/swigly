import { Typography } from '@mui/material';
import { useRouter } from 'next/router';
import type { FC } from 'react';

import { Loading } from '../../../../components/Loading';
import { RestaurantDetails } from '../../../../components/RestaurantDetails/RestaurantDetails';
import { trpc } from '../../../../utils/trpc';

const RestaurantPage: FC = () => {
  const { query } = useRouter();

  const { isLoading, isError, data } = trpc.useQuery([
    'restaurants.byId',
    { restaurantId: query.id as string },
  ]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError || !data) {
    return <Typography>Something went wrong</Typography>;
  }

  return (
    <RestaurantDetails city={query.city as string} restaurantMenu={data} />
  );
};

export default RestaurantPage;

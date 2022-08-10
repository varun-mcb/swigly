import { Typography } from '@mui/material';
import type { FC } from 'react';
import { trpc } from '../../utils/trpc';
import { Loading } from '../Loading';
import { CartDetails } from './CartDetails';

type Props = {
  restaurantId: string;
  menuItems: Record<string, number>;
  city: string;
};

export const Cart: FC<Props> = (props) => {
  const { isLoading, isError, data } = trpc.useQuery([
    'restaurants.byId',
    { restaurantId: props.restaurantId },
  ]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError || !data) {
    return <Typography>No cart data available right now</Typography>;
  }

  return (
    <CartDetails
      city={props.city}
      restaurantMenu={data}
      restaurantId={props.restaurantId}
    />
  );
};

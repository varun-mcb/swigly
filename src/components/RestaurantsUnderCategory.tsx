import { Breadcrumbs, Grid, Link, Skeleton, Typography } from '@mui/material';
import type { FC } from 'react';

import type { CategoryType } from '../schemas/categorySchemas';
import { trpc } from '../utils/trpc';
import { RestaurantCard } from './RestaurantCard';

const categoryText: Record<CategoryType, string> = {
  biryani: 'Best Biryani',
  'north-indian': 'Best North Indian',
  'south-indian': 'Best South Indian',
  'top-rated': 'Top Rated',
} as const;

type Props = { category: CategoryType; city: string };

export const RestaurantsUnderCategory: FC<Props> = (props) => {
  const { isLoading, isError, data } = trpc.useQuery([
    'restaurants.all',
    { category: props.category },
  ]);
  if (isLoading) {
    return <Skeleton variant="rounded" width={400} height={300} />;
  }
  if (isError) {
    return <div>Something went wrong...</div>;
  }
  if (!data || data?.length === 0) {
    return <Typography>No restaurants available right now</Typography>;
  }
  return (
    <div>
      <div className="p-30" style={{ backgroundColor: '#494d60' }}>
        <Typography variant="h5" color="white">
          {categoryText[props.category]} restaurants in{' '}
          <span className="capitalize">{props.city}</span>
        </Typography>
      </div>
      <div style={{ padding: '10px 30px', backgroundColor: '#f7f7f7' }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            className="capitalize"
            color="inherit"
            href="/"
          >
            Home
          </Link>
          <Link
            underline="hover"
            className="capitalize"
            color="inherit"
            href={`/city/${props.city}`}
          >
            {props.city}
          </Link>
          <Typography className="capitalize" color="text.primary">
            {props.category}
          </Typography>
        </Breadcrumbs>
      </div>
      <Grid className="p-30" container spacing={4}>
        {data.map((restaurant) => (
          <Grid item key={restaurant.data.data.uuid}>
            <RestaurantCard restaurant={restaurant} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

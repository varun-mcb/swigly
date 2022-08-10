import { Rating, Skeleton, Typography } from '@mui/material';
import Image from 'next/image';
import type { FC } from 'react';
import type { RestaurantMenu } from '../../schemas/restaurantMenuSchemas';
import { getCloudinaryUrl } from '../../utils/cloudinaryUrl';

type Props = {
  restaurantMenu: RestaurantMenu;
};

export const Header: FC<Props> = (props) => {
  const restaurant = props.restaurantMenu.data;

  return (
    <div
      className="flex p-30"
      style={{
        backgroundColor: '#171a29',
      }}
    >
      {restaurant.cloudinaryImageId ? (
        <Image
          layout="fixed"
          width={300}
          height={200}
          src={getCloudinaryUrl(restaurant.cloudinaryImageId)}
          alt={restaurant.name}
        />
      ) : (
        <Skeleton
          variant="rounded"
          width={300}
          height={200}
          animation={false}
        />
      )}
      <div style={{ marginRight: 30 }}></div>
      <div>
        <Typography color="white" variant="h5" className="mb-10">
          {restaurant.name}
        </Typography>
        <Typography color="white" className="mb-10">
          {restaurant.cuisines.join(', ')}
        </Typography>
        <Typography color="white" className="mb-10">
          {restaurant.locality}, {restaurant.area}, {restaurant.city}
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <Rating value={restaurant.avgRating} precision={0.2} readOnly />
            <Typography component="div" color="white" variant="caption">
              From {restaurant.totalRatings} ratings
            </Typography>
          </div>
          <Typography color="white">{restaurant.costForTwoMsg}</Typography>
        </div>
      </div>
    </div>
  );
};

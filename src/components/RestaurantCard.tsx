import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Rating,
  Tooltip,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import type { FC } from 'react';

import type { Restaurant } from '../server/constants/restaurantsData';

type Props = {
  restaurant: Restaurant;
};

export const RestaurantCard: FC<Props> = (props) => {
  const restaurant = props.restaurant.data.data;
  const cuisines = restaurant.cuisines.join(', ');
  return (
    <Card sx={{ width: 280, cursor: 'pointer' }}>
      <Link href={`/restaurant/${restaurant.id}`}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${props.restaurant.data.data.cloudinaryImageId}`}
            alt={restaurant.name}
          />
          <CardContent>
            <Tooltip title={restaurant.name}>
              <Typography gutterBottom variant="h6" component="div" noWrap>
                {restaurant.name}
              </Typography>
            </Tooltip>
            <Tooltip title={cuisines}>
              <Typography
                component="div"
                variant="caption"
                className="capitalize v-spacer-10"
                noWrap
              >
                {cuisines}
              </Typography>
            </Tooltip>
            <div className="flex align-items-center justify-content-space-between">
              <Rating
                size="small"
                value={Number(restaurant.avgRating)}
                precision={0.2}
                readOnly
              />
              <Typography variant="caption" color="text.secondary">
                {restaurant.costForTwoString}
              </Typography>
            </div>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

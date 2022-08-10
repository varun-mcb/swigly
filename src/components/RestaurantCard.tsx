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
import { getCloudinaryUrl } from '../utils/cloudinaryUrl';

type Props = {
  restaurant: Restaurant;
  city: string;
};

export const RestaurantCard: FC<Props> = (props) => {
  const restaurant = props.restaurant.data.data;
  const cuisines = restaurant.cuisines.join(', ');
  return (
    <Card sx={{ width: 280, cursor: 'pointer' }}>
      <Link href={`/city/${props.city}/restaurant/${restaurant.id}`}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={getCloudinaryUrl(
              props.restaurant.data.data.cloudinaryImageId,
            )}
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

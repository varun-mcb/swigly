import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Tooltip,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import type { FC } from 'react';

import type { Restaurant } from '../server/constants/restaurants';

type Props = {
  restaurant: Restaurant;
};

export const RestaurantCard: FC<Props> = (props) => {
  const cuisines = props.restaurant.data.data.cuisines.join(', ');
  return (
    <Card sx={{ width: 280, cursor: 'pointer' }}>
      <Link href={'/'}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${props.restaurant.data.data.cloudinaryImageId}`}
            alt={props.restaurant.data.data.name}
          />
          <CardContent>
            <Tooltip title={props.restaurant.data.data.name}>
              <Typography gutterBottom variant="h6" component="div" noWrap>
                {props.restaurant.data.data.name}
              </Typography>
            </Tooltip>
            <Tooltip title={cuisines}>
              <Typography
                component="div"
                variant="caption"
                className="capitalize"
                noWrap
              >
                {cuisines}
              </Typography>
            </Tooltip>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

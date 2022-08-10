import { Button, Skeleton, Typography } from '@mui/material';
import Image from 'next/image';
import type { FC } from 'react';
import type { RestaurantMenuItem } from '../../schemas/restaurantMenuSchemas';
import { getCloudinaryUrl } from '../../utils/cloudinaryUrl';
import { NonVegIcon } from '../icons/nonVegIcon';
import { VegIcon } from '../icons/vegIcon';

type Props = {
  item: RestaurantMenuItem;
};

export const MenuItem: FC<Props> = (props) => {
  const { item } = props;
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        paddingBottom: 20,
        marginTop: 30,
        borderBottom: '.5px solid #d4d5d9',
      }}
    >
      <div style={{ paddingRight: 20 }}>
        {item.isVeg ? (
          <VegIcon style={{ height: 24 }} />
        ) : (
          <NonVegIcon style={{ height: 24 }} />
        )}
        <div className="mb-10"></div>
        <Typography>{item.name}</Typography>
        <div className="mb-10"></div>
        <Typography>&#8377;{item.price / 100}</Typography>
        <div className="mb-10"></div>
        <Typography variant="caption" color="text.secondary">
          {item.description}
        </Typography>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {item.cloudinaryImageId ? (
          <Image
            layout="fixed"
            width={150}
            height={120}
            src={getCloudinaryUrl(item.cloudinaryImageId)}
            alt={item.name}
          />
        ) : (
          <Skeleton
            variant="rounded"
            width={150}
            height={120}
            animation={false}
          />
        )}
        <div className="mb-10"></div>
        <Button variant="contained" color="success">
          Add
        </Button>
      </div>
    </div>
  );
};

import { Add, Remove } from '@mui/icons-material';
import { Button, IconButton, Paper, Skeleton, Typography } from '@mui/material';
import Image from 'next/image';
import type { FC } from 'react';

import type { RestaurantMenuItem } from '../../schemas/restaurantMenuSchemas';
import { useCartStore } from '../../store/cartStore';
import { getCloudinaryUrl } from '../../utils/cloudinaryUrl';
import { NonVegIcon } from '../icons/nonVegIcon';
import { VegIcon } from '../icons/vegIcon';

type Props = {
  restaurantId: string;
  item: RestaurantMenuItem;
};

export const MenuItem: FC<Props> = (props) => {
  const { item, restaurantId } = props;
  const { appendItem, removeItem, menuItems } = useCartStore();

  const handleAdd = () => {
    appendItem({
      restaurantId,
      menuItemId: item.id,
    });
  };

  const handleRemove = () => {
    removeItem({
      restaurantId,
      menuItemId: item.id,
    });
  };

  const addedItemsCount = menuItems[item.id] ?? 0;

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
        <div className="mb-10" />
        {addedItemsCount > 0 ? (
          <Paper
            elevation={1}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <IconButton onClick={handleRemove}>
              <Remove />
            </IconButton>
            <Typography style={{ marginLeft: 5, marginRight: 5 }}>
              {addedItemsCount}
            </Typography>
            <IconButton onClick={handleAdd}>
              <Add />
            </IconButton>
          </Paper>
        ) : (
          <Button variant="contained" color="success" onClick={handleAdd}>
            Add
          </Button>
        )}
      </div>
    </div>
  );
};

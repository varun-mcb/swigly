import { Add, Remove } from '@mui/icons-material';
import { Divider, IconButton, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import type { RestaurantMenu } from '../../schemas/restaurantMenuSchemas';
import { useCartStore } from '../../store/cartStore';
import { getCloudinaryUrl } from '../../utils/cloudinaryUrl';
import { NonVegIcon } from '../icons/nonVegIcon';
import { VegIcon } from '../icons/vegIcon';

type Props = {
  restaurantMenu: RestaurantMenu;
  city: string;
  restaurantId: string;
};

export const CartDetails: FC<Props> = (props) => {
  const { cloudinaryImageId, name, id, area } = props.restaurantMenu.data;
  const { push } = useRouter();
  const { appendItem, removeItem, menuItems } = useCartStore();

  const menu = props.restaurantMenu.data.menu.items;

  const totalToPay = Object.entries(menuItems)
    .map(([k, v]) => {
      const item = menu[k];
      if (!item) return 0;
      return ((item?.price ?? 0) * v) / 100;
    })
    .reduce((prev, current) => prev + current, 0);

  const handleAdd = (itemId: number) => {
    appendItem({
      restaurantId: props.restaurantId,
      menuItemId: itemId,
      city: props.city,
    });
  };

  const handleRemove = (itemId: number) => {
    removeItem({
      restaurantId: props.restaurantId,
      menuItemId: itemId,
      city: props.city,
    });
  };
  return (
    <Paper style={{ margin: 'auto', width: 500, marginTop: 30, padding: 30 }}>
      <div
        style={{ display: 'flex', cursor: 'pointer', marginBottom: 10 }}
        onClick={() => {
          push(`/city/${props.city}/restaurant/${id}`);
        }}
      >
        {cloudinaryImageId && (
          <Image
            src={getCloudinaryUrl(cloudinaryImageId)}
            alt={name}
            height={100}
            width={100}
          />
        )}
        <div style={{ marginLeft: 30 }}>
          <Typography className="mb-20">{name}</Typography>
          <Typography className="mb-20">{area}</Typography>
        </div>
      </div>
      <Divider className="mb-20" />
      {Object.entries(menuItems).map(([itemId, count]) => {
        const menuItem = menu[itemId];

        if (!menuItem || !count) return null;

        return (
          <div className="flex mb-20" key={itemId}>
            {menuItem.isVeg ? (
              <VegIcon style={{ height: 24 }} />
            ) : (
              <NonVegIcon style={{ height: 24 }} />
            )}
            <div style={{ marginRight: 10 }}></div>
            {menuItem.name}
            <div className="flex1"></div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}
            >
              <Paper
                elevation={1}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <IconButton onClick={() => handleRemove(menuItem.id)}>
                  <Remove />
                </IconButton>
                <Typography style={{ marginLeft: 5, marginRight: 5 }}>
                  {count}
                </Typography>
                <IconButton onClick={() => handleAdd(menuItem.id)}>
                  <Add />
                </IconButton>
              </Paper>
              <div style={{ width: 50, textAlign: 'end' }}>
                &#8377; {(menuItem.price / 100) * (menuItems[itemId] ?? 1)}
              </div>
            </div>
          </div>
        );
      })}
      <div className="flex" style={{ justifyContent: 'space-between' }}>
        <Typography>To Pay:</Typography>
        <Typography>&#8377; {totalToPay}</Typography>
      </div>
    </Paper>
  );
};

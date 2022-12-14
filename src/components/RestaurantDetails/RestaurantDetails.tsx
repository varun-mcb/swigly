import { Breadcrumbs, Link, Typography } from '@mui/material';
import type { FC } from 'react';

import type { RestaurantMenu } from '../../schemas/restaurantMenuSchemas';
import { CartLink } from '../CartLink';
import { Header } from './Header';
import { MenuItem } from './MenuItem';

type Props = {
  restaurantMenu: RestaurantMenu;
  city: string;
};

export const RestaurantDetails: FC<Props> = (props) => {
  const restaurant = props.restaurantMenu.data;
  const menu = restaurant.menu;

  const breadcrumbs = (
    <div style={{ padding: '10px 30px', backgroundColor: '#f7f7f7' }}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" className="capitalize" color="inherit" href="/">
          Home
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href={`/city/${props.city}`}
          className="capitalize"
        >
          {props.city}
        </Link>
        <Typography className="capitalize" color="text.primary">
          {restaurant.name}
        </Typography>
      </Breadcrumbs>
    </div>
  );

  return (
    <div>
      {breadcrumbs}
      <Header restaurantMenu={props.restaurantMenu} />
      <div className="flex" style={{ maxWidth: 800, margin: 'auto' }}>
        <div>
          {Object.values(menu.items).map((item) => (
            <MenuItem
              city={props.city}
              key={item.id}
              restaurantId={restaurant.id}
              item={item}
            />
          ))}
        </div>
        <div
          style={{
            position: 'sticky',
            alignSelf: 'flex-start',
            top: 30,
            marginLeft: 20,
            marginTop: 30,
          }}
        >
          <CartLink />
        </div>
      </div>
    </div>
  );
};

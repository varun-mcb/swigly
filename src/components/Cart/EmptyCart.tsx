import { Typography } from '@mui/material';
import Image from 'next/image';
import type { FC } from 'react';
import { CitySelector } from '../CitySelector';

export const EmptyCart: FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        maxWidth: 800,
        margin: 'auto',
        paddingTop: 40,
      }}
    >
      <Image
        src="/food-preparing.webp"
        alt="food-preparing"
        height={300}
        width={300}
      />
      <div style={{ marginLeft: 40, padding: '150px 100px' }}>
        <Typography className="mb-20" component="div">
          There are no items in your cart.
        </Typography>
        <Typography className="mb-20" component="div">
          Search more and find your food.
        </Typography>
        <CitySelector />
      </div>
    </div>
  );
};

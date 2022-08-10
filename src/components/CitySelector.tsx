import { Button, Menu, MenuItem } from '@mui/material';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import { useState } from 'react';

export const CitySelector: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const router = useRouter();

  function handleCityClick(city: string) {
    router.push('/city/' + city);
  }

  return (
    <>
      <Button
        variant="contained"
        size="large"
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        Select City
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem onClick={() => handleCityClick('bangalore')}>
          Bangalore
        </MenuItem>
        <MenuItem onClick={() => handleCityClick('delhi')}>Delhi</MenuItem>
        <MenuItem onClick={() => handleCityClick('chennai')}>Chennai</MenuItem>
        <MenuItem onClick={() => handleCityClick('mumbai')}>Mumbai</MenuItem>
      </Menu>
    </>
  );
};

import { ShoppingCart } from '@mui/icons-material';
import { Badge, Button } from '@mui/material';
import Link from 'next/link';
import type { FC } from 'react';
import { useEffect, useState } from 'react';

import { useCartStore } from '../store/cartStore';

export const CartLink: FC = () => {
  const { menuItems } = useCartStore();
  const cartLength = Object.values(menuItems).filter(Boolean).length;
  const [isSSR, setIsSSR] = useState(false);

  useEffect(() => {
    setIsSSR(true);
  }, []);

  return (
    <Link href="/cart">
      <Button color="inherit">
        <span style={{ marginRight: 10 }}>Cart</span>
        <Badge
          badgeContent={isSSR && cartLength > 0 ? cartLength : null}
          color="secondary"
        >
          <ShoppingCart fontSize="small" style={{ marginRight: 10 }} />
        </Badge>
      </Button>
    </Link>
  );
};

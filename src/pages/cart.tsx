import type { FC } from 'react';
import { Cart } from '../components/Cart/Cart';
import { EmptyCart } from '../components/Cart/EmptyCart';
import { useCartStore } from '../store/cartStore';

const CartPage: FC = () => {
  const { menuItems } = useCartStore();
  const items = Object.values(menuItems).filter(Boolean).length;
  if (!items) {
    return <EmptyCart />;
  }
  return <Cart />;
};

export default CartPage;

import type { FC } from 'react';
import { Cart } from '../components/Cart/Cart';
import { EmptyCart } from '../components/Cart/EmptyCart';
import { useCartStore } from '../store/cartStore';

const CartPage: FC = () => {
  const { menuItems, restaurantId, city } = useCartStore();
  const items = Object.values(menuItems).filter(Boolean).length;

  if (!items || !restaurantId || !city) {
    return <EmptyCart />;
  }

  return <Cart city={city} menuItems={menuItems} restaurantId={restaurantId} />;
};

export default CartPage;

import create from 'zustand';

import { execIfBrowser } from '../utils/browserUtils';

type MenuItemPayload = {
  restaurantId: string;
  menuItemId: number;
  city: string;
};

type CartState = {
  restaurantId?: string;
  menuItems: Record<string, number>;
  city?: string;
  appendItem: (payload: MenuItemPayload) => void;
  removeItem: (payload: MenuItemPayload) => void;
};

type CartStateValues = Omit<CartState, 'appendItem' | 'removeItem'>;

function persist(state: CartStateValues) {
  localStorage.setItem('cart', JSON.stringify(state));
}

export const useCartStore = create<CartState>((set) => {
  let stateFromStorage: CartStateValues = {
    menuItems: {},
  };

  execIfBrowser(() => {
    const stateStr = localStorage.getItem('cart');
    if (stateStr) {
      try {
        stateFromStorage = JSON.parse(stateStr);
      } catch (error) {
        console.log('no cart data in local-storage');
      }
    }
  });

  return {
    restaurantId: stateFromStorage.restaurantId,
    menuItems: stateFromStorage.menuItems,
    city: stateFromStorage.city,
    appendItem: (payload: MenuItemPayload) => {
      return set((state) => {
        if (state.restaurantId !== payload.restaurantId) {
          const state: CartStateValues = {
            restaurantId: payload.restaurantId,
            menuItems: {
              [payload.menuItemId]: 1,
            },
            city: payload.city,
          };
          persist(state);
          return state;
        }

        const menuItems = { ...state.menuItems };

        if (menuItems[payload.menuItemId]) {
          menuItems[payload.menuItemId]++;
        } else {
          menuItems[payload.menuItemId] = 1;
        }

        persist({
          restaurantId: payload.restaurantId,
          menuItems,
          city: payload.city,
        });

        return {
          menuItems,
        };
      });
    },
    removeItem: (payload: MenuItemPayload) => {
      return set((state) => {
        if (state.restaurantId !== payload.restaurantId) {
          return {};
        }
        const menuItems = { ...state.menuItems };
        if (menuItems[payload.menuItemId]) {
          menuItems[payload.menuItemId]--;
        }
        persist({ restaurantId: payload.restaurantId, menuItems });
        return {
          menuItems,
        };
      });
    },
  };
});

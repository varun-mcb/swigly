import { useRouter } from 'next/router';
import type { FC } from 'react';

import { execIfBrowser } from '../../utils/browserUtils';

const EmptyRestaurantId: FC = () => {
  const router = useRouter();
  execIfBrowser(() => {
    router.push('/');
  });
  return null;
};

export default EmptyRestaurantId;

import { useRouter } from 'next/router';
import type { FC } from 'react';

import { execIfBrowser } from '../../../../utils/browserUtils';

const FallbackRestaurantPage: FC = () => {
  const router = useRouter();
  execIfBrowser(() => {
    if (router.query.city) {
      router.push(`/city/${router.query.city}`);
    }
  });
  return null;
};

export default FallbackRestaurantPage;

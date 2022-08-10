import Router from 'next/router';
import type { FC } from 'react';

const FallbackCityPage: FC = () => {
  if (typeof window !== 'undefined') {
    Router.push('/');
  }
  return null;
};

export default FallbackCityPage;

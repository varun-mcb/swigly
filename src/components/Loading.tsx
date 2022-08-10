import { CircularProgress } from '@mui/material';
import type { FC } from 'react';

export const Loading: FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: 500,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CircularProgress />
    </div>
  );
};

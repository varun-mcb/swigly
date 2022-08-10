import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import type { FC } from 'react';

type Props = {
  imageUrl: string;
  title: string;
  href: string;
};

export const CategoryCard: FC<Props> = (props) => {
  const router = useRouter();
  return (
    <Card
      sx={{ width: 300, cursor: 'pointer' }}
      onClick={() => router.push(props.href)}
    >
      <CardMedia
        component="img"
        height="140"
        image={props.imageUrl}
        alt={props.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
      </CardContent>
    </Card>
  );
};

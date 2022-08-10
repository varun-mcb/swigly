import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import type { FC } from 'react';

type Props = {
  imageUrl: string;
  title: string;
  href: string;
};

export const CategoryCard: FC<Props> = (props) => {
  return (
    <Card sx={{ width: 300, cursor: 'pointer' }}>
      <Link href={props.href}>
        <CardActionArea>
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
        </CardActionArea>
      </Link>
    </Card>
  );
};

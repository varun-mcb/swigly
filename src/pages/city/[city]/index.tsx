import { Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { CategoryCard } from '../../../components/CategoryCard';

const City: FC = () => {
  const { query } = useRouter();

  return (
    <div style={{ padding: 40 }}>
      <div>
        <Typography variant="h4" style={{ marginBottom: 20 }}>
          About the food culture in{' '}
          <span style={{ textTransform: 'capitalize' }}>{query.city}</span>
        </Typography>
        <Typography
          variant="body1"
          style={{ color: '#000a', marginBottom: 40 }}
        >
          Order food & beverages online from restaurants near & around you. We
          deliver food from your neighborhood local joints, your favorite cafes,
          luxurious & elite restaurants in your area. Exciting bit? We place no
          minimum order restrictions! Order in as little (or as much) as you?d
          like. We?ll Swiggy it to you!
        </Typography>

        <Typography variant="h4" style={{ marginBottom: 40 }}>
          Choose a Category
        </Typography>
        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
          <CategoryCard
            href={`/city/${query.city}/near-you`}
            imageUrl="/category-near-you.webp"
            title="Offers Near You"
          />
          <CategoryCard
            href={`/city/${query.city}/top-rated`}
            imageUrl="/category-top-rated.png"
            title="Top Rated"
          />
          <CategoryCard
            href={`/city/${query.city}/biryanis`}
            imageUrl="/category-biryani.webp"
            title="Biryanis"
          />
          <CategoryCard
            href={`/city/${query.city}/north-indian`}
            imageUrl="/category-north-indian.webp"
            title="North Indian"
          />
        </div>
      </div>
    </div>
  );
};

export default City;

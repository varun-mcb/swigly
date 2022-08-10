import { Instagram, Pinterest, Twitter } from '@mui/icons-material';
import { Typography } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import { CitySelector } from '../components/CitySelector';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Swigly</title>
      </Head>
      <div
        style={{
          backgroundImage: 'url(/food-background.png)',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          height: 'calc(100vh - 64px - 50px)',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h3" color="white">
          Search for your favorite food online
        </Typography>
        <div style={{ marginBottom: 20 }} />
        <CitySelector />
      </div>
      <footer
        style={{
          height: 50,
          backgroundColor: 'rgba(0,0,0,0.8)',
          display: 'flex',
          alignItems: 'center',
          color: 'white',
          padding: 20,
        }}
      >
        <Typography variant="h6" color="white" style={{ flex: 1 }}>
          © 2022 Swigly
        </Typography>
        <div>
          <Pinterest style={{ marginRight: 20 }} />
          <Twitter style={{ marginRight: 20 }} />
          <Instagram />
        </div>
      </footer>
    </>
  );
};

export default Home;

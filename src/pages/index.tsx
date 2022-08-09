import { Instagram, Pinterest, Twitter } from "@mui/icons-material";
import { Button, Menu, MenuItem, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

const Home: NextPage = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const router = useRouter();

  function handleCityClick(city: string) {
    router.push("/city/" + city);
  }

  return (
    <>
      <Head>
        <title>Swigly</title>
      </Head>
      <div
        style={{
          backgroundImage: "url(/food-background.png)",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          height: "calc(100vh - 64px - 50px)",
          justifyContent: "center",
        }}
      >
        <Typography variant="h3" color="white">
          Search for your favorite food online
        </Typography>
        <div style={{ marginBottom: 20 }} />
        <Button
          variant="contained"
          size="large"
          onClick={(e) => setAnchorEl(e.currentTarget)}
        >
          Select City
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
        >
          <MenuItem onClick={() => handleCityClick("bangalore")}>
            Bangalore
          </MenuItem>
          <MenuItem onClick={() => handleCityClick("delhi")}>Delhi</MenuItem>
          <MenuItem onClick={() => handleCityClick("chennai")}>
            Chennai
          </MenuItem>
          <MenuItem onClick={() => handleCityClick("mumbai")}>Mumbai</MenuItem>
        </Menu>
      </div>
      <footer
        style={{
          height: 50,
          backgroundColor: "rgba(0,0,0,0.8)",
          display: "flex",
          alignItems: "center",
          color: "white",
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

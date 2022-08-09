import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import { FC } from "react";

const City: FC = () => {
  const { query } = useRouter();

  return (
    <div style={{ padding: 40 }}>
      <div>
        <Typography variant="h4" style={{ marginBottom: 40 }}>
          About the food culture in{" "}
          <span style={{ textTransform: "capitalize" }}>{query.city}</span>
        </Typography>
        <Typography variant="body1" style={{ color: "#000a" }}>
          Order food & beverages online from restaurants near & around you. We
          deliver food from your neighborhood local joints, your favorite cafes,
          luxurious & elite restaurants in your area. Exciting bit? We place no
          minimum order restrictions! Order in as little (or as much) as you?d
          like. We?ll Swiggy it to you!
        </Typography>
      </div>
    </div>
  );
};

export default City;

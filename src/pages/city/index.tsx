import Router from "next/router";
import type { FC } from "react";

const CityPage: FC = () => {
  if (typeof window !== "undefined") {
    Router.push("/");
  }
  return null;
};

export default CityPage;

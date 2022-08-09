import Router from "next/router";
import { FC } from "react";

const CityPage: FC = () => {
  if (typeof window !== "undefined") {
    Router.push("/");
  }
  return null;
};

export default CityPage;

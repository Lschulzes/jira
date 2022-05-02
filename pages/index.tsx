import { Typography } from "@mui/material";
import type { NextPage } from "next";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Typography variant="h1" color={"primary"}>
        Hello World
      </Typography>
    </Layout>
  );
};

export default Home;

import { Box } from "@mui/material";
import Head from "next/head";
import React, { FC, ReactNode } from "react";
import NavBar from "../NavBar";
import SideBar from "../SideBar";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout: FC<Props> = ({ title = "OpenJira", children }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>
      <NavBar />
      <SideBar />
      <Box sx={{ padding: "10px 20px" }}>{children}</Box>
    </Box>
  );
};

export default Layout;

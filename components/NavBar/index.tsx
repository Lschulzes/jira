import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React, { useContext } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { UIContext } from "../../context/UI";

const NavBar = () => {
  const { toggleSideMenu } = useContext(UIContext);
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton edge="start" size="large" onClick={toggleSideMenu}>
          <MenuOutlinedIcon />
        </IconButton>
        <Typography variant="h6">OpenJira</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

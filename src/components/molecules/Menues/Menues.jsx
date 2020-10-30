import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import Menu from "@material-ui/core/Menu";
import Fade from "@material-ui/core/Fade";
import { MenuItems } from "../..";

const MenuesRaw = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItems onClick={handleClose}>Profile</MenuItems>
        <MenuItems onClick={handleClose}>My account</MenuItems>
        <MenuItems onClick={handleClose}>Logout</MenuItems>
      </Menu>
    </div>
  );
};

export const Menues = withStyles(styles)(MenuesRaw);

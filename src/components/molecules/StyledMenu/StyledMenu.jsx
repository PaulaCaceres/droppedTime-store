import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import Menu from "@material-ui/core/Menu";

class StyledMenuRaw extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Menu
        elevation={10}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        className={classes.menuStyle}
        {...this.props}
      />
    );
  }
}

export const StyledMenu = withStyles(styles)(StyledMenuRaw);

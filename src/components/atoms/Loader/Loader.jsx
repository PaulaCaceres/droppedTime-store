import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import ClipLoader from "react-spinners/ClipLoader";

class LoaderRaw extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.loader}>
        <ClipLoader
          size={150}
          color={"pink"}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export const Loader = withStyles(styles)(LoaderRaw);

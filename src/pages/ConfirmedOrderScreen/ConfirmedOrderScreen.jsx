import React from "react";
import { withStyles, Typography, Paper } from "@material-ui/core";
import { styles } from "./styles";

const ConfirmedOrderScreenRaw = (props) => {
  const { classes } = props;

  return (
    <Paper className={classes.mainContainer}>
      <Typography className={classes.text}>
        Thanks for shopping! an email was sent to your email box with the details of your purchase .</Typography>
    </Paper>
  );
}

export const ConfirmedOrderScreen = withStyles(styles)(ConfirmedOrderScreenRaw);

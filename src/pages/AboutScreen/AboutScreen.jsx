import React from "react";
import { withStyles, Typography } from "@material-ui/core";
import Logo from '../../assets/icons/favicon-dropped.svg'
import { styles } from "./styles";

const AboutScreenRaw = (props) => {
  const { classes } = props;

  return (
    <div className={classes.mainContainer}>
      <img src={Logo} className={classes.logoIcon} alt="logo-dropped-time" />

      <Typography className={classes.text}>In "Dropped-time" store we care about you and that is why we give you the best options to buy and do what you love the most, swimming. Keep practising and give your best and let us take care about quality products and best perfomances elements for you.</Typography>
    </div>
  );
}

export const AboutScreen = withStyles(styles)(AboutScreenRaw);

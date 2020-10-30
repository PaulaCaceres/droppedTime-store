import React from "react";
import { withStyles, Typography } from "@material-ui/core";
import Facebook from '../../assets/icons/icon-facebook.svg';
import Instagram from '../../assets/icons/icon-instagram.svg';
import Linkedin from '../../assets/icons/icon-linkedin.svg';
import Twitter from '../../assets/icons/icon-twitter.svg';
import { styles } from "./styles";

const ContactScreenRaw = (props) => {
  const { classes } = props;

  return (
    <div className={classes.mainContainer}>
      <Typography className={classes.text}>Please contact us at contact@dropped-time.com and let us know your concern.</Typography>

      <div className={classes.socialContainer}>
        <img src={Facebook} className={classes.socialIcon} alt="icon-social" />
        <img src={Instagram} className={classes.socialIcon} alt="icon-social" />
        <img src={Linkedin} className={classes.socialIcon} alt="icon-social" />
        <img src={Twitter} className={classes.socialIcon} alt="icon-social" />
      </div>
    </div>
  );
}

export const ContactScreen = withStyles(styles)(ContactScreenRaw);

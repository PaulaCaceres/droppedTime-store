import React from 'react'
import { withStyles, Typography } from "@material-ui/core";
import { styles } from './styles';
import Facebook from '../../../assets/icons/icon-facebook.svg';
import Instagram from '../../../assets/icons/icon-instagram.svg';
import Linkedin from '../../../assets/icons/icon-linkedin.svg';
import Twitter from '../../../assets/icons/icon-twitter.svg';
import Logo from '../../../assets/icons/favicon-dropped.svg'


const FooterRaw = (props) => {
  const { classes } = props;

  return (
    <div className={classes.mainContainer}>
      <div className={classes.socialContainer}>
        <Typography className={classes.text}>Join us</Typography>
        <img src={Facebook} className={classes.socialIcon} alt="icon-social" />
        <img src={Instagram} className={classes.socialIcon} alt="icon-social" />
        <img src={Linkedin} className={classes.socialIcon} alt="icon-social" />
        <img src={Twitter} className={classes.socialIcon} alt="icon-social" />
      </div>

      <div className={classes.contactContainer}>
        <Typography className={classes.text}>Contact</Typography>
        <Typography className={classes.text}>contact@dropped-time.com</Typography>
      </div>

      <div className={classes.logoContainer}>
        <img src={Logo} className={classes.logoIcon} alt="logo-dropped-time" />
      </div>
    </div>
  )
}

export const Footer = withStyles(styles)(FooterRaw);

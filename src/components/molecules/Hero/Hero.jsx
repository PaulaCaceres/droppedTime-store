import React from 'react';
import { useHistory } from "react-router-dom";
import { styles } from "./styles";
import { withStyles, Typography, Grid } from "@material-ui/core";
import { ActionButton } from '../..'

const HeroRaw = (props) => {
  const { classes } = props;
  const history = useHistory();

  const goToProducts = () => {
    history.push('/products')
  }
  return (
    <Grid
      container
      direction="row"
      justify="space-around"
      className={classes.mainContainer}
    >

      <Grid item xs={12} sm={4} className={classes.textContainer}>
        <Typography className={classes.heroTitle}>Time to give your best</Typography>
        <Typography className={classes.heroDescription}>Style and Swimming Performance</Typography>
        <ActionButton
          title="Shop now"
          buttonStyle={classes.heroButton}
          textStyle={classes.heroTextButton}
          onClick={goToProducts}
        />
      </Grid>
      <Grid item xs={12} sm={3} className={classes.textContainer} />
    </Grid>
  );
};

export const Hero = withStyles(styles)(HeroRaw);

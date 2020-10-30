import React from 'react'
import { withStyles } from "@material-ui/core";
import { styles } from "./styles";
import ShoppingCart from '@material-ui/icons/ShoppingCart';

const CartIconRaw = (props) => {
  const { classes } = props;

  return (
    <div>
      <ShoppingCart className={classes.cartIcon} />
    </div>
  )
}

export const CartIcon = withStyles(styles)(CartIconRaw);

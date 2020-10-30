import React, { useContext } from 'react';
import { CartContext } from '../../../context/cartContext';
import { useHistory } from "react-router-dom";
import { withStyles, Typography, Paper } from "@material-ui/core";
import { ActionButton } from '../../atoms'
import { styles } from "./styles";
import Shopping from "../../../assets/icons/shopping.png";

const CartRaw = (props) => {
  const { classes, button } = props;
  const history = useHistory();
  const { calculateProductsAmount, calculateOrderPrice } = useContext(CartContext);

  const productsAmount = calculateProductsAmount()
  const orderPrice = calculateOrderPrice()

  const goToCheckout = () => {
    history.push('/checkout')
  }

  return (
    <Paper className={classes.mainContainer}>
      <div className={classes.textContainer}>
        <div className={classes.iconContainer}>
          <img src={Shopping} alt="Shopping-list" className={classes.icon} />
        </div>
        <Typography className={classes.text}>Subtotal: </Typography>
        <Typography className={classes.text}>Total items: {productsAmount}</Typography>
        <Typography className={classes.text}>Shipping: FREE</Typography>
        <Typography className={classes.text}>Order total: ${orderPrice}</Typography>

      </div>
      {button &&
        <div className={classes.buttonContainer}>
          <ActionButton
            title={`Proceed to checkout`}
            onClick={goToCheckout}
            buttonStyle={classes.checkoutButton}
            disabled={productsAmount === 0}
          />
        </div>
      }
    </Paper>
  )
}

export const Cart = withStyles(styles)(CartRaw);

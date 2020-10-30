import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from '../../context/cartContext'
import { withStyles, Typography, Breadcrumbs } from "@material-ui/core";
import { styles } from "./styles";
import { Cart } from "../../components";

class CartScreenRaw extends Component {
  constructor() {
    super();
    this.state = {
      isEmpty: true,
      productsAmount: 0
    }
  }

  componentDidMount() {
    const { calculateProductsAmount } = this.context;
    const productsAmount = calculateProductsAmount()
    this.setState({ productsAmount })
  }

  handleClick = (event) => {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

  render() {
    const { classes } = this.props;
    const { productsAmount } = this.state;


    return (
      <div className={classes.mainContainer}>
        <Typography className={classes.title}>Your shopping list</Typography>

        <Breadcrumbs className={classes.breadcrumbs}>
          <NavLink to='/' className={classes.link}>
            Home
          </NavLink>
          <Typography className={classes.selectedBreadcrumb}>Cart</Typography>
        </Breadcrumbs>

        <Cart button />
        {(productsAmount === 0) &&
          <div>
            <Typography>
              Your Cart is empty.
              <NavLink to='/' className={classes.link}>
                See all products.
          </NavLink>
            </Typography>
          </div>
        }
      </div>
    );
  }
}

CartScreenRaw.contextType = CartContext;

export const CartScreen = withStyles(styles)(CartScreenRaw);

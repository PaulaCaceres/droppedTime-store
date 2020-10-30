import React, { useContext } from 'react'
import { CartContext } from '../../../context/cartContext';
import { NavLink } from "react-router-dom";
import { withStyles, Typography } from "@material-ui/core";
import { DropdownMenu, CartIcon } from "../../";
import { styles } from "./styles";
import Logo from "../../../assets/icons/logo-dropped.svg";


const NavBarRaw = (props) => {
  const { classes } = props;
  const { calculateProductsAmount } = useContext(CartContext);
  const productsAmount = calculateProductsAmount()

  return (
    <div
      className={classes.mainContainer}
    >
      <NavLink to='/' className={classes.logoContainer}>
        <img src={Logo} alt="Logo" className={classes.logoStyle} />
      </NavLink>

      <DropdownMenu title={"Products"} dropdownStyle={classes.navbarItem} />

      <NavLink to='/about' className={classes.navbarItem}>
        About
        </NavLink>

      <NavLink to='/contact' className={classes.navbarItem}>
        Contact
        </NavLink>

      <NavLink to='/cart' className={classes.navbarItem} >
        <CartIcon className={classes.cartIcon} />
        <Typography className={classes.cartAmount}>{productsAmount}</Typography>
      </NavLink>
    </div>
  );
};

export const NavBar = withStyles(styles)(NavBarRaw);

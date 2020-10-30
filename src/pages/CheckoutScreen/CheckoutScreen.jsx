import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { CartContext } from '../../context/cartContext'
import { withStyles, Typography, Breadcrumbs, Paper } from "@material-ui/core";
import { ActionButton, Form } from '../../components'
import { styles } from "./styles";
import { getFirestore } from '../../firebase';
import * as firebase from 'firebase/app';

const CheckoutScreenRaw = (props) => {
  const { classes } = props;
  const history = useHistory();
  const [order, setOrder] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    address: '',
    postcode: '',
    cardNumber: '',
    expirationDate: '',
    CVC: ''
  });

  const fillOrderDetails = (event) => {
    const id = event.target.id
    const value = event.target.value
    setOrder({ ...order, [id]: value })
  }

  const checkRequiredInfo = () => {
    let isCompleted = false;
    Object.values(order).map(item => {
      if (item === "") {
        isCompleted = true
      }
      else isCompleted = false
    })
    return isCompleted
  }

  const goToConfirmedOrder = () => {
    const db = getFirestore();
    const orders = db.collection("orders")
    const newOrder = { ...order, date: firebase.firestore.Timestamp.fromDate(new Date()) };

    orders.add(newOrder)
      .then(({ id }) => console.log(id))
      .catch((err) => console.log(err))
      .finally(() => history.push('/confirmed-order'))
  }

  return (
    <div className={classes.mainContainer}>
      <Typography className={classes.mainTitle}>Order Checkout</Typography>

      <Breadcrumbs className={classes.breadcrumbs}>
        <NavLink to='/' className={classes.link}>
          Home
          </NavLink>
        <NavLink to='/products' className={classes.link}>
          Products
          </NavLink>
        <Typography className={classes.selectedBreadcrumb}>Checkout</Typography>
      </Breadcrumbs>

      <div className={classes.detailsContainer}>
        <Paper className={classes.shippingContainer}>
          <Typography className={classes.title}>Shipping details</Typography>
          <Form title='Full name' id='fullName' value={order.fullName} onChange={fillOrderDetails} />
          <Form title='Email address' id='email' value={order.email} onChange={fillOrderDetails} />
          <Form title='Phone' id='phone' value={order.phone} onChange={fillOrderDetails} />
          <Form title='Country or region' id='country' value={order.country} onChange={fillOrderDetails} />
          <Form title='Address' id='address' value={order.address} onChange={fillOrderDetails} />
          <Form title='Postcode' id='postcode' value={order.postcode} onChange={fillOrderDetails} />
        </Paper>

        <Paper className={classes.paymentContainer}>
          <Typography className={classes.title}>Payment details </Typography>
          <Form title='Card number' id='cardNumber' value={order.cardNumber} onChange={fillOrderDetails} />
          <Form title='Expiration date' id='expirationDate' value={order.expirationDate} onChange={fillOrderDetails} />
          <Form title='CVC code' id='CVC' value={order.CVC} onChange={fillOrderDetails} />
        </Paper>
      </div>


      <Paper className={classes.orderContainer}>
        <Typography className={classes.title}>Order resume </Typography>
        {Object.values(order).map(item =>
          <Typography>{item}</Typography>
        )}
        <ActionButton title='Confirm order' onClick={goToConfirmedOrder} disabled={checkRequiredInfo()} />
      </Paper>
    </div>
  );
}

CheckoutScreenRaw.contextType = CartContext;

export const CheckoutScreen = withStyles(styles)(CheckoutScreenRaw);

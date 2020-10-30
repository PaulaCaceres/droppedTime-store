import React, { useState, useEffect } from "react";
import { getFirestore } from '../../firebase';
import { NavLink } from "react-router-dom";
import { withStyles, Typography, Breadcrumbs } from "@material-ui/core";
import { styles } from "./styles";
import { ItemList } from "../../components";

const ProductsScreenRaw = (props) => {
  const [items, setItems] = useState([]);
  const { classes } = props;

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("items")
    itemCollection.get()
      .then((querySnapshot) => {
        const queryItems = querySnapshot.docs.map(doc => {
          return ({ id: doc.id, ...doc.data() });
        })
        setItems(queryItems);
      })
      .catch((error) => {
        console.log("There was an error trying to get items: ", error);
      })

  }, []);

  return (
    <div className={classes.mainContainer}>
      <Typography className={classes.title}>Find the one it suits you best</Typography>

      <Breadcrumbs className={classes.breadcrumbs}>
        <NavLink to='/' className={classes.link}>
          Home
          </NavLink>
        <Typography className={classes.selectedBreadcrumb}>Products</Typography>
      </Breadcrumbs>

      <div className={classes.itemListContainer}>
        <ItemList data={items} />
      </div>

    </div>
  );
}

export const ProductsScreen = withStyles(styles)(ProductsScreenRaw);

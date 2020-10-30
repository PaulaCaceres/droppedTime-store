import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core";
import { ItemDetail, Loader } from '../../'
import { styles } from "./styles";
import { getFirestore } from '../../../firebase';

const ItemDetailContainerRaw = (props) => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({});
  const [amount, setAmount] = useState(0);
  const { classes, productId } = props

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection('items');
    const item = itemCollection.doc(productId)
    item.get()
      .then((doc) => {
        setProduct({ id: doc.id, ...doc.data() });
      })
      .catch((error) => {
        console.log("There was an error trying to get items: ", error);
      })
  }, [productId]);

  return (
    <div className={classes.mainContainer}>
      {loading
        ?
        <Loader />
        :
        <>
          <ItemDetail item={product} setAmount={setAmount} />
        </>
      }
    </div>
  )
}

export const ItemDetailContainer = withStyles(styles)(ItemDetailContainerRaw);

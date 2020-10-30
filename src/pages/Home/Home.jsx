import React, { useState, useEffect } from "react";
import { getFirestore } from '../../firebase';
import { withStyles } from "@material-ui/core";
import { Hero, FeatureProducts, Footer } from "../../components";
import { styles } from "./styles";
import Product1 from '../../assets/images/feature_product1.jpg';
import Product2 from '../../assets/images/feature_product2.jpg';

const HomeRaw = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("items")
    itemCollection.get()
      .then((querySnapshot) => {
        const queryItems = querySnapshot.docs.map(doc => doc.data())
        setItems(queryItems);
      })
      .catch((error) => {
        console.log("There was an error trying to get items: ", error);
      })

  }, []);

  useEffect(() => {
    console.log(items);
  }, [items])

  return (
    <div className={styles.mainContainer}>
      <Hero />
      <FeatureProducts firstTitle='Arena Elite Hand Paddle' secondTitle="Speedo Swim Cup" firstImage={Product1} secondImage={Product2} />
      <Footer />
    </div>
  );
}

export const Home = withStyles(styles)(HomeRaw);

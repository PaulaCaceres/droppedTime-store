import React, { useState, useContext } from 'react'
import { CartContext } from '../../../context/cartContext';
import { withStyles, Typography, Paper } from "@material-ui/core";
import { styles } from './styles';
import { ActionButton, Counter } from '../..';

const ItemDetailRaw = (props) => {
    const { classes, item } = props;
    const [count, setCount] = useState(0)
    const { cart, setCart } = useContext(CartContext);

    const addToCart = () => {
        const toBuy = { id: item.id, price: item.price, amount: count };
        setCart([...cart, toBuy])
    }

    return (
        <Paper className={classes.container}>
            <img src={item.image} className={classes.itemImage} alt="product-detail" />

            <div className={classes.textContainer}>
                <Typography className={classes.title}>
                    {item.title}
                </Typography>
                <Typography>
                    {item.description}
                </Typography>
                <Typography>
                    Price: ${item.price}
                </Typography>
                <Typography className={classes.stock}>
                    {item.stock > count ? 'Available stock, get yours!' : 'Sorry, out of stock'}
                </Typography>
            </div>

            <Counter
                text={`Quantity: ${count}`}
                currentCount={count}
                changeCount={setCount}
                max={item.stock}
                min={0} />

            <ActionButton
                title={`Add to cart (${count})`}
                onClick={addToCart}
                buttonStyle={classes.buyButton}
            />
        </ Paper>
    )
}

export const ItemDetail = withStyles(styles)(ItemDetailRaw);

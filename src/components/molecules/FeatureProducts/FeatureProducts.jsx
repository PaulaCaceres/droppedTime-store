import React from 'react'
import { useHistory } from "react-router-dom";
import { withStyles, Typography, Paper } from "@material-ui/core";
import { styles } from './styles';

const FeatureProductsRaw = (props) => {
    const { classes, firstTitle, secondTitle, firstImage, secondImage } = props;
    const history = useHistory();

    const goToProducts = () => {
        history.push('/products')
    }

    return (
        <div className={classes.mainContainer}>
            <div className={classes.titleContainer}>
                <Typography className={classes.title}>Our recommendations</Typography>
            </div>

            <div className={classes.productsContainer}>
                <Paper className={classes.container} onClick={goToProducts}>
                    <img src={firstImage} className={classes.itemImage} alt="product-detail" />
                    <Typography className={classes.subtitle}>
                        {firstTitle}
                    </Typography>
                </ Paper>

                <Paper className={classes.container} onClick={goToProducts}>
                    <img src={secondImage} className={classes.itemImage} alt="product-detail" />
                    <Typography className={classes.subtitle}>
                        {secondTitle}
                    </Typography>
                </ Paper>
            </div>
        </div>
    )
}

export const FeatureProducts = withStyles(styles)(FeatureProductsRaw);

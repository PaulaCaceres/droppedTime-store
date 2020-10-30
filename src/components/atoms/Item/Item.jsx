import React from 'react';
import { withStyles, Button, Card, Typography, CardActionArea, CardActions, CardContent, CardMedia } from "@material-ui/core";
import { styles } from "./styles";

const ItemRaw = (props) => {

  const {
    classes,
    img,
    title,
    description,
    onClick = () => { },
  } = props;

  return (
    <Card className={classes.mainContainer}>
      <CardActionArea className={classes.actionContainer}>
        <img src={img} className={classes.itemImage} alt="button-icon" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
        <Button size="small">More details</Button>

      </CardActionArea>
    </Card>
  );
};

export const Item = withStyles(styles)(ItemRaw);
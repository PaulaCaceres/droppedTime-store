import React from "react";
import { useParams, NavLink } from 'react-router-dom'
import { withStyles, Breadcrumbs, Typography } from "@material-ui/core";
import { styles } from "./styles";
import { ItemDetailContainer } from "../../components";

const ItemDetailScreenRaw = (props) => {
  const { classes } = props;
  const { id } = useParams();

  return (
    <div className={classes.mainContainer}>
      <Breadcrumbs className={classes.breadcrumbs}>
        <NavLink to='/' className={classes.link}>
          Home
          </NavLink>
        <NavLink to='/products' className={classes.link}>
          Products
          </NavLink>
        <Typography className={classes.selectedBreadcrumb}>Product detail</Typography>
      </Breadcrumbs>

      <ItemDetailContainer productId={id} />
    </div>
  )
}

export const ItemDetailScreen = withStyles(styles)(ItemDetailScreenRaw);
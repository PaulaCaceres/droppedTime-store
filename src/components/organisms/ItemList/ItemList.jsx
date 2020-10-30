import React from "react";
import { styles } from "./styles";
import { withStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { Item, Loader } from '../..'

const ItemListRaw = (props) => {
  const { classes, data, loading } = props

  return (
    <div className={classes.mainContainer}>
      {loading
        ?
        <Loader />
        :
        data.map((item, index) => {
          return (
            <NavLink to={`/products/${item.id}`} key={index} className={classes.itemListContainer}>
              <Item
                title={item.title}
                description={item.description}
                img={item.image}
              />
            </NavLink>
          )
        })
      }
    </div>

  )
}

export const ItemList = withStyles(styles)(ItemListRaw)
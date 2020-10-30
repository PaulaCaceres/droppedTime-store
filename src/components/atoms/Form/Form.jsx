import React, { Component } from "react";
import { withStyles, TextField } from "@material-ui/core";
import { styles } from "./styles";

class FormRaw extends Component {
  render() {
    const {
      classes,
      id,
      title,
      type,
      value,
      onChange = () => { },
    } = this.props;

    return (
      <form className={classes.form} noValidate autoComplete="off">
        <TextField required id={id} label={title} value={value} placeholder={title} onChange={onChange} type={type} />
      </form>
    );
  }
}

export const Form = withStyles(styles)(FormRaw);

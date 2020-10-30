import { createMuiTheme } from "@material-ui/core/styles";

export const theme = (theme) => {
  return createMuiTheme({
    typography: {
      fontFamily: ["BasierCircle", "BasierSquare", "Candelion"].join(","),
    },
  });
};

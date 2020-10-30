import { createStyles } from "@material-ui/core/styles";

export const styles = (theme) => {
  return createStyles({
    mainContainer: {
      width: '80%',
      margin: '12rem auto',
      verticalAlign: 'middle'
    },
    text: {
      padding: '6rem',
      textAlign: 'center',
      margin: 'auto',
      fontSize: '1.2rem'
    }

  });
};

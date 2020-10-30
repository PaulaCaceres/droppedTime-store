import { colors } from '../../../styles/colors';

export const styles = (theme) => ({
  mainContainer: {
    backgroundColor: colors.background.secondary,
    height: "50px",
    alignItems: 'center',
    display: 'flex',
    justifyContent: "space-around"
  },
  logoStyle: {
    width: "100px",
    padding: "0.2rem",
  },
  navbarItem: {
    display: 'flex',
    flexDirection: 'row',
    textDecoration: 'none',
    textTransform: 'capitalize',
    alignItems: 'center',
    color: colors.text.secondary,
    "&:hover": {
      color: colors.primary.main,
    },
  },
  cartIcon: {
    width: '1rem',
  },
  cartAmount: {
    fontSize: '1.2rem',
    color: colors.text.secondary,
    margin: 0,
    padding: 0,
  }
});

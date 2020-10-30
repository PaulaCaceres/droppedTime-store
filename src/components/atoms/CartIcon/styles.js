import { colors } from '../../../styles/colors';

export const styles = (theme) => ({
  cartIcon: {
    width: '1.4rem',
    color: colors.primary.light,
    "&:hover": {
      color: colors.primary.main,
    },
  }
});
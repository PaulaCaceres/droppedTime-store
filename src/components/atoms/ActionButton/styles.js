import { colors } from '../../../styles/colors';

export const styles = (theme) => ({
  button: {
    margin: '0.5rem 0',
    padding: '0.5rem',
    borderRadius: '15px',
    backgroundColor: colors.primary.light,
    '&:hover': {
      backgroundColor: colors.primary.main,

      color: colors.text.secondary
    }
  }
})
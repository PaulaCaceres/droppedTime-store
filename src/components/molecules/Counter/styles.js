import { colors } from '../../../styles/colors';

export const styles = (theme) => ({
  counterMainContainer: {
    margin: "auto",
    width: "fit-content",
  },
  counterContainer: {
    width: 'fit-content',
    height: '3rem',
    display: 'flex',
    padding: '1rem',
    margin: '1rem 0',
  },
  counterText: {
    padding: '0.5rem 1rem 0.5rem 0',
    alignSelf: 'center',
    color: colors.primary.main
  },
  buttonsContainer: {
    display: 'flex'
  },
  counterButton: {
    width: '1rem',
    height: '1.5rem',
    padding: 0,
    margin: 0,
    alignSelf: 'center',
    backgroundColor: colors.primary.light
  }
});

import { colors } from '../../../styles/colors'

export const styles = (theme) => ({
  mainContainer: {
    height: '8rem',
    display: 'flex',
    backgroundColor: colors.background.secondary,
    justifyContent: 'space-around'
  },
  text: {
    fontSize: '0.9rem',
    color: colors.text.secondary,
    padding: '0 0.5rem 0.5rem 0.5rem'
  },
  logoIcon: {
    width: '4rem',
    textAlign: 'right'
  },
  socialContainer: {
    padding: '2rem 0.5rem',
    width: '20rem',
  },
  contactContainer: {
    padding: '2rem 0.5rem',
    width: '20rem',
  },
  logoContainer: {
    padding: '2rem 0.5rem',
    textAlign: 'center',
    width: '20rem',
  },
  socialIcon: {
    width: '2rem',
    margin: ' 0 1rem',
    '&:hover': {
      opacity: '0.8'
    }
  }
});

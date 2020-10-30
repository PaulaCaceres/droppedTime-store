import { colors } from '../../../styles/colors'

export const styles = (theme) => ({
  mainContainer: {
    margin: 'auto',
    padding: '2rem'
  },
  productsContainer: {
    display: 'flex',
  },
  titleContainer: {
    textAlign: 'center',
    margin: 'auto',
    padding: '1rem 0'
  },
  container: {
    width: '100%',
    margin: '2rem',
    textAlign: 'center',
    '&:hover': {
      opacity: '0.8'
    }
  },
  itemImage: {
    minWidth: '15rem',
    maxHeight: '20rem',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: colors.primary.dark,

  },
  subtitle: {
    fontSize: '1.2rem',
    color: colors.primary.dark,
  },

});

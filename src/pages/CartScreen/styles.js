import { colors } from '../../styles/colors'

export const styles = (theme) => ({
  mainContainer: {
    margin: '2rem'
  },
  title: {
    fontSize: '3rem',
    fontWeight: '700'
  },
  icon: {
  },
  breadcrumbs: {
    color: 'black',
  },
  selectedBreadcrumb: {
    fontWeight: '500',
    color: colors.primary.main,
  },
  link: {
    padding: '0.5rem',
    textDecoration: 'none',
    color: 'black',
    '&:hover': {
      textDecoration: 'none',
      color: colors.primary.main,
    }
  }
});

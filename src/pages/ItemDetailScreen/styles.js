import { colors } from "../../styles/colors";

export const styles = (theme) => ({
  mainContainer: {
    height: '100vh',
    padding: '2rem',
  },
  breadcrumbs: {
    color: 'black',
  },
  selectedBreadcrumb: {
    fontWeight: '500',
    color: colors.primary.main
  },
  link: {
    padding: '0.5rem',
    textDecoration: 'none',
    color: 'black',
    '&:hover': {
      textDecoration: 'none',
      color: colors.primary.main,
    }
  },
});

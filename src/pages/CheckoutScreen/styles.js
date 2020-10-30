import { colors } from "../../styles/colors";

export const styles = (theme) => ({
  mainContainer: {
    margin: '2rem',
  },
  detailsContainer: {
    margin: '2rem 0',
    display: 'flex',
    justifyContent: 'space-around'
  },
  shippingContainer: {
    width: '45%'
  },
  paymentContainer: {
    width: '45%'
  },
  orderContainer: {
    margin: '2rem',
    minHeight: '10rem',
    maxWidth: '45%',
    padding: '0.5rem',
    flexWrap: 'wrap'
  },
  mainTitle: {
    fontSize: '3rem',
    fontWeight: '700'
  },
  title: {
    fontSize: '1.2rem',
    fontWeight: '500',
    padding: '0.5rem'
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
  itemListContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: 'fit-content'
  },
});


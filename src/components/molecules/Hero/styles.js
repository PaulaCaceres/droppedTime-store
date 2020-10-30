import { colors } from '../../../styles/colors';
import HeroImage from '../../../assets/images/test.jpg'

export const styles = (theme) => ({
  mainContainer: {
    height: '65vh',
    backgroundImage: `url(${HeroImage})`
  },
  textContainer: {
    alignSelf: 'center',
    width: '100%',
    margin: '2rem 0',
    color: colors.text.secondary,
  },
  heroTitle: {
    fontSize: '4rem',
    color: colors.secondary.light,
    lineHeight: '4.2rem',
  },
  heroDescription: {
    fontSize: '1.2rem',
    margin: '1rem 0 2rem 0',
  },
  heroButton: {
    padding: '1rem 2rem',
    margin: '2rem 0'
  },
  heroTextButton: {
  },
});

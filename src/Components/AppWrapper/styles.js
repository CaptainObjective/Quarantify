import background from '../../assets/images/background.png';

export const styles = {
  root: {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  main: {
    display: 'flex',
    justifyContent: 'center',
    overflowX: 'hidden',
    overflowY: 'auto',
    marginBottom: '8vh'
  }
};

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: '#252B31',
  },
  cardTitle: {
    color: theme.palette.mode === 'light' ? 'black' : 'white',
  },
  loadingWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    marginTop: 2,
  },
}));

export default useStyles;

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  label: {
    color: theme.palette.mode === 'light' ? 'black' : 'white',
  },
  card: {
    backgroundColor: '#252B31',
  },
}));

export default useStyles;

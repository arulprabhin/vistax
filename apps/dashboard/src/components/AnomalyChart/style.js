import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  cardTitle: {
    color: theme.palette.mode === 'light' ? 'black' : 'white',
  },
}));

export default useStyles;

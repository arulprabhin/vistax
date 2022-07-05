import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  dashboardTileBg: {
    backgroundColor: theme.palette.mode === 'light' ? 'whitesmoke' : theme.palette.paper,
  },
}));

export default useStyles;

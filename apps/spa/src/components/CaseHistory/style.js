import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  historyField: {
    color: theme.palette.mode === 'light' ? '#3a58ad' : '#437aaf',
    display: 'inline-block',
    marginLeft: '5px',
  },
  historyTimestamp: {
    color: theme.palette.mode === 'light' ? '#41c16b' : '#35746c',
    display: 'inline-block',
    marginRight: '5px',
    marginLeft: '10px',
  },
  floatLeft: {
    display: 'inline-block',
    marginLeft: '5px',
  },
}));

export default useStyles;

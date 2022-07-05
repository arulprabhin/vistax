import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  filter: {
    display: 'flex',
    flexDirection: 'column',
  },
  iconButton: {
    padding: '12px 13px',
    width: '100%',
    borderRadius: 0,
    justifyContent: 'start',
    display: 'flex',
    gap: '20px',
    textTransform: 'none',
    color: theme.palette.text.secondary,
    flexShrink: 0,
  },
  iconButtonText: {
    fontWeight: 'bold',
    fontSize: '0.8rem',
    width: '100%',
    textAlign: 'left',
  },
  subIconButton: {
    paddingLeft: '24px',
  },
  buttonGroup: {
    backgroundColor: '#3689c9',
  },
  actionButton: {
    fontSize: '14px',
  },
  dateTimePicker: {
    '& .daterangepickercontainer': {
      /*marginRight: '5px',*/
      backgroundColor: '#233242 !important',
    },
    '& .daterangepicker': {
      marginTop: '32px',
      backgroundColor: '#253f57 !important',
    },
    '& .fromDateHourContainer': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    '& .applyButton': {
      backgroundColor: `${theme.palette.primary.main} !important`,
      border: `1px solid ${theme.palette.primary.main}`,
    },
    '& .activeNotifier': {
      visibility: 'hidden',
    },
  },
  dateTimeButton: {
    fontSize: '14px',
    textTransform: 'none',
    color: 'white',
    width: 'max-content',
  },
  searchHistoryWrapper: {
    maxWidth: 350,
  },
  searchQuery: {
    '& span': {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  },
  saveQuery: {
    marginLeft: '16px',
    marginRight: '-16px',

    '& .MuiButtonGroup-grouped': {
      border: 'none !important',
    },
  },
}));

export default useStyles;

import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    dateTimePickerContainer: {
      '& .MuiBox-root': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2c3742' : 'background.paper',
      },
    },
    dateTimePickerInput: {
      '& .MuiInputBase-root .Mui-disabled': {
        color: theme.palette.text.primary, //theme.palette.mode === 'dark' ? '' : 'rgba(0, 0, 0, 0.7) !important',
        WebkitTextFillColor: theme.palette.text.primary, //theme.palette.mode === 'dark' ? '' : 'rgba(0, 0, 0, 0.7)',
        textFillColor: theme.palette.text.primary, //theme.palette.mode === 'dark' ? '' : 'rgba(0, 0, 0, 0.7)',
      },
    },
  })
);

export const QUICK_ACTIONS = [
  [
    {
      text: 'Today',
      moment: {
        from: [{ action: 'startOf', on: 'day', value: null }],
        to: [{ action: 'now', on: null, value: null }],
      },
    },
    {
      text: 'Last 15 minutes',
      moment: {
        from: [{ action: 'subtract', on: 'minutes', value: 15 }],
        to: [{ action: 'now', on: null, value: null }],
      },
    },
    {
      text: 'Last 30 minutes',
      moment: {
        from: [{ action: 'subtract', on: 'minutes', value: 30 }],
        to: [{ action: 'now', on: null, value: null }],
      },
    },
    {
      text: 'Last 1 hour',
      moment: {
        from: [{ action: 'subtract', on: 'hours', value: 1 }],
        to: [{ action: 'now', on: null, value: null }],
      },
    },
    {
      text: 'Last 6 hours',
      moment: {
        from: [{ action: 'subtract', on: 'hours', value: 6 }],
        to: [{ action: 'now', on: null, value: null }],
      },
    },
    {
      text: 'Last 12 hours',
      moment: {
        from: [{ action: 'subtract', on: 'hours', value: 12 }],
        to: [{ action: 'now', on: null, value: null }],
      },
    },
  ],
  [
    {
      text: 'Yesterday',
      moment: {
        from: [
          { action: 'subtract', on: 'days', value: 1 },
          { action: 'startOf', on: 'day', value: null },
        ],
        to: [
          { action: 'subtract', on: 'days', value: 1 },
          { action: 'endOf', on: 'day', value: null },
        ],
      },
    },
    {
      text: 'This week',
      moment: {
        from: [
          { action: 'startOf', on: 'isoWeek', value: null },
          { action: 'startOf', on: 'day', value: null },
        ],
        to: [{ action: 'now', on: null, value: null }],
      },
    },
    {
      text: 'Last 7 days',
      moment: {
        from: [
          { action: 'subtract', on: 'days', value: 7 },
          { action: 'startOf', on: 'day', value: null },
        ],
        to: [{ action: 'now', on: null, value: null }],
      },
    },
    {
      text: 'Last 14 days',
      moment: {
        from: [
          { action: 'subtract', on: 'days', value: 14 },
          { action: 'startOf', on: 'day', value: null },
        ],
        to: [{ action: 'now', on: null, value: null }],
      },
    },

    {
      text: 'This month',
      moment: {
        from: [
          { action: 'startOf', on: 'month', value: null },
          { action: 'startOf', on: 'day', value: null },
        ],
        to: [{ action: 'now', on: null, value: null }],
      },
    },
    {
      text: 'Last 3 months',
      moment: {
        from: [
          { action: 'subtract', on: 'months', value: 3 },
          { action: 'startOf', on: 'day', value: null },
        ],
        to: [{ action: 'now', on: null, value: null }],
      },
    },
  ],
  [
    {
      text: 'Last 6 months',
      moment: {
        from: [
          { action: 'subtract', on: 'months', value: 6 },
          { action: 'startOf', on: 'day', value: null },
        ],
        to: [{ action: 'now', on: null, value: null }],
      },
    },
    {
      text: 'This year',
      moment: {
        from: [
          { action: 'startOf', on: 'year', value: null },
          { action: 'startOf', on: 'day', value: null },
        ],
        to: [{ action: 'now', on: null, value: null }],
      },
    },
    {
      text: 'Last 1 year',
      moment: {
        from: [
          { action: 'subtract', on: 'years', value: 1 },
          { action: 'startOf', on: 'day', value: null },
        ],
        to: [{ action: 'now', on: null, value: null }],
      },
    },
    {
      text: 'Last 2 years',
      moment: {
        from: [
          { action: 'subtract', on: 'years', value: 2 },
          { action: 'startOf', on: 'day', value: null },
        ],
        to: [{ action: 'now', on: null, value: null }],
      },
    },
    {
      text: 'Last 5 years',
      moment: {
        from: [
          { action: 'subtract', on: 'years', value: 5 },
          { action: 'startOf', on: 'day', value: null },
        ],
        to: [{ action: 'now', on: null, value: null }],
      },
    },
  ],
];

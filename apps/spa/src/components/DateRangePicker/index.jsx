import React, { useState, useRef, useEffect } from 'react';
import { Tabs, Tab, Box, Grid, Link, Button, Popover, Stack } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import moment from 'moment';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDateTimePicker from '@mui/lab/DesktopDateTimePicker';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useStyles, QUICK_ACTIONS } from './utils';
import { buildMoment } from '@logrhythm/shared/common';
import { useSelector } from 'react-redux';

const TabPanel = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
    </div>
  );
};

export default function VistaDateTimeRangeSelector({ onRangeChange, buttonVariant }) {
  const { global } = useSelector((state) => state.user);
  const { searchRange, searchStart, searchEnd, searchMoment } = global;

  const currentLabel = useRef(searchRange);
  const appliedLabel = useRef(currentLabel.current);
  const [fromDate, setFromDate] = useState(searchStart);
  const currentFrom = useRef(fromDate);
  const [toDate, setToDate] = useState(searchEnd);
  const currentTo = useRef(toDate);
  const currentMoment = useRef(searchMoment);
  const fromDateRef = useRef();
  const toDateRef = useRef();
  const [tabValue, setTabValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useRef({});

  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    history.current = JSON.parse(localStorage.getItem('globalSelectorConfig') || '{}');
  };

  const handleClose = () => {
    setAnchorEl(null);
    currentLabel.current = appliedLabel.current;
    setFromDate(currentFrom.current);
    setToDate(currentTo.current);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleDateFromChange = (value) => {
    setFromDate(value);
    currentLabel.current =
      moment(value).format('YYYY-MM-DD hh:mm A') + ' to ' + moment(toDate).format('YYYY-MM-DD hh:mm A');
  };

  const handleDateToChange = (value) => {
    setToDate(value);
    currentLabel.current =
      moment(fromDate).format('YYYY-MM-DD hh:mm A') + ' to ' + moment(value).format('YYYY-MM-DD hh:mm A');
  };

  const applySelection = () => {
    setAnchorEl(null);
    appliedLabel.current = currentLabel.current;
    currentFrom.current = fromDate;
    currentTo.current = toDate;
    currentMoment.current = null;
    QUICK_ACTIONS.every((e) => {
      const res = e.filter((f) => f.text === currentLabel.current);
      if (res.length > 0) {
        currentMoment.current = res[0].moment;
        return false;
      }
      return true;
    });
    if (onRangeChange)
      onRangeChange(currentLabel.current, currentFrom.current, currentTo.current, currentMoment.current);

    let momentHistory = JSON.parse(localStorage.getItem('globalSelectorConfig') || '{}');
    momentHistory.updatedOn = moment().toDate();
    let moments = momentHistory.moments || [];
    const newEntry = {
      label: currentLabel.current,
      from: fromDate,
      to: toDate,
      on: moment().toDate(),
    };

    moments.every((hist, index) => {
      if (hist.label === currentLabel.current) {
        moments.splice(index, 1);
        return false;
      }
      return true;
    });

    moments.splice(0, 0, newEntry);
    if (moments.length > 18) moments.pop();
    momentHistory.moments = moments;
    localStorage.setItem('globalSelectorConfig', JSON.stringify(momentHistory));
  };

  const getMoments = () => {
    if (history.current?.moments) {
      return (
        <Grid container spacing={2} sx={{ p: 1 }}>
          {history.current.moments.map((hist, idx) => (
            <Grid item xs={6} key={'sub-container' + idx}>
              <Link
                component="button"
                variant="body2"
                onClick={() => {
                  currentLabel.current = hist.label;
                  let matchingOption = null;
                  QUICK_ACTIONS.every((e) => {
                    const res = e.filter((f) => f.text === hist.label);
                    if (res.length > 0) {
                      matchingOption = res[0];
                      return false;
                    }
                    return true;
                  });
                  if (matchingOption) {
                    setFromDate(buildMoment(matchingOption.moment.from));
                    setToDate(buildMoment(matchingOption.moment.to));
                    currentMoment.current = matchingOption.moment;
                  } else {
                    setFromDate(hist.from);
                    setToDate(hist.to);
                    currentMoment.current = null;
                  }
                  setTabValue(0);
                }}
                key={idx}
                underline={'hover'}
                sx={{ display: 'block', color: '#5b8ec1' }}
              >
                {hist.label}
              </Link>
            </Grid>
          ))}
        </Grid>
      );
    } else return null;
  };

  return (
    <>
      <Button
        aria-describedby={id}
        variant={buttonVariant ?? 'contained'}
        startIcon={<AccessTimeIcon />}
        endIcon={<KeyboardArrowDownIcon />}
        onClick={handleClick}
        sx={{ color: 'white' }}
      >
        {appliedLabel.current}
      </Button>
      <Popover
        open={open}
        className={classes.dateTimePickerContainer}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              backgroundColor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
      >
        <Box sx={{ width: 700, height: 430 }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={tabValue} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Range" sx={{ marginLeft: 'auto' }} />
              <Tab label="History" />
            </Tabs>
          </Box>
          <TabPanel value={tabValue} index={0}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack direction="row" justifyContent="space-evenly" alignItems="center" spacing={2}>
                <DesktopDateTimePicker
                  value={fromDate}
                  inputFormat={'YYY-MM-dd hh:mm a'}
                  onChange={handleDateFromChange}
                  renderInput={(params) => (
                    <TextField size={'small'} {...params} disabled className={classes.dateTimePickerInput} />
                  )}
                  maxDateTime={new Date()}
                  ref={fromDateRef}
                />
                <Box sx={{ mx: 2 }}> to </Box>
                <DesktopDateTimePicker
                  value={toDate}
                  onChange={handleDateToChange}
                  inputFormat={'YYY-MM-dd hh:mm a'}
                  renderInput={(params) => (
                    <TextField size={'small'} {...params} disabled className={classes.dateTimePickerInput} />
                  )}
                  maxDateTime={new Date()}
                  ref={toDateRef}
                />
              </Stack>
            </LocalizationProvider>
            <Grid container spacing={2} sx={{ p: 1 }}>
              {QUICK_ACTIONS.map((column, columnIndex) => (
                <Grid item xs={4} key={columnIndex}>
                  {column.map((option, optionIndex) => (
                    <Link
                      component="button"
                      variant="body1"
                      onClick={() => {
                        setFromDate(buildMoment(option.moment.from));
                        setToDate(buildMoment(option.moment.to));
                        currentLabel.current = option.text;
                      }}
                      key={optionIndex}
                      underline={'hover'}
                      sx={{ display: 'block', color: '#5b8ec1' }}
                    >
                      {option.text}
                    </Link>
                  ))}
                </Grid>
              ))}
            </Grid>
            <Stack
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={3}
              sx={{ position: 'absolute', bottom: 10, right: 10 }}
            >
              <Button variant="contained" onClick={applySelection}>
                Apply
              </Button>
              <Button variant="contained" color="error" onClick={handleClose}>
                Cancel
              </Button>
            </Stack>
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            {history.current?.moments ? getMoments() : 'No History...'}
          </TabPanel>
        </Box>
      </Popover>
    </>
  );
}

import React from 'react';
import { Box, Button, Divider, Paper, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { navUrls } from './leftNavUrls';
import NavItem from './NavItem';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      position: 'fixed',
      left: 0,
      bottom: 0,
      top: '64px',
      paddingTop: '1px',
      display: 'flex',
      flexDirection: 'column',
      width: (props) => (props.open ? '250px' : '64px'),
      backgroundColor: theme.palette.paper,
      transition: 'width .2s',
      borderRadius: 0,
      borderRight: '1px solid',
      borderRightColor: theme.palette.grey[theme.palette.mode === 'dark' ? 800 : 300],
    },
    navList: {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'auto',
    },
    subIconButton: {
      width: '100%',
      paddingLeft: (props) => (props.open ? '35px' : ''),
    },
    subIconButtonLvl2: {
      width: '100%',
      paddingLeft: (props) => (props.open ? '70px' : ''),
    },
    iconButton: {
      padding: '15px 20px',
      width: '100%',
      borderRadius: 0,
      justifyContent: 'start',
      display: 'flex',
      gap: '20px',
      textTransform: 'none',
      color: theme.palette.text.secondary,
      flexShrink: 0,
    },
    iconButtonActive: {
      background:
        theme.palette.mode === 'light'
          ? 'linear-gradient(90deg, rgba(207,249,255,1) 0%, rgba(248,165,255,1) 100%)'
          : 'linear-gradient(90deg, #1d3853 0%, #633f66 100%)',
      color: theme.palette.mode === 'light' ? '#1976d2' : theme.palette.text.primary,
    },
    iconButtonText: {
      display: (props) => (props.open ? 'block' : 'none'),
      fontWeight: 'bold',
      fontSize: '0.8rem',
      width: '100%',
      textAlign: 'left',
    },
    expandIcon: {
      display: (props) => (props.open ? 'block' : 'none'),
    },
  })
);

const LeftNav = ({ open, toggle }) => {
  const classes = useStyles({
    open,
  });
  return (
    <Paper className={classes.root} sx={{ zIndex: 100 }}>
      <Box className={classes.navList}>
        {navUrls.map((item, index) => (
          <NavItem key={index} item={item} classes={classes} menuOpen={open} />
        ))}
      </Box>
      <Button className={classes.iconButton} sx={{ mt: 'auto' }}>
        <ManageAccountsIcon />
        <Typography className={classes.iconButtonText}>My Profile</Typography>
      </Button>
      <Divider />
      <Button className={classes.iconButton} onClick={toggle}>
        {open ? <ArrowBackIosOutlinedIcon /> : <ArrowForwardIosOutlinedIcon />}
        <Typography className={classes.iconButtonText}>Collapse</Typography>
      </Button>
    </Paper>
  );
};

export default LeftNav;

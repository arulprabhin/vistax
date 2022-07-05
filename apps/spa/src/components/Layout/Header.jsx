import React from 'react';
import { AppBar, Box, Button, Divider, Menu, Stack, Toolbar, Tooltip, Typography } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { useDispatch, useSelector } from 'react-redux';
import { createStyles, makeStyles } from '@mui/styles';
import { useHistory } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import GlobalSearch from '../GlobalSearch';
import { actions as userActions, user } from '../../store/modules/user';
import { SET_GLOBAL_SEARCH_RANGE, SET_USER, TOGGLE_THEME } from '../../store/types';
import VistaDateTimeRangeSelector from '../DateRangePicker';

const useStyles = makeStyles((theme) =>
  createStyles({
    themeSwitcherText: {
      color: theme.palette.mode === 'dark' ? 'white' : 'black',
    },
  })
);

const Header = () => {
  const classes = useStyles();

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.user);

  const history = useHistory();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const toggleTheme = () => {
    dispatch(userActions[TOGGLE_THEME]());
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    //userLogout
    dispatch(userActions[SET_USER](null));

    // localStorage.clear();

    history.push('/login');
  };

  const handleDateTimeRangeChange = (range, from, to, momentConfig) => {
    dispatch(userActions[SET_GLOBAL_SEARCH_RANGE]({ range: range, start: from, end: to, moment: momentConfig }));
  };

  return (
    <AppBar position="sticky">
      <Toolbar
        disableGutters
        sx={{
          display: 'flex',
          gap: '20px',
          paddingInline: '20px',
        }}
      >
        <img
          src="/images/logo.png"
          alt="Logo"
          height="25"
          style={{
            marginRight: '5px',
          }}
        />
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <GlobalSearch />
        </Box>
        <VistaDateTimeRangeSelector buttonVariant={'text'} onRangeChange={handleDateTimeRangeChange} />
        <Box sx={{ flexGrow: 0 }}>
          <Box onClick={handleOpenUserMenu} sx={{ p: 0, cursor: 'pointer' }}>
            <AccountCircleOutlinedIcon sx={{ color: 'white' }} />
            <ArrowDropDownOutlinedIcon sx={{ color: 'white' }} />
          </Box>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
              <Tooltip title={'Dark / Light mode switching'} arrow>
                <Box>
                  <Button className={classes.themeSwitcherText} onClick={toggleTheme}>
                    {theme === 'dark' ? <WbSunnyIcon /> : <NightsStayIcon />}
                  </Button>
                </Box>
              </Tooltip>
              <Tooltip title={'Profile Management'} arrow>
                <Box>
                  <Button className={classes.themeSwitcherText} onClick={handleLogout}>
                    <ManageAccountsIcon />
                  </Button>
                </Box>
              </Tooltip>
              <Tooltip title={'Logout'} arrow>
                <Box>
                  <Button className={classes.themeSwitcherText} onClick={handleLogout}>
                    <LogoutIcon />
                  </Button>
                </Box>
              </Tooltip>
            </Stack>
            <Divider />
            <img src={user ? user?.photo : ''} />
            <Box sx={{ display: 'flex', alignItems: 'center', padding: '10px 14px', gap: 2 }}>
              <Box>
                <Typography sx={{ fontWeight: 'bold' }}>{user ? user.name || user.username : 'Guest'}</Typography>
                <Typography sx={{ fontSize: '14px', color: 'gray' }}>{user ? user.role : 'Undefined'}</Typography>
              </Box>
            </Box>
            <Divider />
            <Box sx={{ padding: '10px 14px' }}>
              <Typography sx={{ fontWeight: 'bold' }}>My Profile</Typography>
              <Typography sx={{ fontSize: '14px', color: 'gray' }}>Edit Profile / Change Password</Typography>
            </Box>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

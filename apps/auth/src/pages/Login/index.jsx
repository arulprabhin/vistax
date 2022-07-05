import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AccountCircle, Visibility, VisibilityOff, VpnLock as VpnLockIcon } from '@mui/icons-material';
import { Box, Button, Card, CardContent, Grid, IconButton, TextField } from '@mui/material';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import { makeApiRequest } from '../../utils';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [alert, setAlert] = useState(false);
  const [alertmsg, setAlertmsg] = useState('');

  const history = useHistory();
  const dispatch = useDispatch();

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event) => setPassword(event.target.value);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async () => {
    let data = {
      username: username,
      password: password,
    };

    try {
      const response = await makeApiRequest({
        key: 'oauth',
        body: data,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        method: 'POST',
        stringifyFormData: true,
      });
      dispatch({
        type: 'user/SET_USER',
        payload: {
          clientId: response.data.body.clientId,
          userId: response.data.body.user.id,
          username: response.data.body.user.username,
          name: response.data.body.user.name,
          role: response.data.body.user.role,
          status: response.data.body.user.status,
          description: response.data.body.user.desc,
          theme: response.data.body.user.theme,
          loginAttempt: response.data.body.user.loginAttempt,
          photo: response.data.body.user.photo,
          token: {
            access: response.data.body.accessToken,
            accessExpiresOn: response.data.body.accessTokenExpiresAt,
            refresh: response.data.body.refreshToken,
            refreshExpiresOn: response.data.body.refreshTokenExpiresAt,
          },
        },
      });

      window.pendo.initialize({
        visitor: {
          id: response.data.body.user.username, // Required if user is logged in;
          role: response.data.body.user.role, // Optional
          // email:        // Recommended if using Pendo Feedback, or NPS Email
          full_name: response.data.body.user.name, // Recommended if using Pendo Feedback
          // You can add any additional visitor level key-values here,
          // as long as it's not one of the above reserved names.
          theme: response.data.body.user.theme,
          status: response.data.body.user.status,
        },

        account: {
          id: 'Mistnet NDR', // Required if using Pendo Feedback
          // name:         // Optional
          // is_paying:    // Recommended if using Pendo Feedback
          // monthly_value:// Recommended if using Pendo Feedback
          // planLevel:    // Optional
          // planPrice:    // Optional
          // creationDate: // Optional
          // You can add any additional account level key-values here,
          // as long as it's not one of the above reserved names.
        },
      });

      setAlertmsg('');
      setAlert(false);
      setUsername('');
      setPassword('');
      history.push('/dashboard');
    } catch (error) {
      setAlertmsg(error?.response?.data?.body?.msg || 'Error...');
      setAlert(true);
    }
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ height: '100vH', backgroundColor: 'gainsboro' }}
    >
      <form onSubmit={handleSubmit}>
        <Card sx={{ width: 520 }} variant={'elevation'}>
          <CardContent>
            <img src={'/images/logo.png'} style={{ display: 'block', margin: '30px auto 10px auto' }} />
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-end',
                margin: '25px auto 20px auto',
                width: 400,
                justifyContent: 'center',
              }}
            >
              <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField
                fullWidth
                id="uname"
                label="Username"
                variant="standard"
                value={username}
                onChange={handleChangeUsername}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-end',
                margin: '20px auto 20px auto',
                width: 400,
                justifyContent: 'center',
              }}
            >
              <VpnLockIcon sx={{ display: 'flex', color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField
                fullWidth
                onChange={handleChangePassword}
                id="password"
                value={password}
                label="Password"
                variant="standard"
                type={showPassword ? 'text' : 'password'}
              />
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </Box>
            <Collapse in={alert}>
              <Alert
                variant="filled"
                severity="error"
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setAlert()(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                sx={{ mb: 2 }}
              >
                {alertmsg}
              </Alert>
            </Collapse>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                margin: '65px auto 10px auto',
                width: 400,
              }}
            >
              <Button variant="contained" size="medium" onClick={handleSubmit}>
                Login
              </Button>
              <Button variant="contained" size="medium">
                SSO
              </Button>
            </Box>
          </CardContent>
        </Card>
      </form>
    </Grid>
  );
};

export default Login;

import React, { useEffect, useState } from 'react';
import { Alert, Box, Button, FormGroup, IconButton, InputAdornment, Paper, Snackbar, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { makeApiRequest } from '../../utils';
import { useForm } from 'react-hook-form';

export default function Okta() {
  const [open, setOpen] = useState(false);
  const [oktaData, setOktaData] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [url, setUrl] = useState('');
  const [token, setToken] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const handleUsername = (event) => setUsername(event.target.value);
  const handlePassword = (event) => setPassword(event.target.value);
  const handleUrl = (event) => setUrl(event.target.value);
  const handleToken = (event) => setToken(event.target.value);
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const handleClose = () => {
    setOpen(false);
  };
  const { handleSubmit } = useForm({
    mode: 'onChange',
  });

  const onSubmit = () => {
    let oktaData = {
      OktaUrlPath: url,
      OktaPassword: password,
      OktaToken: token,
      OktaUsername: username,
    };

    setOpen(true);
    makeApiRequest({
      key: 'saveOkta',
      body: oktaData,
    })
      .then((response) => {
        if (response.status === 'success') handleOpenDialog();
      })
      .catch((err) => console.log(err))
      .finally();
  };
  const getOkta = async () => {
    try {
      const response = await makeApiRequest({ key: 'getOkta', body: {}, stringifyFormData: true });
      setOktaData(response.data.body);
      setUsername(response.data.body.username);
      setPassword(response.data.body.password);
      setUrl(response.data.body.url);
      setToken(response.data.body.token);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOkta();
  }, []);

  return (
    <>
      <Paper variant="outlined" square sx={{ height: '435px', padding: '15px', minWidth: '100px', margin: 2 }}>
        <Box sx={{ minWidth: '100px', height: '350px' }}>
          <FormGroup>
            <TextField
              focused
              label="Username"
              variant="standard"
              sx={{ width: 350, margin: 2 }}
              value={username}
              onChange={handleUsername}
            />
            <TextField
              focused
              label="Password"
              variant="standard"
              sx={{ width: 350, margin: 2 }}
              value={password}
              onChange={handlePassword}
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              focused
              label="Url"
              variant="standard"
              sx={{ width: 350, margin: 2 }}
              value={url}
              onChange={handleUrl}
            />
            <TextField
              focused
              label="Token"
              variant="standard"
              sx={{ width: 350, margin: 2 }}
              value={token}
              onChange={handleToken}
            />
            <Button
              variant="outlined"
              sx={{ marginLeft: '100px', width: 50, margin: 2 }}
              color={'success'}
              onClick={handleSubmit(onSubmit)}
            >
              Update
            </Button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Updated successfully!
              </Alert>
            </Snackbar>
          </FormGroup>
        </Box>
      </Paper>
    </>
  );
}

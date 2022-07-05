import React, { useEffect, useState } from 'react';
import { Paper, Tab, Button, TextField, Stack, InputAdornment, IconButton } from '@mui/material';
import { Alert, Snackbar, FormGroup } from '@mui/material';
import { TabPanel, TabContext } from '@mui/lab';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { makeApiRequest } from '../../utils';
import { useForm } from 'react-hook-form';

export default function Shodan() {
  const [activeTab] = useState(0);
  const [url, setUrl] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [showApiKey, setShowApiKey] = useState(false);
  const [snackbar, setSnackbar] = useState({ show: false, msg: '', severity: 'error' });

  const handleUrl = (event) => {
    setUrl(event.target.value);
  };
  const handleKey = (event) => {
    setApiKey(event.target.value);
  };
  const handleClickShowApi = () => {
    setShowApiKey(!showApiKey);
  };
  const handleMouseDownApi = (e) => {
    e.preventDefault();
  };
  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbar({ show: false, msg: '', severity: 'error' });
  };
  const { handleSubmit } = useForm({
    mode: 'onChange',
  });
  const onSubmit = () => {
    let shodanData = {
      url: url,
      key: apiKey,
    };
    makeApiRequest({
      key: 'shodanConfig.save',
      body: shodanData,
    })
      .then((response) => response.data)
      .then((response) => {
        if (response.status === 'success') {
          setSnackbar({ show: true, msg: 'Shodan configuration was updated successfully', severity: 'success' });
          getShodanConfig();
        } else {
          throw 'Unable to update the shodan configuration';
        }
      })
      .catch((err) => console.log(err));
  };
  const getShodanConfig = async () => {
    makeApiRequest({ key: 'shodanConfig.fetch', stringifyFormData: true })
      .then((response) => response.data)
      .then((response) => {
        if (response.status === 'success') {
          setUrl(response.body.url);
          setApiKey(response.body.apiKey);
        } else {
          throw 'Shodan fetching has failed';
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getShodanConfig();
  }, []);

  return (
    <>
      <Paper>
        <TabContext value={activeTab}>
          <Tab label="Shodan" sx={{ borderBottom: 2, borderColor: 'primary.main' }} />
          <TabPanel value={0}>
            <Stack direction="column" spacing={2} ustifyContent="flex-start" alignItems="flex-start">
              <FormGroup>
                <TextField sx={{ mb: 2 }} variant="standard" label="URL" value={url} onChange={handleUrl} fullWidth />
                <TextField
                  variant="standard"
                  label="API key"
                  value={apiKey}
                  onChange={handleKey}
                  type={showApiKey ? 'text' : 'password'}
                  sx={{ mb: 2 }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowApi}
                          onMouseDown={handleMouseDownApi}
                        >
                          {showApiKey ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
                />
                <Stack direction="row" spacing={10} sx={{ pl: 5, pt: 3 }}>
                  {/*<Button variant="outlined" color={'primary'}>
                    Test
                  </Button>*/}
                  <Button variant="outlined" color={'success'} onClick={handleSubmit(onSubmit)} sx={{ ml: 17 }}>
                    Update
                  </Button>
                </Stack>
              </FormGroup>
            </Stack>
          </TabPanel>
        </TabContext>
      </Paper>
      <Snackbar
        open={snackbar.show}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.msg}
        </Alert>
      </Snackbar>
    </>
  );
}

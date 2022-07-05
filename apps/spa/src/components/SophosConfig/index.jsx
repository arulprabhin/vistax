import * as React from 'react';
import { Alert,Stack, Button, FormGroup, IconButton, InputAdornment, Paper, Snackbar, Tab, TextField } from '@mui/material';
import { makeApiRequest } from '../../utils';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { TabContext, TabPanel } from '@mui/lab';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export default function Sophos() {
  const [activeTab] = useState('0');
  const [clientId,setClientId]=useState('');
  const [secret,setSecret]=useState('');
  const [showSecret, setShowSecret] = useState(false);
  const [snackBar,setSnackBar]=useState({ show: false, msg: '', severity: 'error' });

  const handleClientId=(event)=>{
    setClientId(event.target.value);
  };
  const handleSecret=(event)=>{
    setSecret(event.target.value)
  }
  const handleClickShowSecret = () => {
    setShowSecret(!showSecret);
  };
  const handleMouseDownSecret = (e) => {
    e.preventDefault();
  };
  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackBar({ show: false, msg: '', severity: 'error' });
  };
  const { handleSubmit } = useForm({
    mode: 'onChange',
  });
  const onSubmit = () => {
    let sophosData = {
      clientId: clientId,
      clientSecret: secret,
    };
    makeApiRequest({
      key: 'sophosConfig.save',
      body: sophosData,
    })
      .then((response) => response.data)
      .then((response) => {
        if (response.status === 'success'){
          setSnackBar({ show: true, msg: 'Sophos configuration was updated successfully', severity: 'success' });
          getSophosData();
        }else {
          throw 'Unable to update the sophos configuration';
        }
      })
      .catch((err) => console.log(err))
  }
  const getSophosData = async () => {
    makeApiRequest({ key: 'sophosConfig.fetch', stringifyFormData: true })
      .then((response) => response.data)
      .then((response) => {
        if (response.status === 'success') {
          setClientId(response.body.clientId);
          setSecret(response.body.clientSecret);
        } else {
          throw 'Unable to fetch sophos settings';
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getSophosData();
  }, []);

  return (
    <>
    <Paper>
      <TabContext value={activeTab}>
        <Tab label="Sophos" sx={{ borderBottom: 2, borderColor: 'primary.main' }} />
        <TabPanel value="0">
          <Stack direction="column" spacing={2} ustifyContent="flex-start" alignItems="flex-start">
            <FormGroup>
              <TextField label="Client ID" variant="standard" value={clientId} onChange={handleClientId} fullWidth/>
              <TextField
                label="Client Secret"
                variant="standard"
                value={secret}
                sx={{mt:2}}
                onChange={handleSecret}
                type={showSecret ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowSecret}
                        onMouseDown={handleMouseDownSecret}
                      >
                        {showSecret ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                fullWidth
              />
              <Stack direction="row" spacing={10} sx={{ pl: 5, pt: 3 }}>
                {/*<Button variant="outlined" color={'primary'}>*/}
                {/*  Test*/}
                {/*</Button>*/}
                <Button variant="outlined" color={'success'} onClick={handleSubmit(onSubmit)} sx={{ml:17}}>
                  Update
                </Button>
              </Stack>
            </FormGroup>
          </Stack>
        </TabPanel>
      </TabContext>
    </Paper>
      <Snackbar
        open={snackBar.show}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          {snackBar.msg}
        </Alert>
      </Snackbar>
   </>
  );
}

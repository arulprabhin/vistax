import React, { useEffect, useState } from 'react';
import { Alert, Box, Button, FormGroup, Snackbar, TextField } from '@mui/material';
import { makeApiRequest } from '../../utils';
import { useForm } from 'react-hook-form';
import Grid from '@mui/material/Grid';

export default function SyslogConfig() {
  const getSyslogConfig = async () => {
    try {
      const response = await makeApiRequest({ key: 'syslogAddConfig', body: {}, stringifyFormData: true });
      setIp(response.data.body.ip);
      setPort(response.data.body.port);
    } catch (error) {
      console.log(error);
    }
  };
  const [ip, setIp] = useState('');
  const [port, setPort] = useState('');
  const [open, setOpen] = useState(false);
  const handleIp = (event) => setIp(event.target.value);
  const handlePort = (event) => setPort(event.target.value);
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const { handleSubmit } = useForm({
    mode: 'onChange',
  });

  useEffect(() => {
    getSyslogConfig();
  }, []);

  const onSubmit = () => {
    let data = {
      ip: ip,
      port: port,
    };

    setOpen(true);
    makeApiRequest({
      key: 'syslogSaveConfig',
      body: data,
    })
      .then((response) => {
        if (response.status === 'success') handleOpenDialog();
      })
      .catch((err) => console.log(err))
      .finally();
  };

  return (
    <Box sx={{ width: 400 }}>
      <FormGroup>
        <TextField label="Server IP" variant="standard" value={ip} sx={{ my: 3 }} onChange={handleIp} />
        <TextField label="Port" variant="standard" value={port} sx={{ my: 3 }} onChange={handlePort} />
        <Grid container justifyContent="flex-end">
          <Button variant="outlined" color={'success'} onClick={handleSubmit(onSubmit)}>
            Update
          </Button>
        </Grid>

        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Updated successfully!
          </Alert>
        </Snackbar>
      </FormGroup>
    </Box>
  );
}

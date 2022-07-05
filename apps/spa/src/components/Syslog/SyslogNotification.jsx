import React, { useEffect, useState } from 'react';
import { Alert, Box, Button, FormControlLabel, FormGroup, Grid, Snackbar, Switch } from '@mui/material';
import ColorChangingSlider from '@logrhythm/shared/ColorChangingSlider';
import { makeApiRequest } from '../../utils';
import { useController, useForm } from 'react-hook-form';
import Stack from '@mui/material/Stack';

function SliderWithValidation(props) {
  const { field, fieldState } = useController(props);
  delete field.value;
  return <ColorChangingSlider {...field} label={'score'} {...props} />;
}

export default function SyslogNotification() {
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const [notificationPrefs, setNotificationPrefs] = React.useState({
    perIncident: false,
    perPolicy: false,
    perCases: false,
    perTests: false,
    scoreThreshold: 0,
  });
  const getSyslogNotify = async () => {
    try {
      const response = await makeApiRequest({ key: 'syslognotificationAddConfig', body: {}, stringifyFormData: true });
      setNotificationPrefs(response.data.body);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSyslogNotify();
  }, []);

  const handleAlertPerIncident = (event) =>
    setNotificationPrefs({ ...notificationPrefs, perIncident: event.target.checked });
  const handleAlertPerCases = (event) =>
    setNotificationPrefs({ ...notificationPrefs, perPolicy: event.target.checked });
  const handleAlertPerPolicy = (event) =>
    setNotificationPrefs({ ...notificationPrefs, perCases: event.target.checked });
  const handleAlertPerTest = (event) => setNotificationPrefs({ ...notificationPrefs, perTests: event.target.checked });
  const handleScore = (value) => setNotificationPrefs({ ...notificationPrefs, scoreThreshold: value });
  const handleOpenDialog = () => setOpenDialog(true);
  const handleClose = () => setOpen(false);

  const { handleSubmit, control } = useForm({
    mode: 'onChange',
    defaultValues: {
      score: 0,
    },
  });

  const onSubmit = (validate) => {
    let syslognotifyData = {
      ...notificationPrefs,
      scoreThreshold: validate.score,
    };
    setOpen(true);
    makeApiRequest({
      key: 'syslognotificationSaveConfig',
      body: syslognotifyData,
    })
      .then((response) => {
        if (response.status === 'success') handleOpenDialog();
      })
      .catch((err) => console.log(err))
      .finally();
  };

  return (
    <Box sx={{ width: 500, mt: 2 }}>
      <form>
        <FormGroup>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="stretch"
            /*divider={<Divider orientation="vertical" flexItem />}*/
            spacing={1}
            sx={{ my: 2 }}
          >
            <FormControlLabel
              control={<Switch checked={notificationPrefs.perIncident} name="perIncident" />}
              label="Alert Per Incident"
              onChange={handleAlertPerIncident}
              style={{ margin: 5 }}
            />
            <FormControlLabel
              control={<Switch checked={notificationPrefs.perCases} name="perCases" />}
              label="Alert Per Case"
              onChange={handleAlertPerCases}
              style={{ margin: 5 }}
            />
          </Stack>
          <Stack direction="row" justifyContent="space-between" alignItems="stretch" spacing={1} sx={{ my: 2 }}>
            <FormControlLabel
              control={<Switch checked={notificationPrefs.perPolicy} name="perPolicy" />}
              label="Alert Per Policy"
              onChange={handleAlertPerPolicy}
              style={{ margin: 5 }}
            />
            <FormControlLabel
              control={<Switch checked={notificationPrefs.perTests} name="perTests" />}
              label="Alert Per Test"
              onChange={handleAlertPerTest}
              style={{ margin: 5 }}
            />
          </Stack>
          <SliderWithValidation
            control={control}
            name="score"
            value={notificationPrefs.scoreThreshold}
            onchange={handleScore}
            rules={{ min: 1, required: true }}
          />
          <Grid container justifyContent="flex-end" sx={{ mt: 2 }}>
            <Button variant="outlined" color={'success'} onClick={handleSubmit(onSubmit)}>
              Update
            </Button>
          </Grid>
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          >
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
              Updated successfully!
            </Alert>
          </Snackbar>
        </FormGroup>
      </form>
    </Box>
  );
}

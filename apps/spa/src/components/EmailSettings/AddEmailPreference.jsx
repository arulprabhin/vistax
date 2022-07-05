import React, { useState } from 'react';
import VistaDialog from '@logrhythm/shared/VistaDialog';
import { makeApiRequest } from '../../utils';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Button,
  Alert,
  Tooltip,
  TextField,
  FormControlLabel,
  Switch,
  Grid,
  Snackbar,
  IconButton,
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import SliderWithValidation, { validationSchema } from './validation';

export default function AddEmailPreference() {
  const [openDialog, setOpenDialog] = useState(false);
  const [snackBar, setSnackBar] = useState({ show: false, msg: '', severity: 'error' });

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const [newEmail, setNewEmail] = useState('');
  const [alertPerIncident, setAlertPerIncident] = useState(false);
  const [alertPerCases, setAlertPerCases] = useState(false);
  const [alertPerPolicy, setAlertPerPolicy] = useState(false);
  const [alertPerTest, setAlertPerTest] = useState(false);
  const [autoEmail, setAutoEmail] = useState(false);
  const [scoreThreshold, setScoreThreshold] = useState();

  const handleEmail = (event) => setNewEmail(event.target.value);
  const handleAlertPerIncident = (event) => setAlertPerIncident(event.target.checked);
  const handleAlertPerCases = (event) => setAlertPerCases(event.target.checked);
  const handleAlertPerPolicy = (event) => setAlertPerPolicy(event.target.checked);
  const handleAlertPerTest = (event) => setAlertPerTest(event.target.checked);

  const handleSnackBarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackBar({ show: false, msg: '', severity: 'error' });
  };
  const handleClear = (event) => {
    setAlertPerIncident(event.target.checked);
    setAlertPerCases(event.target.checked);
    setAlertPerPolicy(event.target.checked);
    setAlertPerTest(event.target.checked);
  };
  const handleAutoEmail = (event) => {
    setAutoEmail(event.target.checked);
    handleClear(event);
  };
  const handleScore = (value) => setScoreThreshold(value);
  const handleCloseDialog = (event) => {
    setOpenDialog(false);
    setAutoEmail(event.target.unchecked);
    handleClear(event);
  };

  const onSubmit = (validationEmail) => {
    let data = {
      email: newEmail,
      perCases: alertPerCases,
      perIncident: alertPerIncident,
      perPolicy: alertPerPolicy,
      perTests: alertPerTest,
      automatic: autoEmail,
      scoreThreshold: scoreThreshold,
      ...validationEmail,
    };

    makeApiRequest({
      key: 'addUpdateEmailPref',
      body: data,
    })
      .then((response) => response.data)
      .then((response) => {
        if (response.status === 'success') {
          handleCloseDialog();
          setSnackBar({ show: true, msg: 'The email was added successfully to the email notification list', severity: 'success' });
        } else {
          handleCloseDialog();
          setSnackBar({ show: true, msg: 'Unable to add the email to the email notification list', severity: 'error' });
        }
      })
      .catch((err) => console.log(err))
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',

    defaultValues: {
      scoreThreshold: 0,
      test: '',
    },
  });
  console.log(errors);
  return (
    <>
      <Tooltip title={'Add New Email'} arrow>
        <IconButton aria-label="Add Email" size="large" color={'info'} onClick={handleOpenDialog}>
          <PersonAddAltIcon fontSize="inherit" />
        </IconButton>
      </Tooltip>
      <VistaDialog
        isOpen={openDialog}
        handleClose={handleCloseDialog}
        title="Add Email"
        disableBackdropClick={true}
        maxWidth="sm"
        Actions={
          <>
            <Button startIcon={<SaveIcon />} color={'success'} variant={'outlined'} onClick={handleSubmit(onSubmit)}>
              Save
            </Button>
          </>
        }
      >
          <Grid container spacing={1} direction='column'>
            <Grid item marginLeft={3} marginRight={4}>
          <TextField
            label="Email"
            fullWidth
            variant={'standard'}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleEmail}
            {...register('email')}
            error={!!errors.email}
            helperText={errors?.email?.message}
          />
            </Grid>
          <Grid item>
            <SliderWithValidation
              control={control}
              onChange={(value, event) => {
                handleScore(value);
              }}
              name="scoreThreshold"
              rules={{ min: 1, required: true }}
              error={!!errors.scoreThreshold}
              msg={errors?.scoreThreshold?.message}
            />
          </Grid>
            <Grid item>
          <FormControlLabel
            control={<Switch onChange={handleAutoEmail} checked={autoEmail} />}
            label="All Email"
            sx={{ ml: 2 }}
          />
            </Grid>
          <Grid item>
            <FormControlLabel
              control={<Switch onChange={handleAlertPerIncident} checked={alertPerIncident} />}
              label="Alert Per Incident"
              sx={{ ml: 2 }}
            />
            <FormControlLabel
              control={<Switch onChange={handleAlertPerCases} checked={alertPerCases} />}
              label="Alert Per Case"
              sx={{ ml: 12 }}
            />
          </Grid>
          <Grid item>
            <FormControlLabel
              control={<Switch onChange={handleAlertPerPolicy} checked={alertPerPolicy} />}
              label="Alert Per Policy"
              sx={{ ml: 2 }}
            />
            <FormControlLabel
              control={<Switch onChange={handleAlertPerTest} checked={alertPerTest} />}
              label="Alert Per Test"
              sx={{ ml: 14 }}
            />
          </Grid>
          </Grid>
          <Snackbar
            open={snackBar.show}
            autoHideDuration={6000}
            onClose={handleSnackBarClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          >
            <Alert onClose={handleSnackBarClose} severity={snackBar.severity} sx={{ width: '100%' }}>
              {snackBar.msg}
            </Alert>
          </Snackbar>
      </VistaDialog>
    </>
  );
}

import React, { useState } from 'react';
import VistaDialog from '@logrhythm/shared/VistaDialog';
import ColorChangingSlider from '@logrhythm/shared/ColorChangingSlider';
import { makeApiRequest } from '../../utils';
import { useForm, useController } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {validationSchema} from './validation';
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
  FormHelperText
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';

function SliderWithValidation(props) {
  const { field, fieldState } = useController(props);
  delete field.value;
  return (
    <div>
      <ColorChangingSlider {...field} value={props.value} label={'score'} />
      <FormHelperText error={props.error || fieldState.invalid}>
        {props.msg ?? fieldState?.error?.message}
      </FormHelperText>
    </div>
  );
}

export default function EditEmailPreference({row}) {
  const [openDialog, setOpenDialog] = useState(false);
  const [snackBar, setSnackBar] = useState({ show: false, msg: '', severity: 'error' });
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  const handleSnackBarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackBar({ show: false, msg: '', severity: 'error' });
  };

  const [alertPerIncident, setAlertPerIncident] = useState(row.mailPerIncident);
  const [alertPerCases, setAlertPerCases] = useState(row.mailPerCases);
  const [alertPerPolicy, setAlertPerPolicy] = useState(row.mailPerPolicy);
  const [alertPerTest, setAlertPerTest] = useState(row.mailPerTests);
  const [autoEmail, setAutoEmail] = useState(row.automaticMailing);
  const [scoreThreshold, setScoreThreshold] = useState(row.mailScoreThreshold);

  const handleAlertPerIncident = (event) => setAlertPerIncident(event.target.checked);
  const handleAlertPerCases = (event) => setAlertPerCases(event.target.checked);
  const handleAlertPerPolicy = (event) => setAlertPerPolicy(event.target.checked);
  const handleAlertPerTest = (event) => {
    setAlertPerTest(event.target.checked);
  };
  const handleAutoEmail = (event) => {
    setAutoEmail(event.target.checked);
    setAlertPerIncident(event.target.checked);
    setAlertPerCases(event.target.checked);
    setAlertPerPolicy(event.target.checked);
    setAlertPerTest(event.target.checked);
  };
  const handleScore = (value) => setScoreThreshold(value);

  const onSubmit = (validationEmail) => {
    let data = {
      email: validationEmail.email,
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
      pathParam: row.id,
    })
      .then((response) => response.data)
      .then((response) => {
        if (response.status === 'success') {
          handleCloseDialog();
          setSnackBar({ show: true, msg: 'Email notification preferences were updated successfully', severity: 'success' });
        } else {
          handleCloseDialog();
          setSnackBar({ show: true, msg: 'Unable to update the email notification preferences', severity: 'error' });
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
    },
  });

  return (
    <>
      <Tooltip title={'Edit Email'} arrow>
        <IconButton aria-label="Edit Email" size="small" color={'success'} onClick={handleOpenDialog}>
          <EditIcon fontSize="inherit" />
        </IconButton>
      </Tooltip>
      <VistaDialog
        isOpen={openDialog}
        handleClose={handleCloseDialog}
        title="Update Email"
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
            value={row.email}
            required
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
              value={scoreThreshold}
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
      </VistaDialog>
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
    </>
  );
}

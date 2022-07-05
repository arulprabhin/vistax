import React, { useState } from 'react';
import { Alert, Box, Button, FormControl, FormControlLabel, Grid, IconButton } from '@mui/material';
import { InputAdornment, Snackbar, Stack, Switch, TextField, Tooltip } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import SaveIcon from '@mui/icons-material/Save';
import { makeApiRequest } from '../../utils';
import { DatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema, SplitButtonMenuWithValidation, SliderWithValidation } from './validation';
import ImageSelector from '@logrhythm/shared/ImageSelector';
import VistaDialog from '@logrhythm/shared/VistaDialog';

export default function NewOperator() {
  const [showPassField, setShowPassField] = useState(false);
  const [showConfirmPassField, setShowConfirmPassField] = useState(false);
  const [expiresOn, setExpiresOn] = useState(null);
  const [enableEmailAlerts, setEnableEmailAlerts] = useState(false);
  const [active, setActive] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [alertIncident, setAlertIncident] = useState(false);
  const [alertCase, setAlertCase] = useState(false);
  const [alertPolicy, setAlertPolicy] = useState(false);
  const [alertTest, setAlertTest] = useState(false);
  const [all, setAll] = useState(false);
  const [scoreThreshold, setScoreThreshold] = useState();
  const [image, setImage] = useState('');
  const [snackBar, setSnackBar] = useState({ show: false, msg: '', severity: 'error' });

  const roles = ['- Select -', 'Administrator', 'Security Analyst', 'Read-only Security Analyst'];
  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackBar({ show: false, msg: '', severity: 'error' });
  };
  const handleScore = (value) => setScoreThreshold(value);
  const handleCloseDialog = () => {
    setOpenDialog(false);
    setActive(false);
    setScoreThreshold(0);
    setImage('');
    setAlertTest(false);
    setAlertPolicy(false);
    setAlertIncident(false);
    setAlertCase(false);
    setExpiresOn(null);
  };
  const handleOpenDialog = () => setOpenDialog(true);
  const handleActive = (event) => setActive(event.target.checked);
  const handleAlertIncident = (event) => setAlertIncident(event.target.checked);
  const handleAlertCase = (event) => setAlertCase(event.target.checked);
  const handleAlertPolicy = (event) => setAlertPolicy(event.target.checked);
  const handleAlertTest = (event) => setAlertTest(event.target.checked);
  const handleAll = (event) => {
    setAll(event.target.checked);
    setAlertIncident(event.target.checked);
    setAlertCase(event.target.checked);
    setAlertPolicy(event.target.checked);
    setAlertTest(event.target.checked);
  };
  const handleClickShowPassField = () => setShowPassField(!showPassField);
  const handleClickCShowPassField = () => setShowConfirmPassField(!showConfirmPassField);
  const handleMouseDownPassField = (event) => event.preventDefault();
  const showFields = (event) => setEnableEmailAlerts(event.target.checked);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
    defaultValues: {
      username: '',
      email: '',
      fullName: '',
      password: '',
      confirmPassword: '',
      active: false,
      role: '- Select -',
      scoreThreshold: 0,
    },
  });
  const onSubmit = (validatedData) => {
    let data = {
      name: validatedData.fullName,
      username: validatedData.username,
      password: validatedData.password,
      email: validatedData.email,
      role: validatedData.role,
      isActive: active,
      expiresOn: expiresOn ? expiresOn.getTime() : expiresOn,
      photo: image,
      ...validatedData,
    };
    ['fullName', 'confirmPassword', 'active'].forEach((e) => delete data[e]);
    makeApiRequest({
      key: 'addUpdateUser',
      body: data,
    })
      .then((response) => response.data)
      .then((response) => {
        if (response.status === 'success') {
          handleCloseDialog();
          setSnackBar({ show: true, msg: 'Operator was added successfully', severity: 'success' });
        } else {
          throw 'Unable to add the new operator';
        }
      })
      .catch((err) => {
        console.log(err);
      });
    if (enableEmailAlerts) {
      let emailNotification = {
        email: validatedData.email,
        perCases: alertCase,
        perIncident: alertIncident,
        perPolicy: alertPolicy,
        perTests: alertTest,
        automatic: all,
        scoreThreshold: validatedData.scoreThreshold,
      };
      makeApiRequest({
        key: 'addUpdateEmailPref',
        body: emailNotification,
      })
        .then((response) => response.data)
        .then((response) => {
          if (response.status === 'success') {
            handleCloseDialog();
          } else {
            setSnackBar({
              show: true,
              msg: 'Unable to add the email notification list for this operator',
              severity: 'error',
            });
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally();
    }
  };
  return (
    <>
      <Tooltip title={'Add new operator'} arrow>
        <IconButton aria-label="Add Operator" size="large" color={'info'} onClick={handleOpenDialog}>
          <PersonAddAltIcon fontSize="inherit" />
        </IconButton>
      </Tooltip>
      <VistaDialog
        handleClose={handleCloseDialog}
        isOpen={openDialog}
        title="New Operator"
        disableBackdropClick={true}
        maxWidth="md"
        Actions={
          <Button variant="outlined" color={'success'} startIcon={<SaveIcon />} onClick={handleSubmit(onSubmit)}>
            Save
          </Button>
        }
      >
        <Stack direction="row" spacing={2} ustifyContent="flex-start" alignItems="flex-start">
          <ImageSelector showButton onChange={(src) => setImage(src)} />
          <Stack direction="column" spacing={2} sx={{ width: '100%' }}>
            <Grid container spacing={2} alignItems="flex-end">
              <Grid item xs={6}>
                <TextField
                  label="Username"
                  variant="standard"
                  {...register('username')}
                  error={!!errors.username}
                  helperText={errors?.username?.message}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Email"
                  variant="standard"
                  {...register('email')}
                  error={!!errors.email}
                  helperText={errors?.email?.message}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Full Name"
                  variant="standard"
                  {...register('fullName')}
                  error={!!errors.fullName}
                  helperText={errors?.fullName?.message}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <SplitButtonMenuWithValidation
                  control={control}
                  name="role"
                  rules={{ required: true }}
                  label="Role: "
                  options={roles}
                />
              </Grid>
            </Grid>
          </Stack>
        </Stack>

        <Stack direction="row" spacing={2} sx={{ marginTop: '3%' }}>
          <TextField
            fullWidth
            label="Password"
            variant="standard"
            type={showPassField ? 'text' : 'password'}
            required
            {...register('password')}
            error={!!errors.password}
            helperText={errors?.password?.message}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassField}
                    onMouseDown={handleMouseDownPassField}
                  >
                    {showPassField ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            fullWidth
            label="Confirm Password"
            variant="standard"
            type={showConfirmPassField ? 'text' : 'password'}
            required
            {...register('confirmPassword')}
            error={!!errors.confirmPassword}
            helperText={errors?.confirmPassword?.message}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickCShowPassField}
                    onMouseDown={handleMouseDownPassField}
                  >
                    {showConfirmPassField ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>

        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2} sx={{ mt: 2 }}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Expires On"
              showDaysOutsideCurrentMonth={true}
              showTodayButton={true}
              clearable={true}
              inputFormat={'yyyy-MM-dd'}
              value={expiresOn}
              onChange={(newValue) => {
                setExpiresOn(newValue);
              }}
              renderInput={(params) => (
                <TextField
                  variant="standard"
                  {...params}
                  error={!!errors.expiresOn}
                  helperText={errors?.expiresOn?.message || params?.inputProps?.placeholder}
                  readOnly
                  sx={{ width: '50%' }}
                />
              )}
            />
          </LocalizationProvider>
          <FormControl {...register('active')} error={!!errors.active}>
            <FormControlLabel
              control={<Switch value={active} onChange={handleActive} checked={active} />}
              defaultChecked
              label="Active"
            />
          </FormControl>
          <FormControl {...register('emailNotification')}>
            <FormControlLabel
              control={<Switch value={enableEmailAlerts} checked={enableEmailAlerts} onChange={showFields} />}
              label="Email Notification"
            />
          </FormControl>
        </Stack>

        {enableEmailAlerts && (
          <>
            <Stack direction="row" spacing={9} sx={{ mt: 3 }}>
              <FormControlLabel
                control={<Switch checked={alertIncident} />}
                onChange={handleAlertIncident}
                label="Alert per Incident"
              />
              <FormControlLabel
                control={<Switch checked={alertCase} />}
                onChange={handleAlertCase}
                label="Alert per Case"
              />
              <FormControlLabel
                control={<Switch checked={alertPolicy} />}
                onChange={handleAlertPolicy}
                label="Alert per Policy"
              />
              <FormControlLabel
                control={<Switch checked={alertTest} />}
                onChange={handleAlertTest}
                label="Alert per Test"
              />
            </Stack>
            <Stack container direction="row" spacing={3} sx={{ marginTop: '3%' }}>
              <FormControlLabel control={<Switch />} onChange={handleAll} label="Automatic Email" />
              <Box width={'100%'}>
                <SliderWithValidation
                  control={control}
                  onChange={(value) => {
                    handleScore(value);
                  }}
                  value={scoreThreshold}
                  name="scoreThreshold"
                  rules={{ min: 1, required: true }}
                  error={!!errors.scoreThreshold}
                  msg={errors?.scoreThreshold?.message}
                />
              </Box>
            </Stack>
          </>
        )}
      </VistaDialog>
      <Snackbar
        open={snackBar.show}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleSnackbarClose} severity={snackBar.severity} sx={{ width: '100%' }}>
          {snackBar.msg}
        </Alert>
      </Snackbar>
    </>
  );
}

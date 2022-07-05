import React, { useState } from 'react';
import { Alert, Button, FormControl, FormControlLabel } from '@mui/material';
import { Grid, IconButton, Snackbar, Stack, Switch, TextField, Tooltip } from '@mui/material';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import { makeApiRequest } from '../../utils';
import { useController, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import SplitButtonMenu from '@logrhythm/shared/SplitButtonMenu';
import ImageSelector from '@logrhythm/shared/ImageSelector';
import VistaDialog from '@logrhythm/shared/VistaDialog';

function SplitButtonMenuWithValidation(props) {
  const { field } = useController(props);
  const btnColor = 'info';
  return (
    <div>
      <SplitButtonMenu {...field} label={props.label} value={props.value} options={props.options} color={btnColor} />
    </div>
  );
}

export default function UpdateOperator({ row }) {
  const [openDialog, setOpenDialog] = useState(false);
  const [expiresOn, setExpiresOn] = React.useState();
  const [active, setActive] = useState(row.status);
  const [image, setImage] = useState('');
  const [snackBar, setSnackBar] = useState({ show: false, msg: '', severity: 'error' });

  const handleSnackBarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackBar({ show: false, msg: '', severity: 'error' });
  };
  const handleCloseDialog = () => setOpenDialog(false);
  const handleOpenDialog = () => setOpenDialog(true);
  const handleActive = (event) => setActive(event.target.checked);

  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .required('Full Name is required')
      .min(5, 'Full name must be at least 5 characters')
      .max(20, 'Full name must be at least 20 characters'),
    email: Yup.string().required('Email is required').email('Email is invalid'),
    //active: Yup.bool().oneOf([true], 'This field must be checked'),
    /*roleValidation: Yup.string()
      .required('Please Choose One')
      .notOneOf(['undefined', '', '- Select -'], 'Please Select A Role'),*/
  });
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });
  const onSubmit = (validateData) => {
    let data = {
      name: validateData.fullName,
      email: validateData.email,
      role: validateData.role ? validateData.role : row.role,
      isActive: active ? active : row.status,
      expiresOn: expiresOn ? expiresOn.getTime() : expiresOn,
      photo: image,
    };
    makeApiRequest({
      key: 'addUpdateUser',
      body: data,
      pathParam: row.id,
    })
      .then((response) => response.data)
      .then((response) => {
        if (response.status === 'success') {
          handleCloseDialog();
          setSnackBar({ show: true, msg: 'Operator was updated successfully', severity: 'success' });
        } else {
          setSnackBar({ show: true, msg: 'Unable to update the operator', severity: 'error' });
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally();
  };

  return (
    <>
      <Tooltip title={'Edit operator'} arrow>
        <IconButton aria-label="Edit Operator" size="large" color={'info'} onClick={handleOpenDialog}>
          <EditIcon />
        </IconButton>
      </Tooltip>
      <VistaDialog
        handleClose={handleCloseDialog}
        isOpen={openDialog}
        title="Edit Operator"
        disableBackdropClick={true}
        maxWidth="md"
        Actions={
          <>
            <Button variant="outlined" color={'success'} startIcon={<SaveIcon />} onClick={handleSubmit(onSubmit)}>
              Save
            </Button>
          </>
        }
      >
        <Stack direction="row" spacing={2} ustifyContent="flex-start" alignItems="flex-start">
          <ImageSelector showButton src={row.photo} onChange={(src) => setImage(src)} />
          <Stack direction="column" spacing={2} sx={{ width: '100%' }}>
            <Grid container spacing={2} alignItems="flex-end">
              <Grid item xs={6}>
                <TextField
                  label="Full Name"
                  variant="standard"
                  defaultValue={row.name}
                  {...register('fullName')}
                  error={!!errors.fullName}
                  helperText={errors?.fullName?.message}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={6} alignItems="flex-end">
                <SplitButtonMenuWithValidation
                  control={control}
                  name="role"
                  rules={{ required: true }}
                  label={'Role : '}
                  options={['- Select -', 'Administrator', 'Security Analyst', 'Read-only Security Analyst']}
                  value={row.role}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Expires On"
                    showDaysOutsideCurrentMonth={true}
                    showTodayButton={true}
                    clearable={true}
                    inputFormat={'yyyy-MM-dd'}
                    defaultValue={row.expiry_date}
                    value={expiresOn}
                    onChange={(newValue) => {
                      setExpiresOn(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        variant="standard"
                        fullWidth
                        {...params}
                        readOnly
                        error={!!errors.expiresOn}
                        helperText={errors?.expiresOn?.message || params?.inputProps?.placeholder}
                      />
                    )}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Email"
                  variant="standard"
                  {...register('email')}
                  error={!!errors.email}
                  helperText={errors?.email?.message}
                  defaultValue={row.email}
                  required
                  fullWidth
                />
              </Grid>
            </Grid>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={4}>
          <FormControl {...register('active')} defaultChecked error={!!errors.active}>
            <FormControlLabel
              control={<Switch defaultChecked={row.status} onChange={handleActive} checked={active} />}
              label="Active"
            />
          </FormControl>
          <FormControlLabel control={<Switch defaultChecked={row.blocked} />} label="Locked User" />
        </Stack>
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

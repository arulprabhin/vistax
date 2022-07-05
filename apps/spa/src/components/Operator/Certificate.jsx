import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import DownloadIcon from '@mui/icons-material/Download';
import { Tooltip } from '@mui/material';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import InputAdornment from '@mui/material/InputAdornment';
import VistaDialog from '@logrhythm/shared/VistaDialog';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';

export default function Certificate() {
  const [openDialog, setOpenDialog] = useState(false);

  const handleCloseDialog = () => setOpenDialog(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  const handleSubmit = () => {
    return <></>;
  };

  return (
    <>
      <Tooltip title={'Generate Certificate'}>
        <IconButton onClick={handleOpenDialog} color="secondary" aria-label="Generate Certificate">
          <CardMembershipIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title={'Download Certificate'}>
        <IconButton color="secondary" aria-label="Download Certificate">
          <DownloadIcon />
        </IconButton>
      </Tooltip>
      <VistaDialog
        handleClose={handleCloseDialog}
        isOpen={openDialog}
        title={'Generate Certificate'}
        disableBackdropClick={true}
        maxWidth={'md'}
        Actions={
          <>
            <Button variant="outlined" color={'success'} onClick={handleSubmit} startIcon={<SaveIcon />}>
              Save
            </Button>
          </>
        }
      >
        <Generate />
      </VistaDialog>
    </>
  );
}

export function Generate() {
  const [passField, setPassField] = useState('');
  const [showPassField, setShowPassField] = useState(false);

  const handleChangePassField = (event) => setPassField(event.target.value);

  const handleClickShowPassField = () => {
    setShowPassField(!showPassField);
  };

  const handleMouseDownPassField = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <FormControl fullWidth variant="standard">
            <InputLabel id="role">Country</InputLabel>
            <Select id="country" labelId="country" label="Role">
              <MenuItem value="India">India</MenuItem>
              <MenuItem value="America">America</MenuItem>
              <MenuItem value="Australia">Australia</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth id="state" label="State" variant="standard" type="text" />
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth id="locality" label="Locality" variant="standard" type="text" />
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth id="organization" label="Organization" variant="standard" type="text" />
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth id="organizationunit" label="Organization Unit" variant="standard" type="text" />
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth id="emailid" label="Email Id" variant="standard" type="email" />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            onChange={handleChangePassField}
            id="passField"
            value={passField}
            label="Password"
            variant="standard"
            type={showPassField ? 'text' : 'password'}
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
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            onChange={handleChangePassField}
            id="passField"
            value={passField}
            label="Password"
            variant="standard"
            type={showPassField ? 'text' : 'password'}
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
        </Grid>
      </Grid>
    </>
  );
}

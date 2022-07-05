import React, { useEffect, useRef } from 'react';
import VistaDialog from '@logrhythm/shared/VistaDialog';
import { makeApiRequest } from '../../utils';
import {
  Button,
  Checkbox,
  FormControl,
  FormGroup,
  InputLabel,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from '@mui/material';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';

export default function EmailAlertOptions() {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState([]);
  const [selectEmail, setSelectEmail] = React.useState([]);
  const [updateEmail, setUpdateEmail] = React.useState([]);
  const [determination, setDetermination] = React.useState();
  const [note, setNote] = React.useState();
  const isCancelled = useRef(false);

  const handleChangeEmail = (event) => {
    const {
      target: { value },
    } = event;
    setUpdateEmail(value);
    setSelectEmail(typeof value === 'string' ? value.split(',') : value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handlesave = () => {
    alert('Email Not Sent');
    setOpen(false);
    loadAlertEmail();
  };

  const loadAlertEmail = async () => {
    try {
      const response = await makeApiRequest({ key: 'alertSelectedEmail' });
      // setSelectedEmail(response.data.body || {});
    } catch (error) {
      console.log(error);
    }
  };
  const handleClose = () => {
    setOpen(false);
  };

  const getSelectedEmails = async () => {
    isCancelled.current = false;
    setEmail([]);
    try {
      const response = await makeApiRequest({
        key: 'selectedEmail',
      });
      if (response.data.total >= 1) {
        let source = [];
        response.data.body.forEach((item) => {
          source.push(item.email);
        });
        setEmail(source);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSelectedEmails();
    return () => (isCancelled.current = true);
  }, []);

  return (
    <>
      <MenuItem key={1} onClick={handleClickOpen}>
        <ListItemIcon>
          <ForwardToInboxIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Email Alert</ListItemText>
      </MenuItem>
      <VistaDialog
        isOpen={open}
        handleClose={handleClose}
        title="Email Alert"
        disableBackdropClick={true}
        maxWidth="sm"
        Actions={
          <>
            <Button color={'success'} variant={'outlined'} onClick={handlesave}>
              Submit
            </Button>
            <Button onClick={handleClose} variant={'outlined'} color={'error'}>
              Cancel
            </Button>
          </>
        }
      >
        <FormGroup>
          <FormControl sx={{ width: 500, marginBottom: 2, marginLeft: 5 }}>
            <InputLabel id="determination-select-label">Determination</InputLabel>
            <Select
              labelId="determination-select-label"
              id="determination-select"
              autoFocus
              fullWidth
              value={determination}
              input={<OutlinedInput label="Determination" />}
              onChange={(event) => setDetermination(event.target.value)}
            >
              <MenuItem value={'malicious'}>true-positive, malicious</MenuItem>
              <MenuItem value={'non-malicious'}>true-positive, likely non-malicious</MenuItem>
              <MenuItem value={'worth-investigating'}>worth-investigating</MenuItem>
              <MenuItem value={'false-positive'}>false-positive</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ width: 500, marginBottom: 2, marginLeft: 5 }}>
            <InputLabel id="email-select-label">Email</InputLabel>
            <Select
              labelId="email-select-label"
              id="email-select"
              multiple
              fullWidth
              value={selectEmail}
              onChange={handleChangeEmail}
              input={<OutlinedInput label="Email" />}
              renderValue={(selected) => selected.join(', ')}
            >
              {email.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={selectEmail.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ width: 500, marginBottom: 2, marginLeft: 5 }}>
            <TextField
              label="Note"
              variant="outlined"
              value={note}
              fullWidth
              onChange={(event) => setNote(event.target.value)}
            />
          </FormControl>
        </FormGroup>
      </VistaDialog>
    </>
  );
}

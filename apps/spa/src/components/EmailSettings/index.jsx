import * as React from 'react';
import { DataGrid, GridToolbarContainer, GridToolbarFilterButton } from '@mui/x-data-grid';
import { ColumnConfig } from './util';
import { makeApiRequest } from '../../utils';
import { useEffect, useState } from 'react';
import { Typography, Snackbar, Box } from '@mui/material';
import { VistaConfirm } from '@logrhythm/shared/VistaDialog';
import { Alert } from '@mui/lab';

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarFilterButton />
    </GridToolbarContainer>
  );
}

export default function EmailTable() {
  const [data, setData] = useState([]);
  const [snackBar, setSnackBar] = useState({ show: false, msg: '', severity: 'error' });
  const [openDialog, setOpenDialog] = useState(false);
  const handleCloseDialog = () => setOpenDialog(false);
  const [emailId, setEmailId] = useState('');
  const handleSnackBarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackBar({ show: false, msg: '', severity: 'error' });
  };
  const deleteEmail = (event, id) => {
    if (event) event.ignore = true;
    setEmailId(id);
    setOpenDialog(true);
  };
  const getEmailData = async () => {
        makeApiRequest({
          key: 'listEmailPref',
        })
          .then((response) => response.data)
          .then((response) => {
            if (response.status === 'success') {
              setData(response.body);
            } else {
              throw 'Email list fetching has failed';
            }
          })
          .catch((error)=>{
            console.log(error);
          })
  };
  useEffect(() => {
    getEmailData();
  }, []);
  const handleDelete = async () => {
    handleCloseDialog();
    makeApiRequest({ key: 'deleteEmailPref', pathParam: emailId })
      .then((response) => response.data)
      .then((response) => {
        if (response.status === 'success') {
          setSnackBar({ show: true, msg: 'Email was removed from email notification list.', severity: 'success' });
          getEmailData();
        } else {
          setSnackBar({ show: true, msg: 'Removing email from notification list has failed', severity: 'error' });
        }
      });
  };
  return (
    <>
      <Box sx={{ height: 'calc(100vH - 70px)', width: '100%' }}>
      <DataGrid
        rows={data}
        getRowId={(row) => row.id}
        columns={ColumnConfig(deleteEmail)}
        disableColumnMenu
        disableColumnSelector
        disableSelectionOnClick
        pageSize={10}
        rowsPerPageOptions={[10]}
        components={{
          Toolbar: CustomToolbar,
        }}
      />
      </Box>
      <VistaConfirm
        handleAccept={handleDelete}
        handleReject={handleCloseDialog}
        isOpen={openDialog}
        acceptButtonText={'Yes'}
        rejectButtonText={'No'}
        maxWidth={'sm'}
      >
        <Typography>Do you want to Delete?</Typography>
      </VistaConfirm>
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

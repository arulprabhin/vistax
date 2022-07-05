import React, { useEffect, useState } from 'react';
import { DataGrid, GridToolbarColumnsButton, GridToolbarContainer, GridToolbarFilterButton } from '@mui/x-data-grid';
import { makeApiRequest } from '../../utils';
import { operatorColumn } from './util';
import { Alert, Snackbar } from '@mui/material';
import Typography from '@logrhythm/shared/Typography';
import { VistaConfirm } from '@logrhythm/shared/VistaDialog';

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
    </GridToolbarContainer>
  );
}

export default function OperatorTable() {
  const [tableData, setTableData] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [operatorId, setOperatorId] = useState('');
  const [snackBar, setSnackBar] = useState({ show: false, msg: '', severity: 'error' });

  const handleSnackBarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackBar({ show: false, msg: '', severity: 'error' });
  };
  const handleCloseDialog = () => setOpenDialog(false);

  const deleteOperator = (event, id) => {
    if (event) event.ignore = true;
    setOperatorId(id);
    setOpenDialog(true);
  };
  const handleDelete = async () => {
    setOpenDialog(false);
    makeApiRequest({
      key: 'deleteUser',
      pathParam: operatorId,
    })
      .then((response) => response.data)
      .then((response) => {
        if (response.status === 'success') {
          setSnackBar({ show: true, msg: 'The operator was removed successfully.', severity: 'success' });
          getUser();
        } else {
          setSnackBar({ show: true, msg: 'Operator removal has failed.', severity: 'error' });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getUser = async () => {
    makeApiRequest({ key: 'listUsers' })
      .then((response) => response.data)
      .then((response) => {
        if (response.status === 'success') {
          setTableData(response.body);
        } else {
          throw 'User list fetching has failed';
        }
      })
      .catch((err) => {
        setSnackBar({ show: true, msg: err, severity: 'error' });
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <div style={{ height: 'calc(100vH - 70px)', width: '100%' }}>
        <DataGrid
          rows={tableData}
          disableColumnMenu
          disableColumnSelector
          disableSelectionOnClick
          columns={operatorColumn(deleteOperator)}
          onCellClick={(param, event) => event.stopPropagation()}
          getRowId={(row) => row.id}
          sx={{
            '& *.multi-row': {
              whiteSpace: 'normal !important',
              lineHeight: 'normal !important',
              wordBreak: 'break-word',
            },
          }}
          components={{
            Toolbar: CustomToolbar,
          }}
          pageSize={10}
        />
        <VistaConfirm
          handleAccept={handleDelete}
          handleReject={handleCloseDialog}
          handleClose={handleCloseDialog}
          isOpen={openDialog}
          acceptButtonText={'Yes'}
          rejectButtonText={'No'}
          maxWidth={'sm'}
        >
          <Typography>Are you sure you want to remove this operator?</Typography>
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
      </div>
    </>
  );
}

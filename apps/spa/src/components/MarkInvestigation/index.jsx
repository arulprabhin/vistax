import React, { useState } from 'react';
import { VistaConfirm } from '@logrhythm/shared/VistaDialog';
import { ListItemIcon, ListItemText, MenuItem, Tooltip, Alert, Snackbar } from '@mui/material';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';

export default function MarkInvestigationOptions() {
  const [title, setTitle] = useState('Mark for Investigation');
  const [showConfirm, setShowConfirm] = useState({ show: false, msg: '' });
  const [snackBar, setSnackBar] = useState({ show: false, msg: '', severity: 'error' });

  const handleMarkInvestigation = () => {
    if (title === 'Mark for Investigation') {
      setShowConfirm({ show: false, msg: '' });
      setSnackBar({ show: true, msg: 'Incident was marked as investigation', severity: 'success' });
      setTitle('End Investigation');
    } else {
      setShowConfirm({ show: false, msg: '' });
      setSnackBar({ show: true, msg: 'Incident was closed as investigation', severity: 'success' });
      setTitle('Mark for Investigation');
    }
  };
  const handleOpen = () => {
    if (title === 'Mark for Investigation') {
      setShowConfirm({ show: true, msg: 'Are you want to mark as investigation?' });
    } else {
      setShowConfirm({ show: true, msg: 'Are you want to change the incident report?' });
    }
  };
  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackBar({ show: false, msg: '', severity: 'error' });
  };
  return (
    <>
      <Tooltip title={title} arrow>
        <MenuItem key={7} onClick={handleOpen}>
          <ListItemIcon>
            <CollectionsBookmarkIcon />
          </ListItemIcon>
          <ListItemText>{title}</ListItemText>
        </MenuItem>
      </Tooltip>
      <VistaConfirm
        isOpen={showConfirm.show}
        acceptButtonText={'Yes'}
        maxWidth={'sm'}
        rejectButtonText={'No'}
        handleAccept={handleMarkInvestigation}
        handleReject={() => setShowConfirm({ show: false, msg: '' })}
        handleClose={() => setShowConfirm({ show: false, msg: '' })}
      >
        {showConfirm.msg}
      </VistaConfirm>
      <Snackbar
        open={snackBar.show}
        autoHideDuration={12000}
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

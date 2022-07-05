import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';

const VistaDialogContainer = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const VistaDialogTitle = ({ children, onClose, disableBackdropClick, ...other }) => {
  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={(event, reason) => handleCloseDialog(event, reason, disableBackdropClick, onClose)}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};
VistaDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const handleCloseDialog = (event, reason, disableBackdropClick, onClose) => {
  if (disableBackdropClick && reason === 'backdropClick') return;
  if (onClose) onClose(event, reason);
};

export default function VistaDialog({
  isOpen,
  handleClose,
  title,
  children,
  Actions,
  isFullScreen,
  isFullWidth,
  maxWidth,
  disableBackdropClick,
}) {
  /*if (Actions && Array.isArray(Actions)) {
    Actions.forEach(function (action, index) {
      if (!this[index].props.key) this[index].props.key = 'NO_KEY_' + index;
    }, Actions);
  }*/
  return (
    <>
      <VistaDialogContainer
        open={isOpen}
        onClose={(event, reason) => handleCloseDialog(event, reason, disableBackdropClick, handleClose)}
        fullScreen={isFullScreen ?? false}
        fullWidth={isFullWidth ?? true}
        maxWidth={maxWidth ?? 'md'}
        scroll={'paper'}
      >
        {(title || handleClose) && (
          <VistaDialogTitle onClose={handleClose} disableBackdropClick={disableBackdropClick}>
            {title}
          </VistaDialogTitle>
        )}
        <DialogContent dividers={!!title ?? false}>{children}</DialogContent>
        {Actions && <DialogActions>{Actions}</DialogActions>}
      </VistaDialogContainer>
    </>
  );
}

VistaDialog.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.node,
  children: PropTypes.node,
  isFullScreen: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  disableBackdropClick: PropTypes.bool,
  maxWidth: PropTypes.string,
};

export function VistaAlert({ title, children, isOpen, handleClose, closeButtonText, maxWidth, buttonVariant }) {
  return VistaDialog({
    disableBackdropClick: false,
    isOpen: isOpen,
    handleClose: handleClose,
    title: title,
    children: children,
    maxWidth: maxWidth,
    Actions: (
      <Button key={'dialogCloseAction'} variant={buttonVariant || 'contained'} onClick={handleClose}>
        {closeButtonText ?? 'Close'}
      </Button>
    ),
  });
}

VistaAlert.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.node,
  closeButtonText: PropTypes.string,
};

export function VistaConfirm({
  title,
  children,
  isOpen,
  handleClose,
  acceptButtonText,
  handleAccept,
  rejectButtonText,
  handleReject,
  maxWidth,
  buttonVariant,
}) {
  return VistaDialog({
    disableBackdropClick: true,
    isOpen: isOpen,
    handleClose: handleClose,
    title: title,
    children: children,
    maxWidth: maxWidth,
    Actions: [
      <Button key={'dialogRejectAction'} variant={buttonVariant || 'outlined'} color="success" onClick={handleAccept}>
        {acceptButtonText ?? 'Yes'}
      </Button>,
      <Button key={'dialogAcceptAction'} variant={buttonVariant || 'outlined'} color="error" onClick={handleReject}>
        {rejectButtonText ?? 'No'}
      </Button>,
    ],
  });
}

VistaConfirm.propTypes = {
  title: PropTypes.node,
  children: PropTypes.node,
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func,
  handleAccept: PropTypes.func.isRequired,
  handleReject: PropTypes.func.isRequired,
  acceptButtonText: PropTypes.string,
  rejectButtonText: PropTypes.string,
};

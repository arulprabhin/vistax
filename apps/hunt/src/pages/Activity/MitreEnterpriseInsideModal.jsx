import { Box, Button, Dialog, Paper, Switch, Typography } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import Draggable from 'react-draggable';

import React from 'react';

function PaperComponent(props) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper
        sx={{
          width: 'min(1200px, 100%) !important',
          maxWidth: '100vw !important',
          height: '80%',
          p: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          backgroundImage: 'none',
        }}
        {...props}
      />
    </Draggable>
  );
}

const MitreEnterpriseInsideModal = ({ open, onClose, title, rows, gridColumnCount = 6, onChange }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      PaperComponent={PaperComponent}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 99999999,
      }}
    >
      <Box
        id="draggable-dialog-title"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h5">{title}</Typography>
        <Button size="small" onClick={onClose}>
          <ClearIcon />
        </Button>
      </Box>
      <Box
        sx={{
          flex: 1,
          overflow: 'auto',
          display: 'grid',
          columnGap: '40px',
          rowGap: 0,
          gridTemplateColumns: `repeat(${gridColumnCount}, minmax(200px, 1fr))`,
        }}
      >
        {rows.map(({ label, on }, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography>{label}</Typography>
            <Switch defaultChecked={on} onChange={(e) => onChange(e.target.checked, index)} />
          </Box>
        ))}
      </Box>
    </Dialog>
  );
};

export default MitreEnterpriseInsideModal;

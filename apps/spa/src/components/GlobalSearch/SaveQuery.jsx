import React, { useEffect, useState } from 'react';
import { Button, IconButton, Menu, MenuItem, TextField, Tooltip } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import AddIcon from '@mui/icons-material/Add';
import { makeApiRequest } from '../../utils/index';
import { VistaConfirm } from '@logrhythm/shared/VistaDialog';

const SaveQuery = ({ onSaveQuery, onQuerySelected }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [name, setName] = useState('');
  const [query, setQuery] = useState('');
  const [savedQueries, setSavedQueries] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleOpenDialog = () => {
    setAnchorEl(null);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => setOpenDialog(false);

  const handleSave = () => {
    handleCloseDialog();
    onSaveQuery({ name, query });
    loadSavedQueries();
  };

  const loadSavedQueries = async () => {
    try {
      const response = await makeApiRequest({ key: 'huntActivitySaveQuery' });
      setSavedQueries(response.data.body || {});
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClick = (event, value) => {
    setAnchorEl(null);
    if (onQuerySelected) onQuerySelected(value);
  };

  useEffect(() => {
    loadSavedQueries();
  }, []);

  return (
    <>
      <Tooltip title={'Saved Queries'}>
        <IconButton onClick={handleClick} sx={{ marginLeft: 1 }}>
          <SaveIcon />
        </IconButton>
      </Tooltip>
      <VistaConfirm
        isOpen={openDialog}
        handleClose={handleCloseDialog}
        title={'Save Query'}
        acceptButtonText={'Save'}
        rejectButtonText={'Cancel'}
        handleAccept={handleSave}
        handleReject={handleCloseDialog}
        maxWidth={'sm'}
      >
        <TextField
          label="Query"
          variant="outlined"
          value={query}
          autoFocus
          fullWidth
          onChange={(event) => setQuery(event.target.value)}
          sx={{ marginTop: 2 }}
        />
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          fullWidth
          onChange={(event) => setName(event.target.value)}
          sx={{ marginTop: 1 }}
        />
      </VistaConfirm>

      <Menu anchorEl={anchorEl} open={isMenuOpen} onClose={handleClose}>
        <MenuItem>
          <Button variant="contained" onClick={handleOpenDialog} sx={{ width: '100%' }} startIcon={<AddIcon />}>
            New Query
          </Button>
        </MenuItem>
        {savedQueries.length > 0 ? (
          savedQueries.map((item, index) => (
            <MenuItem key={index} value={item} onClick={(event) => handleMenuClick(event, item)}>
              {item.name}
            </MenuItem>
          ))
        ) : (
          <MenuItem>No saved queries</MenuItem>
        )}
      </Menu>
    </>
  );
};

export default SaveQuery;

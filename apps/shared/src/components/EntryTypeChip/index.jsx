import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { ButtonGroup, IconButton, Tooltip } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Chip = styled('div')(({ theme, isRemoved }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: 150,
  width: 'fit-content',
  height: 28,
  padding: '2px 32px',
  backgroundColor: isRemoved ? theme.palette.error.main : theme.palette.primary.main,
  borderRadius: 16,
  border: 'none',
  color: theme.palette.text.primary,
  fontSize: '0.6rem',
  cursor: 'pointer',
  boxSizing: 'border-box',
}));

const EntryTypeChip = ({ query, setQuery, onRemoveQuery }) => {
  const [isHover, setIsHover] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  const toggleDisable = () => {
    setQuery((ex) => ex.map((x) => (x.key === query.key ? { ...x, isDisable: !x.isDisable } : x)));
  };

  const toggleRemove = () => {
    setQuery((ex) => ex.map((q) => (q.key === query.key ? { ...q, isEntry: !q.isEntry } : q)));
    setIsRemoved(!isRemoved);
  };

  const handleRemoveQuery = () => {
    setQuery((ex) => ex.filter((x) => x.key !== query.key));
    if (onRemoveQuery) {
      onRemoveQuery();
    }
  };

  return (
    <Chip isRemoved={isRemoved} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      {isHover ? (
        <ButtonGroup size="small">
          <Tooltip title="Disable search">
            <IconButton size="small" sx={{ fontSize: 14 }} onClick={toggleDisable}>
              {query.isDisable ? <CheckBoxIcon fontSize="inherit" /> : <CheckBoxOutlineBlankIcon fontSize="inherit" />}
            </IconButton>
          </Tooltip>
          <Tooltip title="Remove search">
            <IconButton size="small" sx={{ fontSize: 14 }} onClick={toggleRemove}>
              {query === '*' && isRemoved ? <ZoomInIcon fontSize="inherit" /> : <ZoomOutIcon fontSize="inherit" />}
            </IconButton>
          </Tooltip>
          <IconButton size="small" sx={{ fontSize: 14 }} onClick={handleRemoveQuery}>
            <DeleteForeverIcon fontSize="inherit" />
          </IconButton>
        </ButtonGroup>
      ) : (
        `entry_type: ${query.key}`
      )}
    </Chip>
  );
};

export default EntryTypeChip;

import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Chip from '@mui/material/Chip';
import Tooltip from '@mui/material/Tooltip';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

export default function ChipMenu({
     options = [],
     defaultChips = [],
     maxSelect = 0,
     sort = 0,
     disabled = false,
     alignLeft = false,
     tooltip = '',
     Icon = AddCircleIcon,
     color = 'primary',
     RemoveIcon = {
       icon: RemoveCircleOutlineIcon,
       color: 'darksalmon',
       hoverColor: 'red',
     },
     chip = { color: 'default', variant: 'outlined', size: 'medium', tooltip: true },
     onChipAdded,
     onChipRemoved,
     onButtonShowHide,
   }) {
  options =
    sort > 0 ? options.sort() : sort < 0 ? options.sort().reverse() : options;
  defaultChips =
    sort > 0
      ? defaultChips.sort()
      : sort < 0
      ? defaultChips.sort().reverse()
      : defaultChips;
  const [allOptions, setAllOptions] = useState(options);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState(
    maxSelect > 0 && defaultChips.length > 0
      ? defaultChips.slice(0, maxSelect)
      : defaultChips,
  );
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClick = (option) => {
    const filteredAllOptions = allOptions.filter((f) => f !== option);
    if (sort > 0) filteredAllOptions.sort();
    else if (sort < 0) filteredAllOptions.sort().reverse();
    setAllOptions(filteredAllOptions);
    const newOptions = selectedOptions;
    newOptions.push(option);
    if (sort > 0) newOptions.sort();
    else if (sort < 0) newOptions.sort().reverse();
    setSelectedOptions(newOptions);
    handleClose();
    if (onChipAdded) onChipAdded(option);
    if (
      onButtonShowHide &&
      ((maxSelect > 0 && newOptions.length === maxSelect) ||
        (maxSelect === 0 && filteredAllOptions.length === 0))
    )
      onButtonShowHide(false);
  };

  const handleDelete = (option) => {
    const filteredSelectedOptions = selectedOptions.filter((f) => f !== option);
    if (sort > 0) filteredSelectedOptions.sort();
    else if (sort < 0) filteredSelectedOptions.sort().reverse();
    setSelectedOptions(filteredSelectedOptions);
    const newOptions = allOptions;
    newOptions.push(option);
    if (sort > 0) newOptions.sort();
    else if (sort < 0) newOptions.sort().reverse();
    setAllOptions(newOptions);
    if (onChipRemoved) onChipRemoved(option);
    if (
      onButtonShowHide &&
      ((maxSelect === 0 && allOptions.length === 1) ||
        (maxSelect > 0 && filteredSelectedOptions.length === maxSelect - 1))
    )
      onButtonShowHide(true);
  };

  return (
    <>
      {alignLeft &&
      allOptions.length &&
      ((maxSelect > 0 && selectedOptions.length < maxSelect) ||
        maxSelect === 0) ? (
        <>
          <Tooltip title={tooltip}>
            <IconButton onClick={handleClick} color={color} disabled={disabled}>
              <Icon/>
            </IconButton>
          </Tooltip>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            {allOptions.map((option) => (
              <MenuItem key={option} onClick={() => handleMenuClick(option)}>
                {option}
              </MenuItem>
            ))}
          </Menu>
        </>
      ) : null}
      {selectedOptions.map((option, index) => {
        return (
          <Chip
            disabled={disabled}
            label={option}
            variant={chip.variant}
            size={chip.size}
            color={chip.color}
            key={`chip${index}`}
            onDelete={() => handleDelete(option)}
            deleteIcon={
              <Tooltip title={chip.tooltip ? `Remove ${option}` : ''}>
                <RemoveIcon.icon
                  sx={{
                    '&&': { color: RemoveIcon.color },
                    '&&:hover': { color: RemoveIcon.hoverColor },
                  }}
                />
              </Tooltip>
            }
          />
        );
      })}
      {!alignLeft &&
      allOptions.length &&
      ((maxSelect > 0 && selectedOptions.length < maxSelect) ||
        maxSelect === 0) ? (
        <>
          <Tooltip title={tooltip}>
            <IconButton onClick={handleClick} color={color} disabled={disabled}>
              <Icon/>
            </IconButton>
          </Tooltip>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            {allOptions.map((option) => (
              <MenuItem key={option} onClick={() => handleMenuClick(option)}>
                {option}
              </MenuItem>
            ))}
          </Menu>
        </>
      ) : null}
    </>
  );
}

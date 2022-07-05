import * as React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { ClickAwayListener, ButtonGroup, Button, Grow, Paper, Popper, MenuList, MenuItem } from '@mui/material';

export default function SplitButtonMenu({
  label,
  size = 'medium',
  variant = 'outlined',
  color = 'info',
  options,
  onButtonClick,
  onChange,
  fullWidth = false,
  value,
}) {
  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [selectedText, setSelectedText] = React.useState((label ? label + ' ' : '') +  ( value === undefined ? options[0].text ?? options[0] : value ));
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClick = () => {
    if (typeof onButtonClick === 'function') return onButtonClick(options[selectedIndex], selectedIndex);
    else if (typeof onButtonClick === 'string' && onButtonClick.toLowerCase() === 'disable') return false;
    else handleToggle();
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleMenuItemClick = (event, option, index) => {
    setSelectedIndex(index);
    setSelectedText((label ? label + ' ' : '') + (option.text ?? option));
    if (onChange) onChange(option, index);
    setOpen(false);
  };

  return (
    <ButtonGroup
      size={size}
      variant={variant}
      color={color}
      ref={anchorRef}
      aria-label={selectedText}
      fullWidth={fullWidth}
    >
      <Button onClick={handleClick} sx={{ textAlign: 'left', justifyContent: 'flex-start' }}>
        {selectedText}
      </Button>
      <Button onClick={handleToggle} sx={{ maxWidth: 35 }}>
        <ArrowDropDownIcon />
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        style={{ zIndex: 9999 }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" sx={{ zIndex: 'tooltip' }}>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option.value ?? option}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, option, index)}
                    >
                      {option.text ?? option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </ButtonGroup>
  );
}

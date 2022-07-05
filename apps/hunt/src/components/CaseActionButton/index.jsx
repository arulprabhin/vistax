import React from 'react';
import { Button, ButtonGroup, ClickAwayListener, MenuItem, MenuList, Paper, Popper } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import BugReportIcon from '@mui/icons-material/BugReport';

export function ExtendedMenuItem({ label, Icon, onClickHandler }) {
  return (
    <MenuItem key={label.split(' ').join()} onClick={(event) => onClickHandler(event)}>
      <Button size="small" variant="text" color={'info'} startIcon={<Icon />}>
        {label}
      </Button>
    </MenuItem>
  );
}

export function formatEventType(eventType) {
  if (!eventType) return eventType;
  const result = eventType.replace(/([A-Z])/g, ' $1');
  return result.charAt(0).toUpperCase() + result.slice(1);
}

export default function CaseActionButton({ certainty, eventType, buttonStyle, options }) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const buttonColor = certainty <= 25 ? 'success' : certainty <= 50 ? 'primary' : certainty <= 75 ? 'warning' : 'error';

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  return (
    <React.Fragment>
      <ButtonGroup variant={buttonStyle ?? 'outlined'} size="small" ref={anchorRef} aria-label="split button">
        <Button color={'info'} startIcon={<BugReportIcon color={buttonColor} />}>
          {formatEventType(eventType) ?? 'Undefined Event'}
        </Button>
        {options && (
          <Button
            aria-controls={open ? 'split-button-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-label="select merge strategy"
            aria-haspopup="menu"
            onClick={handleToggle}
          >
            <ArrowDropDownIcon />
          </Button>
        )}
      </ButtonGroup>
      {options && (
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          disablePortal
          placement={'bottom-start'}
          style={{ zIndex: 9999 }}
        >
          <Paper elevation={2}>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList id="split-button-menu">
                {options.map((option) => (
                  <ExtendedMenuItem
                    label={option.label}
                    key={option.label.split(' ').join()}
                    Icon={option.icon}
                    onClickHandler={(event) => {
                      if (option.onClick) option.onClick();
                      handleClose(event);
                    }}
                  />
                ))}
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Popper>
      )}
    </React.Fragment>
  );
}

import React, { useState } from 'react';
import { Button, ButtonGroup, Collapse, IconButton, Typography } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import BarChartIcon from '@mui/icons-material/BarChart';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { styles } from './style';
import Stack from '@mui/material/Stack';

const SearchItem = ({ item, search, onChartClickd, onFilterClickd }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    if (!search) {
      setOpen(!open);
    }
  };

  return (
    <>
      {(item.label.toLowerCase().includes(search) ||
        item.subItems.some((subItem) => subItem.label.toLowerCase().includes(search))) && (
        <Button sx={styles.iconButton} data-testid="toggle-button" onClick={toggleOpen}>
          <Typography sx={styles.iconButtonText}>{item.label}</Typography>
          {open ? <ExpandLess sx={styles.expandIcon} /> : <ExpandMore sx={styles.expandIcon} />}
        </Button>
      )}
      <Collapse in={open || !!search} timeout={0} unmountOnExit>
        {item.subItems
          .filter(({ label }) => label.toLowerCase().includes(search))
          .map(({ label, value }) => (
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={0.5}
              sx={{ ml: 3, mr: 2, my: 1 }}
            >
              <Typography sx={styles.iconButtonText}>{label}</Typography>
              <ButtonGroup sx={styles.buttonGroup} variant="contained" size="small" disableElevation>
                <IconButton size="small" onClick={() => onChartClickd(value)}>
                  <BarChartIcon sx={styles.actionButton} />
                </IconButton>
                <IconButton size="small" onClick={() => onFilterClickd(value)}>
                  <FilterAltOutlinedIcon sx={styles.actionButton} />
                </IconButton>
              </ButtonGroup>
            </Stack>
          ))}
      </Collapse>
    </>
  );
};

export default SearchItem;

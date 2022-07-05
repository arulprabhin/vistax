import React, { useState } from 'react';
import { Button, Menu, Paper, TextField, Tooltip } from '@mui/material';
import PolicyIcon from '@mui/icons-material/Policy';
import { DEFAULT_FILTERS } from './menuConfig';
import SearchItem from './SearchItem';
import { Scrollbars } from 'react-custom-scrollbars-2';
import ClearIcon from '@mui/icons-material/Clear';

export default function DiscoverButton({ options }) {
  const [anchorElDiscover, setAnchorElDiscover] = useState(null);
  const openDiscover = Boolean(anchorElDiscover);
  const [search, setSearch] = useState('');
  const [buttonOptions, setButtonOptions] = useState(options ?? DEFAULT_FILTERS);

  const handleClickDiscover = (event) => {
    setAnchorElDiscover(event.currentTarget);
  };

  const handleCloseDiscover = () => {
    setAnchorElDiscover(null);
  };

  const handleDiscoverChartClick = (value) => {
    alert(`Chart: ${value}`);
    handleCloseDiscover();
  };

  const handleDiscoverFilterClick = (value) => {
    alert(`Filter: ${value}`);
    handleCloseDiscover();
  };

  const handleChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      backgroundColor: `rgba(99, 87, 132, 0.2)`,
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };

  const clearSearch = () => {
    if (search !== '') setSearch('');
    else handleCloseDiscover();
  };

  return (
    <>
      <Button
        variant="contained"
        aria-controls={openDiscover ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={openDiscover ? 'true' : undefined}
        onClick={handleClickDiscover}
        endIcon={<PolicyIcon />} /*openDiscover ? <ArrowBackIcon /> : <ArrowForwardIcon />*/
      >
        Discover
      </Button>
      <Menu anchorEl={anchorElDiscover} open={openDiscover} onClose={handleCloseDiscover}>
        <Paper
          elevation={0}
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.25)',
            display: 'flex',
            alignItems: 'center',
            padding: '5px 10px',
            borderRadius: '5px',
            flexGrow: 1,
            mx: 1,
            my: 1,
          }}
        >
          <TextField
            fullWidth
            placeholder="Search..."
            size="small"
            variant="standard"
            value={search}
            onChange={handleChangeSearch}
          />
          {/* eslint-disable-next-line react/jsx-no-undef */}
          <Tooltip title={'Clear Search'} arrow>
            <ClearIcon sx={{ color: 'white' }} onClick={(event) => clearSearch()} />
          </Tooltip>
        </Paper>

        <Scrollbars
          style={{ width: '250px', minHeight: '150px', height: '610px', maxHeight: 'calc(-200px + 100vH)' }}
          thumbMinSize={30}
          universal={true}
          renderThumbHorizontal={renderThumb}
          renderThumbVertical={renderThumb}
        >
          {buttonOptions.map((filter) => (
            <SearchItem
              key={filter.value}
              item={filter}
              search={search.toLowerCase()}
              onChartClickd={handleDiscoverChartClick}
              onFilterClickd={handleDiscoverFilterClick}
            />
          ))}
        </Scrollbars>
      </Menu>
    </>
  );
}

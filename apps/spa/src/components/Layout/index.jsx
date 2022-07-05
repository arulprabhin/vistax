import React, { useState } from 'react';
import { Box, Paper } from '@mui/material';
import Header from './Header';
import LeftNav from './LeftNav';

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((o) => !o);

  return (
    <Paper
      elevation={0}
      sx={{
        minHeight: '100vh',
        borderRadius: '0',
      }}
    >
      <Header />
      <LeftNav open={open} toggle={toggle} />
      <Box sx={{ ml: open ? '255px' : '70px' }}>{children}</Box>
    </Paper>
  );
};

export default Layout;

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Skeleton } from '@mui/material';
import React from 'react';

export default function SubCountDisplay({ label, count, loading = false, isfirst = false, issub = false }) {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={1}
      sx={isfirst ? { borderRight: 1, pr: 2, width: issub ? 160 : 150 } : {}}
    >
      <Typography variant={isfirst ? (issub ? 'subtitle1' : 'body1') : issub ? 'subtitle2' : 'body2'} align="center">
        {label}
      </Typography>
      <Typography variant={isfirst ? (issub ? 'h5' : 'h4') : issub ? 'button' : 'h5'}>
        {loading ? <Skeleton width={80} variant="text" /> : count}
      </Typography>
    </Stack>
  );
}

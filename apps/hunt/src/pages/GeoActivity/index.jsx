import React from 'react';
import { Box, Grid } from '@mui/material';
import ColorChangingSlider from '@logrhythm/shared/ColorChangingSlider';
import HuntGeoChart from '../../components/HuntGeoChart';
import HuntTable from '../../components/HuntActivityTable';
import DiscoverButton from '../../components/DiscoverButton';

export default function HuntGeoActivity() {
  const [anomaly, setAnomaly] = React.useState(0);
  const [severity, setSeverity] = React.useState(0);

  return (
    <Box sx={{ width: '100%', typography: 'body1', pt: '1rem' }}>
      <Box sx={{ display: 'flex', mb: 2 }}>
        <DiscoverButton />
      </Box>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={6}>
          <ColorChangingSlider value={0} label={'Anomaly'} stepBy={1} onChange={(value) => setAnomaly(value)} />
        </Grid>
        <Grid item xs={6}>
          <ColorChangingSlider
            value={0}
            label={'Threat Severity'}
            sliderType={'M100'}
            onChange={(value) => setSeverity(value)}
          />
        </Grid>
      </Grid>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', padding: '15px' }}>
        <HuntGeoChart />
      </Box>
      <HuntTable />
    </Box>
  );
}

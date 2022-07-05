import React from 'react';
import { Box, Grid, Tab } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import BarChartIcon from '@mui/icons-material/BarChart';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Button from '@mui/material/Button';
import ColorChangingSlider from '@logrhythm/shared/ColorChangingSlider';

import MitreEnterpriseModal from './MitreEnterpriseModal';
import HuntGeoChart from '../../components/HuntGeoChart';
import HuntActivityChart from '../../components/HuntActivityChart';
import HuntTable from '../../components/HuntActivityTable';
import DiscoverButton from '../../components/DiscoverButton';

export default function HuntActivity() {
  const [value, setValue] = React.useState('1');
  const [anomaly, setAnomaly] = React.useState(0);
  const [severity, setSeverity] = React.useState(0);
  const [modalOpen, setModalOpen] = React.useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1', pt: '1rem' }}>
      <Box sx={{ display: 'flex', mb: 2 }}>
        <DiscoverButton />
        <Button variant="contained" onClick={openModal} sx={{ ml: 1 }}>
          Mitre Enterprise ATT&CK &trade;
        </Button>
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
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab icon={<BarChartIcon />} value="1" />
            <Tab icon={<PublicIcon />} value="2" />
          </TabList>
        </Box>
        <TabPanel value="1" sx={{ padding: '15px' }}>
          <HuntActivityChart anomaly={anomaly} severity={severity} />
        </TabPanel>
        <TabPanel value="2" sx={{ padding: '15px' }}>
          <HuntGeoChart />
        </TabPanel>
      </TabContext>
      <HuntTable />
      <MitreEnterpriseModal open={modalOpen} onClose={closeModal} />
    </Box>
  );
}

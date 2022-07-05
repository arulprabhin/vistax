import * as React from 'react';
import { Box, Grid, Tab } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import BarChartIcon from '@mui/icons-material/BarChart';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import HuntGeoChart from '../../components/HuntGeoChart';
import HuntActivityChart from '../../components/HuntActivityChart';
import HuntTable from '../../components/HuntActivityTable';
import ColorChangingSlider from '@logrhythm/shared/ColorChangingSlider';
import DiscoverButton from '../../components/DiscoverButton';
import { useHistory } from 'react-router-dom';

export default function Mitre() {
  const [value, setValue] = React.useState('1');

  const history = useHistory();

  React.useEffect(() => {
    history.replace('./hunt-mitre?search=event_extra_attributes:MITRE*');
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1', pt: '1rem' }}>
      <DiscoverButton />
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={6}>
          <ColorChangingSlider value={0} label={'Anomaly'} stepBy={1} />
        </Grid>
        <Grid item xs={6}>
          <ColorChangingSlider
            value={0}
            label={'Threat Severity'}
            sliderType={'M100'}
            /*onChange={(value) => alert(value)}*/
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
          <HuntActivityChart />
        </TabPanel>
        <TabPanel value="2" sx={{ padding: '15px' }}>
          <HuntGeoChart />
        </TabPanel>
      </TabContext>
      <HuntTable />
    </Box>
  );
}

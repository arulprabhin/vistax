import React from 'react';
import SyslogConfig from '../../components/Syslog/SyslogConfig';
import SyslogNotification from '../../components/Syslog/SyslogNotification';
import { Paper, Tab, Tabs } from '@mui/material';

export default function Syslog() {
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };
  return (
    <>
      <Paper variant="outlined" square sx={{ height: '400px', padding: '10px', minWidth: '100px', margin: 2 }}>
        <Tabs value={tabIndex} onChange={handleTabChange}>
          <Tab label="Syslog Configuration" />
          <Tab label="Notification Preference" />
        </Tabs>
        {tabIndex === 0 && <SyslogConfig />}

        {tabIndex === 1 && <SyslogNotification />}
      </Paper>
    </>
  );
}

import React from 'react';
import { Tab, Tabs } from '@mui/material';
import PolicyViolationIcon from '@mui/icons-material/PrivacyTip';
import IncidentIcon from '@mui/icons-material/NewReleases';
import CaseIcon from '@mui/icons-material/DynamicForm';
import TopCasesTable from '../../components/TopCasesTable';

export default function TopCases() {
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <React.Fragment>
      <Tabs value={tabIndex} onChange={handleTabChange} indicatorColor="primary" textColor="primary">
        <Tab
          icon={<PolicyViolationIcon />}
          label={'Policy Violations'}
          iconPosition={'start'}
          aria-label="Policy Violations"
        />
        <Tab icon={<IncidentIcon />} label={'Incidents'} iconPosition={'start'} aria-label="Incidents" />
        <Tab icon={<CaseIcon />} label={'Cases'} iconPosition={'start'} aria-label="Cases" />
      </Tabs>
      {tabIndex === 0 && <TopCasesTable caseType={'policy'} />}
      {tabIndex === 1 && <TopCasesTable caseType={'incident'} />}
      {tabIndex === 2 && <TopCasesTable caseType={'case'} />}
    </React.Fragment>
  );
}

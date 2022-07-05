import React from 'react';
import { Tab, Tabs } from '@mui/material';
import { History, SavedSearch as SavedSearchIcon } from '@mui/icons-material';
import SearchHistory from '../../components/Search/SearchHistory';
import SavedSearch from '../../components/Search/SavedSearch';

export default function Search() {
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <>
      <Tabs value={tabIndex} onChange={handleTabChange} indicatorColor="primary" textColor="primary">
        <Tab icon={<History />} label={'Search History'} iconPosition={'start'} aria-label="Search History" />
        <Tab icon={<SavedSearchIcon />} label={'Saved Query'} iconPosition={'start'} aria-label="Saved Query" />
      </Tabs>
      {tabIndex === 0 && <SearchHistory />}
      {tabIndex === 1 && <SavedSearch />}
    </>
  );
}

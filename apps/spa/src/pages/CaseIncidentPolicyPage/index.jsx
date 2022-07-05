import React, { useState } from 'react';
import { Box, Grid, Paper, Stack, Tab, Tabs } from '@mui/material';
import ColorChangingSlider from '@logrhythm/shared/ColorChangingSlider';
import TopCasesTable from '../../components/TopCasesTable';
import Typography from '@mui/material/Typography';
import TopOffenders from '../../components/TopOffenders';
import IncidentHistory from '../../components/IncidentHistory';
import { useSelector } from 'react-redux';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import { buildMoment } from '@logrhythm/shared/common';
import CaseListing from '../../components/CaseListing';
import FavoriteCaseListing from '../../components/FavoriteCaseListing';

const IncidentDataTable = ({ tableType }) => {
  const [tabIndex, setTabIndex] = React.useState(0);
  const [certainty, setCertainty] = useState(0);
  const [score, setScore] = useState(0);
  const { global, site, search } = useSelector((state) => state.user);
  const { searchRange, searchStart, searchEnd, searchMoment } = global;

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <>
      <Tabs value={tabIndex} onChange={handleTabChange} indicatorColor="primary" textColor="primary">
        <Tab icon={<ManageSearchIcon />} label={'Search Results'} iconPosition={'start'} aria-label="Search Results" />
        <Tab icon={<DashboardIcon />} label={'Dashboard'} iconPosition={'start'} aria-label="Dashboard" />
        <Tab icon={<BookmarksIcon />} label={'Bookmarks'} iconPosition={'start'} aria-label="Bookmarks" />
      </Tabs>
      {tabIndex === 0 && (
        <Box sx={{ width: '100%', typography: 'body1', pt: '20px' }}>
          <Stack direction="row" justifyContent="flex-start" alignItems="stretch" spacing={1}>
            <ColorChangingSlider
              value={0}
              label={'Anomaly'}
              sliderType={'M100'}
              onChange={(value) => setCertainty(value)}
            />
            <ColorChangingSlider value={0} label={'Score'} stepBy={1} onChange={(value) => setScore(value)} />
          </Stack>
          <Stack direction="column" justifyContent="flex-start" alignItems="stretch" spacing={1}>
            <CaseListing
              type={tableType}
              query={search}
              site={site}
              certainty={certainty}
              score={score}
              gte={buildMoment(searchMoment.from, true)}
              lte={buildMoment(searchMoment.to, true)}
            />
          </Stack>
        </Box>
      )}
      {tabIndex === 1 && (
        <>
          <Paper sx={{ width: '100%' }}>
            <IncidentHistory
              tableType={tableType}
              gte={buildMoment(searchMoment.from, true)}
              lte={buildMoment(searchMoment.to, true)}
            />
          </Paper>
          <Grid container direction="row" justifyContent="space-between" alignItems="center" spacing={2} sx={{ mb: 2 }}>
            <Grid item sm={6}>
              <TopOffenders
                offenderType={'user'}
                gte={buildMoment(searchMoment.from, true)}
                lte={buildMoment(searchMoment.to, true)}
              />
            </Grid>
            <Grid item sm={6}>
              <TopOffenders
                offenderType={'host'}
                gte={buildMoment(searchMoment.from, true)}
                lte={buildMoment(searchMoment.to, true)}
              />
            </Grid>
          </Grid>
          {tableType === 'incident' ? (
            <>
              <Typography component="div" fontWeight={'bold'}>
                Top Cases
              </Typography>
              <TopCasesTable
                caseType={'case'}
                gte={buildMoment(searchMoment.from, true)}
                lte={buildMoment(searchMoment.to, true)}
              />
            </>
          ) : null}
          {/*<Grid container direction="row" justifyContent="space-between" alignItems="center" spacing={2} sx={{ mb: 2 }}>
            <Grid item sm={6}>
              <CaseTrendChart type={tableType} aggBy={'category'} initType={'bar'} />
            </Grid>
            <Grid item sm={6}>
              <CaseTrendChart type={tableType} aggBy={'score'} />
            </Grid>
          </Grid>*/}
        </>
      )}
      {tabIndex === 2 && (
        <Paper sx={{ width: '100%' }}>
          <FavoriteCaseListing />
        </Paper>
      )}
    </>
  );
};

export default IncidentDataTable;

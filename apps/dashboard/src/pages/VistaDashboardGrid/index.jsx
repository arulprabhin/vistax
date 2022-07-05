import React, { useEffect, useState } from 'react';
import { Responsive as ResponsiveReactGridLayout } from 'react-grid-layout';
import { Box, Button, Card, CardContent, Paper, Stack, Tooltip, Typography } from '@mui/material';
import { ChangeCircle, Computer, Person } from '@mui/icons-material';
import NotableItems from '../../components/NotableItems';
import GeoChart from '../../components/GeoChart';
import AnomalyChart from '../../components/AnomalyChart';
import ActivityChart from '../../components/ActivityChart';
import ViolationItems from '../../components/ViolationItems';
import DataProcessedGauge from '../../components/DataProcessedGauge';
import IncidentAndCaseSummary from '../../components/IncidentCaseSummaryChart';
import { useSelector } from 'react-redux';
import useStyles from './Style';
import SiteChart from '../../components/SiteChart';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { makeApiRequest } from '../../utils';
import VistaLoader from '@logrhythm/shared/VistaLoader';
import IncidentChart from '../../components/IncidentChart';
import { withSize } from 'react-sizeme';
import { buildMoment } from '@logrhythm/shared/common';

const initLayout = [
  { i: 'incidentCount', x: 0, y: 0, w: 3, h: 1, static: true, minW: 3, maxW: 3, minH: 1, maxH: 1 },
  { i: 'starChart', x: 0, y: 1, w: 3, h: 6 },
  { i: 'notableHost', x: 3, y: 0, w: 3, h: 4 },
  { i: 'notableUser', x: 6, y: 0, w: 3, h: 4 },
  { i: 'activity', x: 3, y: 2, w: 4, h: 4 },
  { i: 'dataProcessed', x: 7, y: 2, w: 2, h: 4 },
  { i: 'incidentComplianceViolations', x: 0, y: 5, w: 3, h: 3 },
  { i: 'incidentCaseSummary', x: 3, y: 4, w: 6, h: 4 },
  { i: 'geoChart', x: 0, y: 6, w: 3, h: 6 },
  { i: 'anomaly', x: 3, y: 6, w: 6, h: 4 },
];
const breakPoints = { lg: 1080, md: 996, sm: 768, xs: 480, xxs: 0 };
const margins = { lg: [10, 10], md: [7, 7], sm: [5, 5], xs: [3, 3], xxs: [2, 2] };
const cols = { lg: 9, md: 6, sm: 4, xs: 3, xxs: 1 };

const VistaDashboardGrid = ({ size: { width } }) => {
  const [widgetArray, setWidgetArray] = useState(initLayout);
  const [layouts, setLayouts] = useState(null);
  const { theme } = useSelector((state) => state.user);
  const classes = useStyles();

  const handleModify = (layouts, layout) => {
    const tempArray = widgetArray;

    setLayouts(layout);
    layouts?.map((position) => {
      tempArray[Number(position.i)].x = position.x;
      tempArray[Number(position.i)].y = position.y;
      tempArray[Number(position.i)].width = position.w;
      tempArray[Number(position.i)].height = position.h;
    });
    setWidgetArray(tempArray);
  };

  const handleDelete = (key) => {
    if (!confirm('Remove Widget??')) return;
    const tempArray = widgetArray.slice();
    const index = tempArray.indexOf(tempArray.find((data) => data.i === key));
    tempArray.splice(index, 1);
    setWidgetArray(tempArray);
  };

  const [totalCases, setTotalCases] = useState();
  const [totalIncidents, setTotalIncidents] = useState();
  const [totalPolicyViolation, setTotalPolicyViolation] = useState();
  const [incidentPercentage, setIncidentPercentage] = useState();
  const [violationPercentage, setViolationPercentage] = useState();
  const [incidentCaseSummary, setIncidentCaseSummary] = useState('CASE');
  const [loadingCases, setLoadingCases] = useState(false);
  const { global, site } = useSelector((state) => state.user);
  const { searchRange, searchStart, searchEnd, searchMoment } = global;

  const getTotalCasesStat = async () => {
    try {
      setLoadingCases(true);
      const searchFrom = (searchMoment ? buildMoment(searchMoment.from) : searchStart).getTime();
      const searchTill = (searchMoment ? buildMoment(searchMoment.to) : searchEnd).getTime();
      const response = await makeApiRequest({
        key: 'caseIncidentAndViolationCount',
        pathParam: searchFrom + '/' + searchTill,
      });
      if (response.data.status === 'success') {
        setTotalCases(response.data.body.cases);
        setTotalIncidents(response.data.body.incidents.count);
        setTotalPolicyViolation(response.data.body.policyViolations.count);
        setIncidentPercentage(response.data.body.incidents.percentage);
        setViolationPercentage(response.data.body.policyViolations.percentage);
      } else {
        throw 'Invalid request';
      }
      setLoadingCases(false);
    } catch (err) {
      console.log(err);
      setLoadingCases(false);
    }
  };

  useEffect(() => {
    getTotalCasesStat();
  }, [global]);

  const incidentCaseSummarySwitcher = (status) => {
    setIncidentCaseSummary(status);
  };

  const renderWidget = (widget) => {
    switch (widget.i) {
      case 'incidentCount':
        return (
          <Card sx={{ height: '100%' }}>
            <CardContent component={'h2'} sx={{ position: 'relative', margin: '0px', padding: '5px 20px' }}>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Typography variant="h5">Incidents</Typography>
                {loadingCases ? (
                  <VistaLoader height={'30px'} iconSize={28} />
                ) : (
                  <IncidentChart
                    count={totalIncidents}
                    cases={totalCases > 0 ? totalCases : 1}
                    totalCases={totalCases}
                    totalPolicyViolations={totalPolicyViolation}
                  />
                )}
              </Box>
            </CardContent>
          </Card>
        );
      case 'incidentComplianceViolations':
        return (
          <>
            <div>
              <ViolationItems style="left" title="Incident" data={incidentPercentage} loading={loadingCases} />
              <ViolationItems
                style="right"
                title="Compliance Violation"
                data={violationPercentage}
                loading={loadingCases}
              />
            </div>
          </>
        );
      case 'notableHost':
        return (
          <>
            <NotableItems
              title={'Notable Host'}
              apiKey={'dashboardNotableHostList'}
              icon={<Computer />}
              score={'host_score'}
              text={'host_name'}
              bgcolor={'primary.main'}
            />
          </>
        );
      case 'notableUser':
        return (
          <>
            <NotableItems
              title={'Notable User'}
              apiKey={'dashboardNotableUserList'}
              icon={<Person />}
              score={'user_score'}
              text={'user_name'}
              bgcolor={'secondary.main'}
            />
          </>
        );
      case 'geoChart':
        return (
          <Paper component={Stack} direction="column" justifyContent="center">
            <GeoChart title="Geo Activity" />
          </Paper>
        );
      case 'starChart':
        return <SiteChart />;
      case 'incidentCaseSummary':
        return (
          <Paper component={Stack} direction="column" justifyContent="center" sx={{ height: '100%' }}>
            <div>
              <label>
                <input
                  type="radio"
                  name="release"
                  defaultChecked={incidentCaseSummary === 'CASE'}
                  onClick={(e) => incidentCaseSummarySwitcher('CASE')}
                />
                Case summary by Mitre ATT&CK category
              </label>
              <label>
                <input
                  type="radio"
                  name="release"
                  defaultChecked={incidentCaseSummary === 'INCIDENT'}
                  onClick={(e) => incidentCaseSummarySwitcher('INCIDENT')}
                />
                Incident summary by Mitre ATT&CK category
              </label>
            </div>
            <div style={{ height: 'calc(100% - 50px)' }}>
              {incidentCaseSummary === 'INCIDENT' && (
                <IncidentAndCaseSummary
                  title={'Incident summary by Mitre ATT&CK category'}
                  apiKey={'dashboardMitreIncidentsByTactics'}
                />
              )}
              {incidentCaseSummary === 'CASE' && (
                <IncidentAndCaseSummary
                  title={'Case summary by Mitre ATT&CK category'}
                  apiKey={'dashboardMitreCasesByTactics'}
                />
              )}
            </div>
          </Paper>
        );
      case 'anomaly':
        return <AnomalyChart />;
      case 'activity':
        return <ActivityChart />;
      case 'dataProcessed':
        return <DataProcessedGauge />;
      default:
        return <div>Untitled</div>;
    }
  };

  return (
    <ResponsiveReactGridLayout
      layout={layouts}
      breakpoints={breakPoints}
      cols={cols}
      verticalCompact={true}
      preventCollision={false}
      autoSize={true}
      rowHeight={75}
      margin={margins}
      onLayoutChange={handleModify}
      style={{ width: '100%' }}
      width={width}
    >
      {widgetArray?.map((widget, index) => {
        return (
          <Card
            itemID={index}
            className={classes.dashboardTileBg}
            key={index}
            data-grid={{
              x: widget.x,
              y: widget.y,
              w: widget.w,
              h: widget.h,
              i: widget.i,
              minW: widget.minW ? widget.minW : widget.w,
              maxW: widget.maxW ? widget.maxW : Infinity,
              minH: widget.minH ? widget.minH : widget.h,
              maxH: widget.maxH ? widget.maxH : Infinity,
              isDraggable: widget?.static ? false : widget?.isDraggable ? widget.isDraggable : true,
              isResizable: widget?.static ? false : widget?.isResizable ? widget.isDraggable : true,
              static: widget?.static ? widget.static : false,
            }}
          >
            <Button
              variant="contained"
              size="small"
              color="error"
              onClick={() => handleDelete(widget.i)}
              style={{ float: 'right', padding: '0px', minWidth: '20px', display: 'none' }}
            >
              X
            </Button>
            {renderWidget(widget)}
          </Card>
        );
      })}
    </ResponsiveReactGridLayout>
  );
};

export default withSize({ refreshMode: 'debounce', refreshRate: 60 })(VistaDashboardGrid);

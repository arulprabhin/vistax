import React, { useState, useEffect } from 'react';
import moment from 'moment';
import VistaLoader from '@logrhythm/shared/VistaLoader';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, Paper, Typography } from '@mui/material';
import { makeApiRequest } from '../../utils';
import { useSelector } from 'react-redux';
import { CHART_COLORS } from './style';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import BarChartIcon from '@mui/icons-material/BarChart';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const extractUniqueKeys = (result) => {
  return Array.from(new Set(result.body.result.flatMap((r) => r.values.map((m) => m.key))));
};

const formatResultForChart = (result, keys) => {
  let data = [];
  result.body.result.forEach((r) => {
    let value = { timestamp: r.timestamp, timeStr: r.timeStr, total: r.total };
    keys.forEach((k) => {
      let match = r.values.filter((v) => v.key === k);
      value[k] = match.length > 0 ? match[0].docCount : 0;
    });
    data.push(value);
  });
  return data;
};

const convertToObj = (key, color) => {
  if (key.length >= 0) {
    let itemsObj = key.map((val, index) => {
      return {
        key: val,
        color: color[index % color.length],
      };
    });
    return itemsObj;
  } else {
    return null;
  }
};

export default function CaseTrendChart({ type, aggBy, initType }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [keys, setKeys] = useState([]);
  const [interval, setInterval] = useState(false);
  const { global } = useSelector((state) => state.user);
  const [chartType, setChartType] = React.useState(initType ?? 'line');
  const { searchRange, searchStart, searchEnd, searchMoment } = global;

  const formatXAxis = (interval) => {
    const format =
      interval === '1y'
        ? 'YYYY'
        : interval === '180d' || interval === '90d' || interval === '1M'
        ? 'YYYY-MMM'
        : interval === '15d' || interval === '1w' || interval === '1d'
        ? 'YYYY-MM-DD'
        : 'YYYY-MM-DD HH:mm:ss';
    return moment(interval).format(format);
  };

  const handleAlignment = (event, newChartType) => {
    setChartType(newChartType);
  };

  const getCaseAggregation = async () => {
    try {
      setLoading(true);
      const response = await makeApiRequest({
        key: 'caseAggregation',
        pathParam: `${type}/${aggBy}/${searchStart.getTime()}/${searchEnd.getTime()}`,
      });
      const keyArray = extractUniqueKeys(response.data);
      setInterval(response.data.body.interval);
      setKeys(convertToObj(keyArray, CHART_COLORS));
      setData(formatResultForChart(response.data, keyArray));
      setLoading(false);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCaseAggregation();
  }, [global]);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <Card sx={{ paddingBottom: '0', width: '200px', height: '300px' }}>
          <CardHeader
            titleTypographyProps={{ variant: 'h6' }}
            title={`${moment(payload[0].payload.timestamp).format('MMMM D, ddd')}
           ${moment(payload[0].payload.timestamp).format('h:mm:ss a')}`}
          />
          <CardContent sx={{ paddingTop: 0 }}>
            {Object.entries(payload[0].payload).map((e, i) => (
              <React.Fragment key={i}>
                {[e[0]].toString().includes('time') || [e[0]].toString().includes('total') ? null : isNaN(e[0]) ? (
                  <p className="intro"> {[e[0]] + ': ' + e[1]}</p>
                ) : (
                  <p className="intro">{'No. of ' + type + ' with ' + aggBy + ' ' + e[0] + ': ' + e[1]}</p>
                )}
              </React.Fragment>
            ))}
          </CardContent>
        </Card>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      <Paper sx={{ height: 325, width: '100%' }}>
        <Typography variant="subtitle1" sx={{ paddingLeft: '15px', paddingTop: '8px', marginBottom: '20px' }}>
          <ToggleButtonGroup
            value={chartType}
            exclusive
            onChange={handleAlignment}
            aria-label="Switch Chart Type"
            size="small"
            sx={{ mr: 2 }}
          >
            <ToggleButton value="line" aria-label="Line Chart">
              <SsidChartIcon />
            </ToggleButton>
            <ToggleButton value="bar" aria-label="Bar Chart">
              <BarChartIcon />
            </ToggleButton>
          </ToggleButtonGroup>
          {type === 'incident' ? 'Incident' : type === 'policy' ? 'Policy violation' : type === 'case' ? 'Case' : ''}{' '}
          Trend by {aggBy}
        </Typography>
        {loading ? (
          <VistaLoader variant={'incidentGraph'} count={56} />
        ) : (
          <ResponsiveContainer width={'100%'} height={250}>
            {chartType === 'line' ? (
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="timestamp" tickFormatter={formatXAxis} />
                <YAxis />
                <Tooltip cursor={false} content={<CustomTooltip />} />
                {keys.map((label, index) => (
                  <Line
                    stroke={label.color}
                    dot={false}
                    key={index}
                    strokeWidth={2}
                    type="monotone"
                    dataKey={label.key}
                    activeDot={{ r: 4 }}
                  />
                ))}
              </LineChart>
            ) : (
              <BarChart
                width={800}
                height={270}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="timestamp" tickFormatter={formatXAxis} />
                <YAxis />
                <Tooltip cursor={false} content={<CustomTooltip />} />
                {keys.map((label, index) => (
                  <Bar fill={label.color} dot={false} key={index} dataKey={label.key} />
                ))}
              </BarChart>
            )}
          </ResponsiveContainer>
        )}
      </Paper>
    </>
  );
}

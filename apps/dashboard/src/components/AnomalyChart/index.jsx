import React, { useEffect, useState } from 'react';
import { Area, ComposedChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { makeApiRequest } from '../../utils';
import { useSelector } from 'react-redux';
import useStyles from '../ActivityChart/style';
import moment from 'moment';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <Card sx={{ paddingBottom: '0', width: '200px', height: '200px' }}>
        <CardHeader
          titleTypographyProps={{ variant: 'h6' }}
          title={`${moment(payload[0].payload.timestamp).format('MMMM D, ddd')}
           ${moment(payload[0].payload.timestamp).format('h:mm:ss a')}`}
        />
        <CardContent sx={{ paddingTop: 0 }}>
          <p className="intro">
            Severity:
            {payload[0].payload.severity.pct50}
          </p>
          <p className="intro">
            Certanity:
            {payload[0].payload.certanity.pct50}
          </p>
        </CardContent>
      </Card>
    );
  }
  return null;
};

export default function AnomalyChart({ data }) {
  const { theme } = useSelector((state) => state.user);
  const classes = useStyles();
  const [AnomalyData, setAnomalyData] = useState([]);

  const formatXAxis = (tickItem) => {
    return moment(tickItem).format('h:mm:ss');
  };

  const getAnomalyData = async () => {
    try {
      const response = await makeApiRequest({
        key: 'dashboardAnomalyChart',
        body: {},
        headers: { 'Content-Type': 'application/json' },
        method: 'GET',
      });
      setAnomalyData(response.data.body.dataArry);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAnomalyData();
  }, []);

  for (let i in data) {
    data[i].severity.sarea = data[i].severity.pct100 - data[i].severity.pct0;
    data[i].severity.scarea = data[i].certanity.pct0 - data[i].severity.pct100;
    data[i].certanity.carea = data[i].certanity.pct100 - data[i].certanity.pct0;
  }

  return (
    <>
      <Typography
        className={classes.cardTitle}
        variant="subtitle1"
        sx={{ paddingLeft: '15px', paddingTop: '8px', marginBottom: '4px' }}
      >
        Anomaly
      </Typography>
      <ResponsiveContainer width={'100%'} height={295}>
        <ComposedChart
          width={500}
          height={300}
          data={AnomalyData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <defs>
            <linearGradient id="colorsarea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8884d8" stopOpacity={0.4} />
              <stop offset="50%" stopColor="#8884d8" stopOpacity={0} />
              <stop offset="80%" stopColor="#8884d8" stopOpacity={0.4} />
            </linearGradient>
            <linearGradient id="colorcarea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00FF7F" stopOpacity={0.4} />
              <stop offset="75%" stopColor="#00FF7F" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="timestamp" tickFormatter={formatXAxis} />
          <YAxis />
          <Tooltip cursor={false} content={<CustomTooltip />} />
          <Line type="monotone" dataKey="severity.pct50" stroke="#8884d8" strokeWidth={4} activeDot={{ r: 8 }} />
          <Area type="monotone" dataKey="severity.pct0" stackId="1" fill="transparent" />
          <Area
            type="monotone"
            dataKey="severity.sarea"
            stackId="1"
            stroke="#8884d8"
            strokeWidth={1}
            fill="url(#colorsarea)"
          />
          <Area type="monotone" dataKey="severity.scarea" stackId="1" fill="transparent" />
          <Area type="monotone" dataKey="certanity.carea" stackId="1" fill="#00FF7F" strokeWidth={1} />
          <Line type="monotone" dataKey="certanity.pct50" stroke="#00FF7F" strokeWidth={4} activeDot={{ r: 8 }} />
        </ComposedChart>
      </ResponsiveContainer>
    </>
  );
}

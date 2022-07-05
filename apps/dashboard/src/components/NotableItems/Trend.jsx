import React from 'react';
import { LineChart, Line, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { Card, CardHeader, CardContent, Typography } from '@mui/material';
import './style.css';
import moment from 'moment';

export default function NotableItemTrend({ name, critical, watched, data }) {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <Card sx={{ paddingBottom: '0', width: '280px' }}>
          <CardContent sx={{ paddingTop: 0 }}>
            <Typography variant={'body2'}>
              Reported On: {moment(new Date(payload[0].payload.timestamp)).format('YYYY-MM-DD hh:mm:ss A')}
            </Typography>
            {/*<Typography variant={'body2'}>Reported On: {payload[0].payload.dateStr}</Typography>*/}
            <Typography variant={'body2'}>Score: {payload[0].payload.score ?? 0}</Typography>
            {/*<Typography variant={'body2'}>Critical: {critical ? 'Yes' : 'No'}</Typography>
            <Typography variant={'body2'}>Watched: {watched ? 'Yes' : 'No'}</Typography>*/}
          </CardContent>
        </Card>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width={300} height={50}>
      <LineChart data={data}>
        {/*<YAxis />*/}
        {/* <XAxis dataKey="dateStr" fontSize={11} />*/}
        <Tooltip cursor={false} content={<CustomTooltip />} />
        <Line type="monotone" dataKey="score" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}

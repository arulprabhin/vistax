import React, { useEffect, useState } from 'react';
import { Line, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart } from 'recharts';
import { Paper, Typography } from '@mui/material';
import VistaLoader from '@logrhythm/shared/VistaLoader';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { makeApiRequest } from '../../utils';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <Card sx={{ paddingBottom: '0', width: '150px', height: '125px' }}>
        <CardHeader
          titleTypographyProps={{ variant: 'h7' }}
          title={`${moment(payload[0].payload.timestamp).format('D MMM YYYY, ddd')}`}
        />
        <CardContent sx={{ paddingTop: 0 }}>
          <p className="intro">
            Incident:
            {payload[0].payload.incident}
          </p>
        </CardContent>
      </Card>
    );
  }
  return null;
};

export default function IncidentHistory({ tableType, gte, lte }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [interval, setInterval] = useState(false);

  const getHistorical = async () => {
    try {
      setLoading(true);
      const response = await makeApiRequest({
        key: 'incidentHistoricalGraph',
        pathParam: `${gte}/${lte}`,
      });

      setInterval(response.data.body.interval);
      setData(response.data.body.result);
      setLoading(false);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getHistorical();
  }, [global]);

  const formatXAxis = (tickItem) => {
    return moment(tickItem).format(interval === '180d' ? 'YYYY' : 'MMM D');
  };

  return (
    <>
      <Paper sx={{ height: 325, width: '100%' }}>
        <Typography variant="subtitle1" sx={{ paddingLeft: '15px', paddingTop: '8px', marginBottom: '20px' }}>
          {tableType === 'incident'
            ? 'Incident'
            : tableType === 'policy'
            ? 'Policy violation'
            : tableType === 'case'
            ? 'Case'
            : ''}{' '}
          Histogram
        </Typography>
        {loading ? (
          <VistaLoader variant={'incidentGraph'} count={56} />
        ) : (
          <ResponsiveContainer width={'100%'} height={250}>
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
              <Line
                type="monotone"
                dataKey="incident"
                stroke="#8884d8"
                dot={false}
                strokeWidth={4}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </Paper>
    </>
  );
}

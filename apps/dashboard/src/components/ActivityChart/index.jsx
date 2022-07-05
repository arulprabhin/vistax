import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Bar, ComposedChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Card, CardContent, Typography } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import { makeApiRequest } from '../../utils';
import useStyles from '../ActivityChart/style';
import { useSelector } from 'react-redux';
import VistaLoader from '@logrhythm/shared/VistaLoader';

const CustomizedDot = ({ cx, cy, value, fill, stroke }) => {
  if (value > 0) {
    return (
      <circle cx={cx - 0.5} r="5" cy={cy} fill={fill} stroke={stroke}>
        <animate attributeName="r" from="5.5" to="4" dur="1500ms" begin="0ms" repeatCount="indefinite" />
      </circle>
    );
  } else {
    return '';
  }
};

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
          {payload[0].payload.http && (
            <p className="intro" style={{ color: '#2788a3' }}>
              Http :{payload[0].payload.http}
            </p>
          )}
          {payload[0].payload.ssl && (
            <p className="intro" style={{ color: '#4367a8' }}>
              Ssl :{payload[0].payload.ssl}
            </p>
          )}
          {payload[0].payload.connection && (
            <p className="intro" style={{ color: '#8884d8' }}>
              Connection :{payload[0].payload.connection}
            </p>
          )}
        </CardContent>
      </Card>
    );
  }

  return null;
};

export default function ActivityGraph() {
  const { theme } = useSelector((state) => state.user);
  const classes = useStyles();
  const [activityData, setActivityData] = useState([]);
  const getActivityData = async () => {
    try {
      const response = await makeApiRequest({
        key: 'dashboardActivityChart',
      });
      for (let i in response.data.body) {
        response.data.body[i].newssl = response.data.body[i].connection + response.data.body[i].ssl;
        response.data.body[i].newhttp = response.data.body[i].newssl + response.data.body[i].http;
      }
      setActivityData(response.data.body);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getActivityData();

    const id = setInterval(() => {
      getActivityData();
    }, 10000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <React.Fragment>
      <Typography
        className={classes.cardTitle}
        variant="subtitle1"
        sx={{ paddingLeft: '15px', paddingTop: '8px', marginBottom: '4px' }}
      >
        Activity
      </Typography>
      <ResponsiveContainer width={'100%'} height={295}>
        {activityData.length > 0 ? (
          <ComposedChart
            width={500}
            height={200}
            data={activityData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="timeStr" />
            <YAxis />
            <Tooltip cursor={false} content={<CustomTooltip />} />
            <Bar dataKey="connection" stackId="a" barSize={4} fill="orange" />
            <Bar dataKey="ssl" stackId="a" barSize={4} fill="yellow" />
            {/* <Bar dataKey="http" stackId="a" barSize={4} fill="purple" />*/}
            <Line
              type="monotone"
              dataKey="connection"
              stroke="transparent"
              dot={<CustomizedDot fill={'orange'} stroke={'white'} />}
              isAnimationActive={false}
            />
            <Line
              type="monotone"
              dataKey="newssl"
              stroke="tranparent"
              dot={<CustomizedDot fill={'yellow'} stroke={'white'} />}
              isAnimationActive={false}
            />
            {/*<Line
              type="monotone"
              dataKey="newhttp"
              stroke="transparent"
              dot={<CustomizedDot fill={'purple'} stroke={'white'} />}
              isAnimationActive={false}
            />*/}
          </ComposedChart>
        ) : (
          <VistaLoader variant={'activityChart'} count={30} />
        )}
      </ResponsiveContainer>
    </React.Fragment>
  );
}

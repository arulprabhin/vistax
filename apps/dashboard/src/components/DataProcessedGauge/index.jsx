import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
import { Typography } from '@mui/material';
import useStyles from '../NotableItems/style';
import './style.css';
import { makeApiRequest } from '../../utils';
import VistaLoader from '@logrhythm/shared/VistaLoader';

export function getData(trans, rec) {
  return [
    ['Label', 'Value'],
    [`Transmitted`, trans.value],
    [`Received`, rec.value],
  ];
}

export const options = {
  width: 400,
  height: 200,
  redFrom: 768,
  redTo: 1024,
  yellowFrom: 512,
  yellowTo: 768,
  minorTicks: 5,
  fill: 'transparent',
  min: 0,
  max: 1024,
  animation: { duration: 800, easing: 'inAndOut' },
};

export default function DataProcessedGauge() {
  const classes = useStyles();
  const [data, setData] = useState(getData(0, 0));
  const [initial, setInitial] = useState(true);

  const getProcessNodeData = async () => {
    try {
      const response = await makeApiRequest({
        key: 'dashboardDataProcessedByNode',
        body: {},
        headers: { 'Content-Type': 'application/json' },
        method: 'GET',
      });
      setData(getData(response.data?.body?.trans, response.data?.body?.rec));
      setInitial(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProcessNodeData();
    const id = setInterval(() => {
      getProcessNodeData();
    }, 5000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <>
      <Typography
        className={classes.cardTitle}
        variant="subtitle1"
        sx={{ paddingLeft: '15px', paddingTop: '8px', marginBottom: '4px' }}
      >
        Data Processed by Node
      </Typography>
      {initial ? (
        <VistaLoader variant={'dataProcessed'} />
      ) : (
        <Chart
          className={'custom-bg-gauge'}
          style={{ padding: '15px 0px' }}
          chartType="Gauge"
          width="100%"
          height="200px"
          data={data}
          options={options}
        />
      )}
    </>
  );
}

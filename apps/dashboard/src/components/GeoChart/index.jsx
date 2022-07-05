import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Chart } from 'react-google-charts';
import { makeApiRequest } from '../../utils';
import { CardHeader, Typography } from '@mui/material';
import useStyles from '../GeoChart/style';
import VistaLoader from '@logrhythm/shared/VistaLoader';

export default function GeoChart({ title }) {
  const { theme } = useSelector((state) => state.user);
  const classes = useStyles();

  const [geoData, setGeoData] = useState([]);
  const getGeoData = async () => {
    try {
      let data = '';
      const response = await makeApiRequest({
        key: 'dashboardGeoMapData',
        body: data,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        method: 'GET',
      });

      let chartData = new Array(['Latitude', 'Longitude', 'City', 'r']);
      response.data.body.forEach((cv, id, arr) => {
        chartData.push([
          cv.location?.lat,
          cv.location?.lon,
          cv?.city_name ?? cv?.region_name ?? cv?.continent_name,
          10,
        ]);
      });
      setGeoData(chartData);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getGeoData();
  }, []);

  const options = {
    backgroundColor: theme === 'dark' ? '#111f2f' : '#ffffff',
    displayMode: 'auto',
    datalessRegionColor: theme === 'dark' ? '#cbcbcb' : '#e4e3e3',
    defaultColor: '#de1313',
    sizeAxis: { minValue: 0, maxValue: 100 },
    legend: false,
    colorAxis: { colors: ['red', 'crimson'] },
  };

  return (
    <div style={{ padding: '10px' }}>
      <CardHeader
        sx={{ marginBottom: '0px', paddingBottom: '0px', color: 'gray' }}
        title={
          <Typography className={classes.cardTitle} variant="subtitle1">
            {title}
          </Typography>
        }
        titleTypographyProps={{ variant: 'subtitle2' }}
      />
      {geoData.length == 0 ? (
        <VistaLoader height={'calc(100% - 50px)'} />
      ) : (
        <Chart chartType="GeoChart" width="100%" height="calc(100% - 50px)" data={geoData} options={options} />
      )}
    </div>
  );
}

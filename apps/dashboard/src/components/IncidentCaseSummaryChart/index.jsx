import React, { useEffect, useState } from 'react';
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { makeApiRequest } from '../../utils';
import VistaLoader from '@logrhythm/shared/VistaLoader';
import { COLORS, getOptions } from './config';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function IncidentCaseSummaryChart({ title, apiKey }) {
  const [data, setData] = useState({});
  const postProcessChartData = (chartData) => {
      const processedData = {
        labels: chartData.labels,
        datasets: chartData.datasets.map((val, index) => {
          const theColors = COLORS[index % COLORS.length];
          val.backgroundColor = theColors.bg.color;
          val.hoverBackgroundColor = theColors.hover.color;
          if (theColors.bg.border) val.borderColor = theColors.bg.border;
          if (theColors.hover.border) val.hoverBorderColor = theColors.hover.border;
          return val;
        }),
        barThickness: 'flex',
        maxBarThickness: 10,
      };
      return processedData;
    },
    getChartData = async () => {
      try {
        const response = await makeApiRequest({ key: apiKey });
        setData(postProcessChartData(response.data.body));
      } catch (err) {
        console.error(err);
      }
    };

  useEffect(() => {
    getChartData();
  }, []);

  return (
    <React.Fragment>
      {Object.keys(data).length ? (
        <Bar options={getOptions(title)} data={data} />
      ) : (
        <VistaLoader variant={'horizontalBar'} count={5} />
      )}
    </React.Fragment>
  );
}

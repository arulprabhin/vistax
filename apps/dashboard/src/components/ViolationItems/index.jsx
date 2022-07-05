import React from 'react';
import { RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts';
import './style.css';
import VistaLoader from '@logrhythm/shared/VistaLoader';

export function getVal(uvData) {
  if (!uvData) return [];
  return [
    {
      uv: 100,
      fillOpacity: 0.001,
    },
    {
      uv: uvData,
      fill: '#83a6ed',
    },
    {
      uv: uvData,
      fill: '#ffc658',
    },
  ];
}

export default function ViolationItems({ style, title, data, loading }) {
  const itemStyle = {
    float: style,
    marginLeft: style == 'left' ? '20px' : '0px',
    marginRight: style == 'right' ? '20px' : '0px',
    marginTop: '5px',
  };

  return (
    <ResponsiveContainer width="100%" height="80%">
      <div className={'custom-bg-radial-bar'} style={itemStyle}>
        {loading ? (
          <VistaLoader variant={'violationItem'} count={6} />
        ) : (
          <React.Fragment>
            <RadialBarChart
              width={180}
              height={200}
              innerRadius={20}
              outerRadius={100}
              barSize={10}
              data={getVal(data)}
            >
              <RadialBar minAngle={15} background clockWise dataKey="uv" data={getVal(data)} />
            </RadialBarChart>
            <div style={{ marginLeft: '45%', marginTop: '-110px' }}>{data}%</div>
            <div style={{ marginTop: '80px', textAlign: 'center' }}>{title}</div>
          </React.Fragment>
        )}
      </div>
    </ResponsiveContainer>
  );
}

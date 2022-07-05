import React from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell, Label, Sector } from 'recharts';
import { Card, CardContent, Typography } from '@mui/material';

const Tip = ({ setShowTooltip, name, score, cases, incidents, policies, critical, watched, ...rest }) => {
  const [payload, setPayload] = React.useState(rest.payload);
  React.useEffect(() => {
    rest.payload.length && setPayload(rest.payload);
  }, [rest.payload]);
  return payload.length ? (
    <Card
      sx={{ paddingBottom: '0', width: '250px', zIndex: 'tooltip' }}
      onMouseLeave={() => setShowTooltip(false)}
      onMouseMove={(e) => e.stopPropagation()}
    >
      <CardContent sx={{}}>
        {/*<Typography variant={'body2'}>{`${payload[0].name}: ${payload[0].value}`}</Typography>*/}
        <Typography variant={'body2'}>
          {`Score: ${score}`}, {`Cases: ${cases}`}
        </Typography>
        <Typography variant={'body2'}>
          {`Incidents: ${incidents}`}, {`Policy Violations: ${policies}`}
        </Typography>
        <Typography variant={'body2'}>
          {`Critical: ${critical ? 'Yes' : 'No'}`}, {`Watched: ${watched ? 'Yes' : 'No'}`}
        </Typography>
      </CardContent>
    </Card>
  ) : null;
};

const renderActiveShape = ({
  cx,
  cy,
  innerRadius,
  outerRadius,
  startAngle,
  endAngle,
  fill,
  midAngle,
  payload,
  percent,
  value,
}) => {
  return (
    <Sector
      cx={cx}
      cy={cy}
      innerRadius={innerRadius}
      outerRadius={outerRadius}
      startAngle={startAngle}
      endAngle={endAngle}
      isAnimationActive={true}
      fill={fill}
    />
  );
};

export const NotablePieChart = ({ name, score, cases, incidents, policies, critical, watched }) => {
  const [showTooltip, setShowTooltip] = React.useState(false);

  const data = [
    {
      name: 'Cases',
      value: cases,
      color: 'rgba(57, 67, 67, 0.35)',
    },
    {
      name: 'Incidents',
      value: incidents,
      color: '#1976d2',
    },
  ];

  return (
    <ResponsiveContainer height={33} width={33} style={{ marginLeft: '5px' }}>
      <PieChart onMouseLeave={() => setShowTooltip(false)}>
        <Pie
          dataKey="value"
          data={data}
          outerRadius={16}
          innerRadius={12}
          cx={12}
          cy={12}
          stroke="none"
          onMouseEnter={() => setShowTooltip(true)}
          activeIndex={1}
          activeShape={renderActiveShape}
        >
          {data.map((obj2, i) => (
            <Cell key={1} fill={obj2.color} />
          ))}
          <Label
            value={score}
            position="center"
            fill="grey"
            style={{
              fontSize: '14px',
              fontWeight: 'bold',
              fontFamily: 'Roboto',
            }}
            onMouseEnter={() => setShowTooltip(true)}
          />
        </Pie>
        {showTooltip && (
          <Tooltip
            isAnimationActive={false}
            content={
              <Tip
                setShowTooltip={setShowTooltip}
                name={name}
                score={score}
                cases={cases}
                incidents={incidents}
                policies={policies}
                critical={critical}
                watched={watched}
              />
            }
            wrapperStyle={{
              visibility: 'visible',
              pointerEvents: 'auto',
              left: '-260px',
              top: '-30px',
              zIndex: 1500,
              backgroundColor: 'text.secondary',
            }}
          />
        )}
      </PieChart>
    </ResponsiveContainer>
  );
};

import React from 'react';
import { Cell, Label, Pie, PieChart, ResponsiveContainer, Sector, Tooltip } from 'recharts';
import { Card, CardContent, Typography } from '@mui/material';

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

const Tip = ({ setShowTooltip, cases, incidents, policies, ...rest }) => {
  const [payload, setPayload] = React.useState(rest.payload);
  React.useEffect(() => {
    rest.payload.length && setPayload(rest.payload);
  }, [rest.payload]);
  return payload.length ? (
    <Card
      sx={{ paddingBottom: '0', width: '250px', zIndex: 'tooltip', backgroundColor: 'primary.main' }}
      onMouseLeave={() => setShowTooltip(false)}
      onMouseMove={(e) => e.stopPropagation()}
    >
      <CardContent sx={{}}>
        <Typography variant={'body2'}>
          {`Cases: ${cases}`}, {`Incidents: ${incidents}`}, {`Policy Violations: ${policies}`}
        </Typography>
      </CardContent>
    </Card>
  ) : null;
};

export default function IncidentChart({ count, cases, totalCases, totalPolicyViolations }) {
  const [showTooltip, setShowTooltip] = React.useState(false);
  let adjustedValue = 10 ** String(count).length - count;
  if (adjustedValue === 0) adjustedValue = 1;
  const data = [
    {
      value: adjustedValue >= cases ? cases : adjustedValue,
      color: '#644F4A40',
    },
    {
      value: count,
      color: 'coral',
    },
  ];

  return (
    <ResponsiveContainer height={65} width={65}>
      <PieChart
        style={{ cursor: 'pointer' }}
        onClick={(event) => alert('ToDo: to incidents page')}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <Pie
          stroke="none"
          dataKey="value"
          data={data}
          outerRadius={30}
          innerRadius={25}
          cx={30}
          cy={30}
          activeIndex={1}
          onMouseEnter={() => setShowTooltip(true)}
          activeShape={renderActiveShape}
        >
          {data.map((obj, i) => (
            <Cell key={i} fill={obj.color} />
          ))}
          <Label
            value={count}
            position="center"
            stroke={'slategray'}
            fill={'slategray'}
            onMouseEnter={() => setShowTooltip(true)}
            style={{
              fontSize: '18px',
              fontWeight: 'bold',
            }}
          />
        </Pie>
        {showTooltip && (
          <Tooltip
            isAnimationActive={false}
            content={
              <Tip
                setShowTooltip={setShowTooltip}
                cases={totalCases}
                incidents={count}
                policies={totalPolicyViolations}
              />
            }
            wrapperStyle={{
              visibility: 'visible',
              pointerEvents: 'auto',
              left: '-250px',
              zIndex: 9999,
            }}
          />
        )}
      </PieChart>
    </ResponsiveContainer>
  );
}

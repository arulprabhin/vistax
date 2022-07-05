import React, { lazy, useEffect, useState } from 'react';
import VistaLoader from '@logrhythm/shared/VistaLoader';
import { Box, Card, CardContent, CardHeader, Paper } from '@mui/material';
import { Area, Bar, ComposedChart, Legend, ReferenceArea, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import cloneDeep from 'lodash.clonedeep';
import { makeApiRequest } from '../../utils';
import { CHART_COLORS } from './style';
import moment from 'moment';
import { buildMoment } from '@logrhythm/shared/common';
import { useSelector } from 'react-redux';

const EntryTypeChip = lazy(() => import('@logrhythm/shared/EntryTypeChip'));

const mergeObjectsInUnique = (array, property) => {
  let newArray = new Map();
  array.map((item) => {
    const propertyValue = item[property];
    newArray.has(propertyValue)
      ? newArray.set(propertyValue, Object.assign(Object.assign({}, item), newArray.get(propertyValue)))
      : newArray.set(propertyValue, item);
  });

  return Array.from(newArray.values());
};

const convertToObj = (key, color) => {
  if (key.length >= 0) {
    let itemsObj = key.map((val, index) => {
      return {
        key: val,
        color: color[index % color.length],
      };
    });
    return itemsObj;
  } else {
    return null;
  }
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <Card sx={{ paddingBottom: '0', width: '200px', height: '300px' }}>
        <CardHeader
          titleTypographyProps={{ variant: 'h6' }}
          title={`${moment(payload[0].payload.timestamp).format('yyyy MMMM D, ddd')}
           ${moment(payload[0].payload.timestamp).format('h:mm:ss a')}`}
        />
        <CardContent sx={{ paddingTop: 0 }}>
          {Object.entries(payload[0].payload).map((e, i) => (
            <React.Fragment key={i}>
              {[e[0]].toString().includes('timestamp') ? null : <p className="intro">{[e[0]] + ':' + e[1]}</p>}
            </React.Fragment>
          ))}
        </CardContent>
      </Card>
    );
  }
  return null;
};

const queryAggregation = {
  must_query: {},
  must_not_query: {},
  should_query: {},
  shouldnot_query: {},
  exists: {},
  dexists: {},
};

export default function HuntActivityChart() {
  const [data, setData] = useState([]);
  const [keys, setKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const { global } = useSelector((state) => state.user);
  const { searchRange, searchStart, searchEnd, searchMoment } = global;
  const [query, setQuery] = useState('*');
  const [gte, setGte] = useState((searchMoment ? buildMoment(searchMoment.from) : searchStart).getTime());
  const [lte, setLte] = useState((searchMoment ? buildMoment(searchMoment.to) : searchEnd).getTime());
  const [subQuery, setSubQuery] = useState(queryAggregation);
  const [refAreaLeft, setRefAreaLeft] = useState('');
  const [refAreaRight, setRefAreaRight] = useState('');
  const dataKey = 'timestamp';
  const [hover, setHover] = useState(
    keys.reduce(
      (a, { key }) => {
        a[key] = false;
        return a;
      },
      { hover: null }
    )
  );

  const [filterQuery, setFilterQuery] = useState([]);
  const getIdx = (data, val) => data.findIndex((x) => x.timestamp === val);

  const getAxisYDomain = (from, to) => {
    const refData = data.slice(getIdx(data, from), getIdx(data, to) + 1);
    const countData = refData.map((val) => val.timestamp);

    if (countData.length >= 2) {
      setGte(Math.min(...countData));
      setLte(Math.max(...countData));
    }

    return [Math.min(...countData), Math.max(...countData)];
  };

  const handleLegendMouseEnter = (value, index, e) => {
    if (!hover[value.dataKey]) {
      setHover({ ...hover, hover: value.dataKey });
      e.target.style.fontWeight = 'bold';
      e.target.style.cursor = 'pointer';
    }
  };

  const handleLegendMouseLeave = (value, index, e) => {
    setHover({ ...hover, hover: null });
    e.target.style.fontWeight = 'normal';
    e.target.style.cursor = 'auto';
  };

  const selectField = (e) => {
    setFilterQuery((ex) =>
      ex.find((x) => x.key === e.dataKey)
        ? ex.filter((x) => x.key !== e.dataKey)
        : [
            ...ex,
            {
              key: e.dataKey,
              isEntry: true,
              isDisable: false,
            },
          ]
    );
  };

  const formatXAxis = (tickItem) => {
    return moment(tickItem).format('h:mm:ss');
  };

  const zoom = () => {
    if (refAreaLeft === refAreaRight || refAreaRight === '') {
      this.setState(() => ({
        refAreaLeft: '',
        refAreaRight: '',
      }));
      return;
    }
    if (refAreaLeft > refAreaRight) {
      // xAxis domain
      getAxisYDomain(refAreaRight, refAreaLeft, '', 1);
    } else {
      // yAxis domain
      getAxisYDomain(refAreaLeft, refAreaRight, '', 1);
    }

    setRefAreaLeft('');
    setRefAreaRight('');
    setData(data.slice());
  };

  const getHuntChartData = async () => {
    try {
      setLoading(true);
      const response = await makeApiRequest({
        key: 'huntGraphData',
        body: {
          query: query,
          subQuery: btoa(JSON.stringify(subQuery)),
          size: 100,
        },
        pathParam: gte + '/' + lte,
        method: 'POST',
      });
      const resultArray = response.data.body.graphData.result;
      const resultVal = mergeObjectsInUnique(resultArray, 'timestamp');
      const resultKey = convertToObj(response.data.body.graphData.allkeys, CHART_COLORS);

      setKeys(resultKey);
      setData(resultVal);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    getHuntChartData();
    setQuery(moment(searchEnd).diff(moment(searchStart), 'days') >= 1 ? 'entry_type:*Event*' : '*');
  }, [query, gte, lte, global, subQuery]);

  useEffect(() => {
    const newSubQuery = cloneDeep(queryAggregation);

    filterQuery.forEach((queryString) => {
      if (!queryString.isDisable && queryString.isEntry) {
        if (!newSubQuery.must_query.entry_type) {
          newSubQuery.must_query.entry_type = [];
        }
        newSubQuery.must_query.entry_type.push(queryString.key);
      } else {
        if (!newSubQuery.must_not_query.entry_type) {
          newSubQuery.must_not_query.entry_type = [];
        }
        newSubQuery.must_not_query.entry_type.push(queryString.key);
      }
    });
    setSubQuery(newSubQuery);
  }, [filterQuery]);

  return (
    <>
      {filterQuery.map((filterQ) => (
        <Box
          sx={{
            display: 'inline-block',
            mr: 2,
            mb: 2,
            overflow: 'hidden',
          }}
          key={filterQ.key}
        >
          <EntryTypeChip query={filterQ} setQuery={setFilterQuery} />
        </Box>
      ))}
      {loading ? (
        <VistaLoader variant={'activityHuntChart'} count={120} />
      ) : (
        <Paper>
          <ResponsiveContainer width="100%" height={370}>
            <ComposedChart
              data={data}
              margin={{ top: 60, right: 80, left: 20, bottom: 0 }}
              onMouseDown={(e) => {
                try {
                  if (e != null) setRefAreaLeft(e.activeLabel);
                } catch (error) {
                  console.log('Error in selection', error);
                }
              }}
              onMouseMove={(e) => {
                try {
                  if (e != null) setRefAreaRight(e.activeLabel);
                } catch (error) {
                  console.log('Error in selection', error);
                }
              }}
              onMouseUp={zoom}
            >
              <XAxis allowDataOverflow dataKey={dataKey} tickFormatter={formatXAxis} />
              <YAxis allowDataOverflow yAxisId="1" />
              <Tooltip cursor={false} content={<CustomTooltip />} />
              <Legend
                onClick={selectField}
                onMouseEnter={handleLegendMouseEnter}
                onMouseLeave={handleLegendMouseLeave}
              />
              {keys.length > 0 &&
                keys.map((label, index) =>
                  label.key.toString().includes('Event') ? (
                    <Area
                      key={index}
                      dataKey={label.key}
                      type="monotone"
                      fill={label.color}
                      stroke={label.color}
                      yAxisId="1"
                      hide={hover[label.key] === true}
                      animationDuration={300}
                      fillOpacity={Number(hover.hover === label.key || !hover.hover ? 0.5 : 0.2)}
                    />
                  ) : (
                    <Bar
                      key={index}
                      yAxisId="1"
                      dataKey={label.key}
                      fill={label.color}
                      stackId={dataKey}
                      barSize={12}
                      hide={hover[label.key] === true}
                      fillOpacity={Number(hover.hover === label.key || !hover.hover ? 1.2 : 0.5)}
                    />
                  )
                )}
              {refAreaLeft && refAreaRight && (
                <ReferenceArea yAxisId="1" x1={refAreaLeft} x2={refAreaRight} strokeOpacity={0.3} />
              )}
            </ComposedChart>
          </ResponsiveContainer>
        </Paper>
      )}
    </>
  );
}

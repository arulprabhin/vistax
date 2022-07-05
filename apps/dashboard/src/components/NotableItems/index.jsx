import React, { useEffect, useState } from 'react';
import { Avatar, Box, Button, CardHeader, Chip, List, ListItem, ListItemAvatar } from '@mui/material';
import { ListItemText, Paper, Typography, deepOrange } from '@mui/material';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { makeApiRequest } from '../../utils';
import VistaLoader from '@logrhythm/shared/VistaLoader';
import useStyles from './style';
import { useSelector } from 'react-redux';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { buildMoment } from '@logrhythm/shared/common';
import NotableItemTrend from './Trend';
import { NotablePieChart } from './NotablePieChart';

const renderThumb = ({ style, ...props }) => {
  const thumbStyle = {
    backgroundColor: `rgba(99, 87, 132, 0.2)`,
  };
  return <div style={{ ...style, ...thumbStyle }} {...props} />;
};

export default function NotableItems({ title, apiKey, icon, bgcolor, text, score }) {
  const { global, site } = useSelector((state) => state.user);
  const { searchRange, searchStart, searchEnd, searchMoment } = global;
  const [notableData, setNotableData] = useState();

  const bgColor = bgcolor ? bgcolor : deepOrange[500];
  const classes = useStyles();

  const getNotableData = async () => {
    try {
      const searchFrom = (searchMoment ? buildMoment(searchMoment.from) : searchStart).getTime();
      const searchTill = (searchMoment ? buildMoment(searchMoment.to) : searchEnd).getTime();
      const response = await makeApiRequest({
        key: apiKey,
        pathParam: `${site}/${searchFrom}/${searchTill}/10`,
      });
      setNotableData(response.data.body);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setNotableData(null);
    getNotableData();
  }, [global, site]);

  return (
    <>
      <CardHeader
        sx={{ marginBottom: '0px', paddingBottom: '0px', color: 'gray' }}
        title={
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Typography className={classes.cardTitle} variant="subtitle1">
              {title}
            </Typography>
            <Box>
              <Button
                size="small"
                startIcon={<AccessTimeIcon fontSize={'small'} />}
                disabled={true}
                disableElevation={true}
                disableRipple={true}
                sx={{ mr: 1 }}
              >
                {searchRange}
              </Button>
              <Chip
                label={
                  notableData ? notableData.length : <VistaLoader width={'12px'} iconSize={12} color={'warning'} />
                }
                variant="outlined"
                icon={icon}
              />
            </Box>
          </Box>
        }
        titleTypographyProps={{ variant: 'subtitle2' }}
      />

      <Scrollbars
        style={{ height: 'calc(100% - 52px)' }}
        thumbMinSize={30}
        universal={true}
        renderThumbHorizontal={renderThumb}
        renderThumbVertical={renderThumb}
      >
        {notableData ? (
          <Paper style={{ boxShadow: 'none' }}>
            <List>
              {notableData.map((details, idx) => (
                <ListItem
                  key={details[text] + '_' + idx}
                  itemID={idx}
                  selected={false}
                  sx={{ mt: '5px', boxShadow: 1 }}
                  secondaryAction={
                    <NotablePieChart
                      name={details.user_name ?? details.host_name}
                      score={details[score]}
                      cases={details.summary.cases}
                      incidents={details.summary.incidents}
                      policies={details.summary.policyViolations}
                      critical={details.user_critical ?? details.host_critical ?? false}
                      watched={details.user_watched ?? details.host_watched ?? false}
                    />
                  }
                >
                  <ListItemAvatar>
                    <Avatar sx={{ backgroundColor: bgColor }} src={details.user_photo}>
                      {icon}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={details[text]}
                    sx={{ paddingRight: '15px', fontSize: '0.8rem', wordWrap: 'break-word;' }}
                  />
                  <NotableItemTrend
                    data={details.histogram}
                    critical={details.user_critical ?? details.host_critical ?? false}
                    watched={details.user_watched ?? details.host_watched ?? false}
                    name={details.user_name ?? details.host_name}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        ) : (
          <VistaLoader variant={'notableItem'} count={6} />
        )}
      </Scrollbars>
    </>
  );
}

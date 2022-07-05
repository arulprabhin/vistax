import React from 'react';
import { Typography } from '@mui/material';
import moment from 'moment';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    oppositeContent: {
      flex: 0.1,
    },
  })
);

export default function History({ data }) {
  const classes = useStyles();

  let resultArray = [];
  if (data.length > 0) {
    data.forEach(function (item) {
      if (item.refType == 'RestUpdateCaseState') {
        resultArray.push(
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary" className={classes.oppositeContent}>
              <Typography variant="subtitle1" className={classes.historyTimestamp}>
                {moment(item.timestamp).format('YYYY-MM-DD hh:mm A')}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="subtitle1" className={classes.floatLeft}>
                {'MUI changed state to'}
              </Typography>
              <Typography variant="subtitle1" className={classes.historyField}>
                {item.param3}
              </Typography>
              <Typography variant="subtitle1" className={classes.floatLeft}>
                {'by'}
              </Typography>
              <Typography variant="subtitle1" className={classes.historyField}>
                {item.param2}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        );
      }
      if (item.refType == 'RestUpdateCaseServicenow') {
        resultArray.push(
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary" className={classes.oppositeContent}>
              <Typography variant="subtitle1" className={classes.historyTimestamp}>
                {moment(item.timestamp).format('YYYY-MM-DD hh:mm A')}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="subtitle1" className={classes.floatLeft}>
                {'Servicenow incident state changed to'}
              </Typography>
              <Typography variant="subtitle1" className={classes.historyField}>
                {item.param2}
              </Typography>
              <Typography variant="subtitle1" className={classes.floatLeft}>
                {', case state changed to'}
              </Typography>
              <Typography variant="subtitle1" className={classes.historyField}>
                {item.param1}
              </Typography>
              <Typography variant="subtitle1" className={classes.floatLeft}>
                {'by'}
              </Typography>
              <Typography variant="subtitle1" className={classes.historyField}>
                {item.param2}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        );
      }
      if (item.refType == 'ReportCaseServicenow') {
        resultArray.push(
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary" className={classes.oppositeContent}>
              <Typography variant="subtitle1" className={classes.historyTimestamp}>
                {moment(item.timestamp).format('YYYY-MM-DD hh:mm A')}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="subtitle1" className={classes.floatLeft}>
                {'Reported case state'}
              </Typography>
              <Typography variant="subtitle1" className={classes.historyField}>
                {item.param1}
              </Typography>
              <Typography variant="subtitle1" className={classes.floatLeft}>
                {'to Servicenow, incident number'}
              </Typography>
              <Typography variant="subtitle1" className={classes.historyField}>
                {item.refUuid}
              </Typography>
              <Typography variant="subtitle1" className={classes.floatLeft}>
                {' '}
                {'incident state'}
              </Typography>
              <Typography variant="subtitle1" className={classes.historyField}>
                {item.param2}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        );
      }
      if (item.refType == 'Syslog') {
        resultArray.push(
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary" className={classes.oppositeContent}>
              <Typography variant="subtitle1" className={classes.historyTimestamp}>
                {moment(item.timestamp).format('YYYY-MM-DD hh:mm A')}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="subtitle1" className={classes.floatLeft}>
                {'Syslog sent to'}
              </Typography>
              <Typography variant="subtitle1" className={classes.historyField}>
                {item.param1}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        );
      }
      if (item.refType == 'Email') {
        resultArray.push(
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary" className={classes.oppositeContent}>
              <Typography variant="subtitle1" className={classes.historyTimestamp}>
                {moment(item.timestamp).format('YYYY-MM-DD hh:mm A')}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="subtitle1" className={classes.floatLeft}>
                {'Email sent to'}
              </Typography>
              <Typography variant="subtitle1" className={classes.historyField}>
                {item.param1}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        );
      }
      if (item.refType == 'CaseCreation') {
        resultArray.push(
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary" className={classes.oppositeContent}>
              <Typography variant="subtitle1" className={classes.historyTimestamp}>
                {moment(item.timestamp).format('YYYY-MM-DD hh:mm A')}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="subtitle1" className={classes.floatLeft}>
                {'Case created with score'}
              </Typography>
              <Typography variant="subtitle1" className={classes.historyField}>
                &nbsp;{item.entityScore}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        );
      }
      if (item.refType == 'IncidentCreation') {
        resultArray.push(
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary" className={classes.oppositeContent}>
              <Typography variant="subtitle1" className={classes.historyTimestamp}>
                {moment(item.timestamp).format('YYYY-MM-DD hh:mm A')}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="subtitle1" className={classes.floatLeft}>
                {'IncidentReported with score'}
              </Typography>
              <Typography variant="subtitle1" className={classes.historyField}>
                {item.entityScore}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        );
      }
    });
  }
  console.log(resultArray);
  return <Timeline position="alternate">{resultArray}</Timeline>;
}

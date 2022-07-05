import React, { useEffect, useState } from 'react';
import { makeApiRequest } from '../../utils';
import { Avatar, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, Tooltip } from '@mui/material';
import StarsIcon from '@mui/icons-material/Stars';
import ComputerIcon from '@mui/icons-material/Computer';

export default function CaseHostUserNetwork({ index, query, type, category, name }) {
  const [host, setHost] = useState({
    hostScore: 0,
    hostDescription: '',
    hostUuid: '',
    hostName: '',
  });
  const [user, setUser] = useState({
    userScore: 0,
    userDepartment: '',
    userUuid: '',
    userName: '',
    userPhoto: '',
  });

  const getCaseHostUserNetwork = async () => {
    try {
      const response = await makeApiRequest({
        key: 'getCaseHostUserNetworkByQuery',
        body: {
          index: index,
          query: query,
        },
        pathParam: `${type}`,
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
      });

      if (response.data.body.source.length > 0) {
        let result = response.data.body.source[0];

        if (type === 'host') {
          setHost({
            hostScore: result?.host_score,
            hostDescription: result?.host_description,
            hostUuid: result?.host_uuid,
            hostName: result?.host_name,
          });
        } else if (type === 'user') {
          setUser({
            userScore: result?.user_score,
            userDepartment: result?.user_department,
            userEmail: result?.user_email,
            userPhoto: result?.user_photo,
            userName: result?.user_name,
            userUuid: result?.user_uuid,
          });
        }
      } else {
        if (type === 'host') {
          setHost({
            hostName: name,
            hostScore: 0,
          });
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCaseHostUserNetwork();
  }, []);

  return (
    <>
      <Grid item xs={2} sm={4} md={4}>
        <Tooltip title={type === 'host' ? `${category}` + 'host' : `${category}` + 'user'} arrow>
          <List>
            <ListItem
              selected={false}
              sx={{ mt: '5px', boxShadow: 4 }}
              secondaryAction={
                category ? (
                  <IconButton edge="end" aria-label="star">
                    <StarsIcon />
                  </IconButton>
                ) : null
              }
            >
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: '#1776d2' }}>
                  <ComputerIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={type === 'host' ? `${host?.hostName}` : `${user?.userName}`}
                sx={{ paddingRight: '15px', fontSize: '0.8rem', wordWrap: 'break-word;' }}
              />
              <Avatar sx={{ bgcolor: '#df3e4e' }}>
                {type === 'host' ? `${host?.hostScore}` : `${user?.userScore}`}
              </Avatar>
            </ListItem>
          </List>
        </Tooltip>
      </Grid>
    </>
  );
}

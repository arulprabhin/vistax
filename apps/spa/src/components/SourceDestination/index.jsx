import React, { useEffect, useState } from 'react';
import { makeApiRequest } from '../../utils';
import CaseHostUserNetwork from './HostUserNetwork';
import {
  Avatar,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Tooltip,
  Typography,
} from '@mui/material';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

export default function CaseSourceAndDestination({ uuid }) {
  const [ioa, setIoa] = useState('');
  const [entityUuid, setEntityUuid] = useState('');
  const [entityType, setEntityType] = useState('');

  const getCaseSourceAndDestinationData = async () => {
    try {
      const response = await makeApiRequest({
        key: 'getCaseSourceAndDestinationByQuery',
        body: {
          query: 'entry_uuid:' + uuid + '',
        },
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
      });

      if (response.data.body.source.length > 0) {
        let result = response.data.body.source[0];

        setIoa(result?.ioa[0]);
        setEntityUuid(result?.ioa[0]?.entity_uuid);
        setEntityType(result?.entity_type);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCaseSourceAndDestinationData();
  }, []);

  let sourceArray = [],
    destArray = [],
    excludedOrigins = ['Carbonblack', 'SentinelOne', 'CiscoAMP'];

  if (excludedOrigins.indexOf(ioa.entry_origin) === -1) {
    if (entityUuid === ioa?.source?.host) {
      if ((entityType === 'Host' || entityType === 'Ip') && ioa?.source) {
        sourceArray.push(
          <CaseHostUserNetwork
            index={'entity-hosts'}
            query={entityUuid}
            type={'host'}
            category={'entity'}
            name={ioa?.source?.host}
          />
        );
      }
    } else if (entityUuid === ioa?.destination?.host) {
      if ((entityType === 'Host' || entityType === 'Ip') && ioa?.destination) {
        destArray.push(
          <CaseHostUserNetwork
            index={'entity-hosts'}
            query={entityUuid}
            type={'host'}
            category={'entity'}
            name={ioa?.destination?.host}
          />
        );
      }
    }

    if (entityUuid === ioa?.source?.ip) {
      if ((entityType === 'Host' || entityType === 'Ip') && ioa?.source) {
        sourceArray.push(
          <CaseHostUserNetwork
            index={'entity-hosts'}
            query={entityUuid}
            type={'host'}
            category={'entity'}
            name={ioa?.source?.ip}
          />
        );
      }
    } else if (entityUuid === ioa?.destination?.ip) {
      if ((entityType === 'Host' || entityType === 'Ip') && ioa?.destination) {
        destArray.push(
          <CaseHostUserNetwork
            index={'entity-hosts'}
            query={entityUuid}
            type={'host'}
            category={'entity'}
            name={ioa?.destination?.ip}
          />
        );
      }
    }

    if (entityUuid === ioa?.source?.user) {
      if (entityType === 'User' && ioa?.source) {
        sourceArray.push(<CaseHostUserNetwork index={'entity-users'} query={entityUuid} category={''} type={'user'} />);
      }
    } else if (entityUuid === ioa?.destination?.user) {
      if (entityType === 'User' && ioa?.destination) {
        destArray.push(<CaseHostUserNetwork index={'entity-users'} query={entityUuid} category={''} type={'user'} />);
      }
    }
  }

  const Network = ({ type }) => {
    const networkInfo = type === 'src' ? ioa?.network_info?.int_src : ioa?.network_info?.int_dest;
    return (
      <>
        <Typography variant={'h6'} sx={{ my: 1.5, ml: 1.5 }}>
          {type === 'src' ? (networkInfo?.network_prefix || sourceArray.length ? 'Source' : null) : null}
          {type === 'dest' ? (networkInfo?.network_prefix || destArray.length ? 'Destination' : null) : null}
        </Typography>
        <CardContent sx={{ paddingTop: 0 }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {type === 'src' ? sourceArray : destArray}
            {networkInfo?.network_prefix ? (
              <Grid item xs={2} sm={4}>
                <Tooltip title={'Network'} arrow>
                  <List>
                    <ListItem selected={false} sx={{ mt: '5px', boxShadow: 4 }} secondaryAction={''}>
                      <ListItemAvatar>
                        <Avatar sx={{ backgroundColor: '#1776d2' }}>
                          <AccountTreeIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={`${networkInfo?.network_prefix}, ${networkInfo?.network_description}`}
                        sx={{ paddingRight: '15px', fontSize: '0.8rem', wordWrap: 'break-word;' }}
                      />
                    </ListItem>
                  </List>
                </Tooltip>
              </Grid>
            ) : null}
          </Grid>
        </CardContent>
      </>
    );
  };

  return (
    <>
      <Network type={'src'} />
      <Network type={'dest'} />
    </>
  );
}

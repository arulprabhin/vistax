import React, { useEffect, useRef, useState } from 'react';
import { makeApiRequest } from '../../utils';
import AddWhitelist from '../CaseWhitelist/AddWhitelist';
import { whiteListField } from './utils';

export default function CaseWhitelisting({ entryUuid, ioaEntryUuid }) {
  const [whitelistData, setWhitelistData] = useState({});
  const isCancelled = useRef(false);

  const getCaseWhitelisting = () => {
    makeApiRequest({
      key: 'retriveCaseWhitelist',
      pathParam: ioaEntryUuid,
    })
      .then((response) => {
        if (response.status === 'err') throw response.body.msg;
        else return response.data.body;
      })
      .then((respsonse) => {
        let newSubWhitelist = {};

        if (respsonse?.source.length) {
          let data = respsonse.source[0];
          newSubWhitelist = whiteListField;

          newSubWhitelist.src = data?.src;
          newSubWhitelist.srcHost = data?.host_uuid;
          newSubWhitelist.srcUser = data?.user_uuid;
          newSubWhitelist.dest = data?.dest;
          newSubWhitelist.destHost = data?.destination?.host;
          newSubWhitelist.category = data?.event_category;
          newSubWhitelist.attribute = data?.event_attribute;
          newSubWhitelist.trigger = data?.event_trigger;
          newSubWhitelist.uri = data?.uri;
          newSubWhitelist.app = data?.app;
          newSubWhitelist.userAgent = data?.user_agent;
          newSubWhitelist.entrySrc = data?.entry_source;
          newSubWhitelist.entryOrigin = data?.entry_origin;
          newSubWhitelist.entityType = data?.entity_type;
          newSubWhitelist.eventActorIP = data?.event_actor?.ip_addr;
          newSubWhitelist.eventTargetsIP = data?.event_targets?.ip_addr;
          newSubWhitelist.eventTargetsAction = data?.event_targets?.action;
          newSubWhitelist.indicator = data?.indicator;
          newSubWhitelist.indicatorType = data?.indicator_type;
          newSubWhitelist.protocol = data?.proto;
          newSubWhitelist.threatLevel = data?.ext_info?.threat_level;
          newSubWhitelist.incidentCaseEvents = data?.IncidentCaseEvents;
        }

        setWhitelistData(newSubWhitelist);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getCaseWhitelisting();
    return () => isCancelled.current == true;
  }, []);

  return Object.keys(whitelistData).length ? (
    <AddWhitelist result={whitelistData} entryUuid={entryUuid} incidentUuid={ioaEntryUuid} />
  ) : null;
}

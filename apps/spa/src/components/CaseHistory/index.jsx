import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { makeApiRequest } from '../../utils';
import History from './History';

export default function Casehistory({ uuid }) {
  const [historyData, setHistoryData] = useState([]);

  const getCaseHistoryData = async () => {
    try {
      const response = await makeApiRequest({
        key: 'caseActivity',
        body: {
          query: 'entity_uuid:' + uuid + ' AND -ref_type:CaseIoaUpdated',
        },
      });
      setHistoryData(response.data.body.result);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCaseHistoryData();
  }, []);

  return historyData.length >= 0 ? (
    <>
      <Typography
        variant="h6"
        sx={{ paddingLeft: '10px', paddingTop: '20px', marginBottom: '4px', marginTop: '-10px' }}
      >
        Activity
      </Typography>
      <History data={historyData} />
    </>
  ) : null;
}

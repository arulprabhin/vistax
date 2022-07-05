import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { getColumnConfig } from './util';
import Grid from '@mui/material/Grid';
import { makeApiRequest } from '../../utils';

export default function TopOffenders({ offenderType, gte, lte }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getOffenders = async () => {
    setData([]);
    setLoading(true);
    try {
      const response = await makeApiRequest({
        key: 'worstOffenders',
        pathParam: `${offenderType}/all/${gte}/${lte}/10`,
      });
      setData(response.data.body);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getOffenders();
  }, [global]);
  return (
    <>
      <Grid sx={{ height: 370, width: '100%' }}>
        <DataGrid
          rows={data}
          getRowId={(row) => row.entryUuid}
          columns={getColumnConfig(offenderType)}
          pageSize={5}
          loading={loading}
        />
      </Grid>
    </>
  );
}

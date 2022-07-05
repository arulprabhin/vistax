import React, { useEffect, useState, useRef } from 'react';
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
} from '@mui/x-data-grid';
import { Box, Typography } from '@mui/material';
import SplitButtonMenu from '@logrhythm/shared/SplitButtonMenu';
import { makeApiRequest } from '../../utils';
import { COLUMN_CONFIG } from './util';
import { useSelector } from 'react-redux';
import { buildMoment } from '@logrhythm/shared/common';

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

export default function TopCasesTable({ caseType, gte, lte }) {
  const [tableData, setTableData] = useState([]);
  const [limit, setLimit] = useState(10);
  const [ordering, setOrdering] = useState('all');
  const [loading, setLoading] = useState(false);
  const isCancelled = useRef(false);

  const getTopCases = async () => {
    isCancelled.current = false;
    setTableData([]);
    setLoading(true);
    makeApiRequest({
      key: 'topCases',
      pathParam: `${caseType}/${ordering}/${gte}/${lte}/${limit}`,
    })
      .then((response) => response.data.body)
      .then((body) => {
        if (!isCancelled.current) {
          setTableData(body);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
        if (!isCancelled.current) {
          setLoading(false);
        }
      });
  };

  useEffect(() => {
    getTopCases();
    // to avoid calling setstate of unmounted component
    return () => (isCancelled.current = true);
  }, [ordering, limit, global]);

  return (
    <div style={{ height: 'calc(100vH - 180px)', width: '100%' }}>
      <Box
        sx={{
          position: 'relative',
          display: 'inline-flex',
          top: '36px',
          left: '400px',
          zIndex: 1,
        }}
      >
        <SplitButtonMenu
          key={'limit'}
          label="Top"
          options={[10, 25, 50, 100]}
          variant="outlined"
          size="small"
          onChange={(option, index) => setLimit(option)}
          onButtonClick={() => false}
        />
        <Typography variant="subtitle1" display="inline-block" sx={{ mx: 1 }}>
          By
        </Typography>
        <SplitButtonMenu
          key={'order'}
          size="small"
          options={[
            { value: 'all', text: 'Certainty, Severity, and Score' },
            { value: 'certainty', text: 'Certainty' },
            { value: 'severity', text: 'Severity' },
            { value: 'score', text: 'Score' },
          ]}
          onChange={(option, index) => setOrdering(option.value)}
          onButtonClick={'disable'}
        />
      </Box>

      <DataGrid
        rows={tableData}
        getRowId={(row) => row.entryUuid}
        columns={COLUMN_CONFIG}
        pageSize={10}
        disableSelectionOnClick={true}
        disableColumnMenu={true}
        onRowClick={(params, event) => {
          if (!event.ignore) {
          }
        }}
        loading={loading}
        components={{
          Toolbar: CustomToolbar,
        }}
        sx={{
          '& *.multi-row': {
            whiteSpace: 'normal !important',
            lineHeight: 'normal !important',
            wordBreak: 'break-word',
          },
        }}
      />
    </div>
  );
}

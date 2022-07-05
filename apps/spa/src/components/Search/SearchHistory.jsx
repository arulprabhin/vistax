import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { makeApiRequest } from '../../utils';
import { VistaConfirm } from '@logrhythm/shared/VistaDialog';
import { getSearchHistoryColumnConfig, proceedToSearch } from './utils';

export default function SearchHistory() {
  const [tableData, setTableData] = useState([]);
  const history = useHistory();

  const [confirmOpen, setConfirmOpen] = React.useState(false);
  const [confirmMsg, setConfirmMsg] = React.useState('Are you sure you want to delete this search history?');
  const [queryHistoryId, setQueryHistoryId] = React.useState();
  const handleConfirmYes = async () => {
    setConfirmOpen(false);
    const response = await makeApiRequest({ key: 'deleteSearchHistory', pathParam: queryHistoryId });
    if (response.data.status === 'success') {
      setTableData((prevRows) => prevRows.filter((row) => row._id !== queryHistoryId));
    }
  };
  const handleConfirmNo = () => {
    setConfirmOpen(false);
  };
  const handleConfirmClose = () => {
    handleConfirmNo();
  };

  const deleteHistory = (event, id) => {
      if (event) event.ignore = true;
      setQueryHistoryId(id);
      setConfirmOpen(true);
    },
    searchHistory = (event, row) => {
      if (event) event.ignore = true;
      proceedToSearch(row.query, history);
    };

  const getSearchHistory = async () => {
    try {
      const response = await makeApiRequest({ key: 'getSearchHistory', body: { limit: 100 }, stringifyFormData: true });
      setTableData(response.data.body);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSearchHistory();
  }, []);

  return (
    <div style={{ height: 'calc(100vH - 150px)', width: '100%' }}>
      <DataGrid
        getRowId={(row) => row._id}
        rows={tableData}
        columns={getSearchHistoryColumnConfig(searchHistory, deleteHistory)}
        pageSize={10}
        disableSelectionOnClick={true}
        onRowClick={(params, event) => {
          if (!event.ignore) {
          }
        }}
        sx={{
          '& *.multi-row': {
            whiteSpace: 'normal !important',
            lineHeight: 'normal !important',
            wordBreak: 'break-word',
          },
        }}
      />
      <VistaConfirm
        isOpen={confirmOpen}
        handleClose={handleConfirmClose}
        acceptButtonText={'Yes'}
        rejectButtonText={'No'}
        handleAccept={handleConfirmYes}
        handleReject={handleConfirmNo}
        maxWidth={'sm'}
      >
        {confirmMsg}
      </VistaConfirm>
    </div>
  );
}

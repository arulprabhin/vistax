import { useHistory } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { makeApiRequest } from '../../utils';
import { VistaConfirm } from '@logrhythm/shared/VistaDialog';
import { getSavedQueryColumnConfig, proceedToSearch } from './utils';

export default function SavedSearch() {
  const [tableData, setTableData] = useState([]);
  const history = useHistory();

  const [confirmOpen, setConfirmOpen] = React.useState(false);
  const [confirmMsg, setConfirmMsg] = React.useState('Are you sure you want to delete this saved query?');
  const [savedQueryId, setSavedQueryId] = React.useState();
  const handleConfirmYes = async () => {
    setConfirmOpen(false);
    const response = await makeApiRequest({ key: 'deleteSavedQuery', pathParam: savedQueryId });
    if (response.data.status === 'success') {
      setTableData((prevRows) => prevRows.filter((row) => row._id !== savedQueryId));
    }
  };
  const handleConfirmNo = () => {
    setConfirmOpen(false);
  };
  const handleConfirmClose = () => {
    handleConfirmNo();
  };

  const deleteSavedQuery = (event, id) => {
      if (event) event.ignore = true;
      setSavedQueryId(id);
      setConfirmOpen(true);
    },
    updateSavedQuery = (event, data) => {},
    searchQuery = (event, row) => {
      if (event) event.ignore = true;
      proceedToSearch(row.query, history);
    };

  const getSavedQueries = async () => {
    try {
      const response = await makeApiRequest({ key: 'huntActivitySaveQuery' });
      setTableData(response.data.body);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSavedQueries();
  }, []);

  return (
    <div style={{ height: 'calc(100vH - 150px)', width: '100%' }}>
      <DataGrid
        getRowId={(row) => row._id}
        rows={tableData}
        columns={getSavedQueryColumnConfig(searchQuery, updateSavedQuery, deleteSavedQuery)}
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
        title={'Delete Saved Query'}
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

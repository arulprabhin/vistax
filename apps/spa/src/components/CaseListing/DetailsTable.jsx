import React, { useState } from 'react';
import MaterialTable from '@material-table/core';
import { ExportCsv, ExportPdf } from '@material-table/exporters';
import CaseWhitelisting from '../CaseWhitelist';
import EmailAlertOptions from '../EmailAlert';
import CaseHistory from '../CaseHistory';
import { makeApiRequest } from '../../utils';
import { Paper, Stack } from '@mui/material';
import { Buffer } from 'buffer';
import { replaceJsonParams } from '@logrhythm/shared/common';
import VistaDialog from '@logrhythm/shared/VistaDialog';
import { COLUMN_CONFIG, TABLE_CONFIG, TABLE_ICONS } from './utils';
import SummaryPane from './SummaryPane';
//import History from '../CaseHistory/History';
//import './style.css';

export default function CaseTable({ type, site, gte, lte, query, certainty, score, category }) {
  const [summary, setSummary] = useState('-');
  const [details, setDetails] = useState('-');
  const [recommendation, setRecommendation] = useState('-');
  const [adminState, setAdminState] = useState('-');
  const [entryType, setEntryType] = useState('-');
  const [entryUuid, setEntryUuid] = useState('');
  const [ioaEntryUuid, setIoaEntryUuid] = useState('');
  const [showSummaryPane, setShowSummaryPane] = useState(false);
  const [tableWidth, setTableWidth] = useState({
    width: '100%',
    maxWidth: '100%',
  });
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState();

  const getData = (pageRequest) => {
    let selectedOrders = [];
    if (pageRequest.orderBy) {
      let order = {};
      order[pageRequest.orderBy.field] = { order: pageRequest.orderDirection };
      selectedOrders.push(Buffer.from(JSON.stringify(order)).toString('base64'));
    }

    let filters = [];
    if (pageRequest.filters) {
      pageRequest.filters.map((f) => {
        let filter = {};
        filter[f.column.field] = f.value;
        filters.push(Buffer.from(JSON.stringify(filter)).toString('base64'));
      });
    }

    const reqBody = {
      page: pageRequest.page,
      size: pageRequest.pageSize,
      order: selectedOrders,
      filter: filters,
      query: query,
      category: category,
    };

    return new Promise((resolve, reject) => {
      makeApiRequest({
        key: 'caseIncidentPolicyList',
        pathParam: `${site}/${gte}/${lte}/${certainty}/${score}`,
        body: reqBody,
      })
        .then((response) => response.data)
        .then((response) => {
          if (response.status === 'err') throw response.body.msg;
          else {
            response.body.forEach((data) => {
              data.timestamp = new Date(data.timestamp);
              data.created_at = new Date(data.created_at);
              data.last_modified = new Date(data.last_modified);
            });
            const pageResponse = {
              data: response.body,
              page: response.page,
              totalCount: response.total,
            };
            return pageResponse;
          }
        })
        .then((res) => resolve(res))
        .catch((e) => {
          console.log(e);
          reject('Error');
        });
    });
  };

  const handleRowClick = (event, rowData) => {
    setSelectedEntry(rowData.entry_uuid);
    setTableWidth({
      width: 'calc(100% - 300px)',
      maxWidth: 'calc(100% - 300px)',
    });
    setSummary(replaceJsonParams(rowData.case_summary, rowData));
    setDetails(replaceJsonParams(rowData.case_detail, rowData));
    setRecommendation(replaceJsonParams(rowData.recommendation, rowData));
    setAdminState(rowData.admin_state);
    setEntryType(rowData.entry_type);
    setEntryUuid(replaceJsonParams(rowData.entry_uuid, rowData));
    setIoaEntryUuid(replaceJsonParams(rowData.main_event.entry_uuid, rowData));
    setShowSummaryPane(true);
  };

  const handleSidePaneClose = () => {
    setShowSummaryPane(false);
    setTableWidth({ width: '100%', maxWidth: '100%' });
  };

  return (
    <Stack direction="row" justifyContent="flex-start" alignItems="stretch" spacing={1}>
      <Paper sx={{ ...tableWidth }}>
        <MaterialTable
          icons={TABLE_ICONS}
          columns={COLUMN_CONFIG}
          data={(query) => getData(query)}
          onRowClick={handleRowClick}
          options={{
            ...TABLE_CONFIG,
            exportMenu: [
              {
                label: 'Export PDF',
                exportFunc: (cols, data) => ExportPdf(cols, data, category),
              },
              {
                label: 'Export CSV',
                exportFunc: (cols, data) => ExportCsv(cols, data, category),
              },
            ],
            rowStyle: (rowData) => ({
              wordBreak: 'break-word',
              fontSize: '0.9rem',
              backgroundColor: selectedEntry === rowData.entry_uuid ? 'rgba(135, 135, 168, 0.25)' : 'inherit',
            }),
          }}
        />
      </Paper>
      {showSummaryPane && (
        <SummaryPane
          isShown={showSummaryPane}
          summary={summary}
          details={details}
          recommendation={recommendation}
          onCloseClick={handleSidePaneClose}
          uuid={entryUuid}
          ioaUuid={ioaEntryUuid}
          adminState={adminState}
          entryType={entryType}
          type={type}
        />
      )}
    </Stack>
  );
}

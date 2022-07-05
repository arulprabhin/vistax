import React from 'react';
import moment from 'moment';
import { Chip } from '@mui/material';
import { camelCaseToSentence } from '@logrhythm/shared/common';

export const COLUMN_CONFIG = [
  {
    field: 'entryUuid',
    headerName: 'S.No',
    headerClassName: 'column-header',
    renderHeader: (params) => <strong> {params?.colDef?.headerName ?? 'Undefined'} </strong>,
    align: 'left',
    headerAlign: 'left',
    type: 'number',
    width: 80,
    disableColumnMenu: true,
    filterable: false,
    sortable: false,
    hideable: false,
    hide: false,
    renderCell: (params) => {
      return params.api.getRowIndex(params.id) + 1;
    },
  },
  {
    field: 'timestamp',
    headerName: 'Occurred On',
    description: 'Event Timestamp',
    renderHeader: (params) => <strong> {params?.colDef?.headerName ?? 'Undefined'} </strong>,
    type: 'dateTime',
    minWidth: 170,
    flex: 1,
    valueFormatter: (params) => {
      return moment(params.value).format('YYYY-MM-DD hh:mm A');
    },
  },
  {
    field: 'certainty',
    headerName: 'Certainty',
    renderHeader: (params) => <strong> {params?.colDef?.headerName ?? 'Undefined'} </strong>,
    align: 'center',
    headerAlign: 'center',
    type: 'number',
    renderCell: (params) => (
      <Chip
        variant={'outlined'}
        label={params.value}
        color={
          params.value <= 25 ? 'success' : params.value <= 50 ? 'primary' : params.value <= 75 ? 'warning' : 'error'
        }
      />
    ),
    minWidth: 85,
    flex: 1,
  },
  {
    field: 'severity',
    headerName: 'Severity',
    renderHeader: (params) => <strong> {params?.colDef?.headerName ?? 'Undefined'} </strong>,
    align: 'center',
    headerAlign: 'center',
    type: 'number',
    renderCell: (params) => (
      <Chip
        variant={'outlined'}
        label={params.value}
        color={
          params.value <= 25 ? 'success' : params.value <= 50 ? 'primary' : params.value <= 75 ? 'warning' : 'error'
        }
      />
    ),
    minWidth: 85,
    flex: 1,
  },
  {
    field: 'score',
    headerName: 'Score',
    renderHeader: (params) => <strong> {params?.colDef?.headerName ?? 'Undefined'} </strong>,
    align: 'center',
    headerAlign: 'center',
    type: 'number',
    renderCell: (params) => (
      <Chip
        variant={'outlined'}
        label={params.value}
        color={params.value <= 2 ? 'success' : params.value <= 5 ? 'primary' : params.value <= 7 ? 'warning' : 'error'}
      />
    ),
    minWidth: 75,
    flex: 1,
  },
  {
    field: 'category',
    headerName: 'Category',
    renderHeader: (params) => <strong> {params?.colDef?.headerName ?? 'Undefined'} </strong>,
    minWidth: 200,
  },
  {
    field: 'adminState',
    headerName: 'Status',
    renderHeader: (params) => <strong> {params?.colDef?.headerName ?? 'Undefined'} </strong>,
    valueFormatter: (params) => {
      return camelCaseToSentence(params.value, true);
    },
    minWidth: 150,
    flex: 1,
  },
  {
    field: 'entryType',
    headerName: 'Type',
    renderHeader: (params) => <strong> {params?.colDef?.headerName ?? 'Undefined'} </strong>,
    valueFormatter: (params) => {
      return camelCaseToSentence(params.value, true);
    },
    minWidth: 150,
    flex: 1,
  },
  {
    field: 'entryOrigin',
    headerName: 'Entry Origin',
    renderHeader: (params) => <strong> {params?.colDef?.headerName ?? 'Undefined'} </strong>,
    minWidth: 200,
    flex: 1,
  },
  {
    field: 'entrySource',
    headerName: 'Entry Source',
    renderHeader: (params) => <strong> {params?.colDef?.headerName ?? 'Undefined'} </strong>,
    minWidth: 200,
    flex: 1,
  },
  {
    field: 'trigger',
    headerName: 'Trigger',
    renderHeader: (params) => <strong> {params?.colDef?.headerName ?? 'Undefined'} </strong>,
    minWidth: 250,
    flex: 1,
    cellClassName: 'multi-row',
  },
  {
    field: 'entityType',
    headerName: 'Entity Type',
    renderHeader: (params) => <strong> {params?.colDef?.headerName ?? 'Undefined'} </strong>,
    minWidth: 100,
    flex: 1,
  },
  {
    field: 'src',
    headerName: 'Source',
    renderHeader: (params) => <strong> {params?.colDef?.headerName ?? 'Undefined'} </strong>,
    minWidth: 250,
    flex: 1,
  },
  {
    field: 'dest',
    headerName: 'Destination',
    renderHeader: (params) => <strong> {params?.colDef?.headerName ?? 'Undefined'} </strong>,
    minWidth: 250,
    flex: 1,
  },
  {
    field: 'caseId',
    headerName: 'Case Id',
    type: 'number',
    renderHeader: (params) => <strong> {params?.colDef?.headerName ?? 'Undefined'} </strong>,
    minWidth: 130,
    flex: 1,
  },
  {
    field: 'caseSummary',
    headerName: 'Case Summary',
    renderHeader: (params) => <strong> {params?.colDef?.headerName ?? 'Undefined'} </strong>,
    minWidth: 300,
    flex: 1,
    cellClassName: 'multi-row',
  },
  {
    field: 'caseDetail',
    headerName: 'Case Details',
    renderHeader: (params) => <strong> {params?.colDef?.headerName ?? 'Undefined'} </strong>,
    minWidth: 400,
    flex: 1,
    cellClassName: 'multi-row',
  },
  {
    field: 'entityUuid',
    headerName: 'Entity UUID',
    renderHeader: (params) => <strong> {params?.colDef?.headerName ?? 'Undefined'} </strong>,
    minWidth: 200,
    flex: 1,
    cellClassName: 'multi-row',
  },
  {
    field: 'ioaCount',
    headerName: 'IOA Count',
    type: 'number',
    renderHeader: (params) => <strong> {params?.colDef?.headerName ?? 'Undefined'} </strong>,
    minWidth: 100,
    flex: 1,
  },
  {
    field: 'lastModified',
    headerName: 'Updated On',
    type: 'dateTime',
    renderHeader: (params) => <strong> {params?.colDef?.headerName ?? 'Undefined'} </strong>,
    minWidth: 170,
    flex: 1,
    valueFormatter: (params) => {
      return moment(params.value).format('YYYY-MM-DD hh:mm A');
    },
  },
  {
    field: 'createdAt',
    headerName: 'Created On',
    type: 'dateTime',
    renderHeader: (params) => <strong> {params?.colDef?.headerName ?? 'Undefined'} </strong>,
    minWidth: 170,
    flex: 1,
    valueFormatter: (params) => {
      return moment(params.value).format('YYYY-MM-DD hh:mm A');
    },
  },
];

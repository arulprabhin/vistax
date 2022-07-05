import moment from 'moment';
import { camelCaseToSentence } from '@logrhythm/shared/common';

export const COLUMN_CONFIG = [
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
    field: 'admin_state',
    headerName: 'Status',
    renderHeader: (params) => <strong> {params?.colDef?.headerName ?? 'Undefined'} </strong>,
    valueFormatter: (params) => {
      return camelCaseToSentence(params.value, true);
    },
    minWidth: 150,
    flex: 1,
  },
  {
    field: 'entry_type',
    headerName: 'Type',
    renderHeader: (params) => <strong> {params?.colDef?.headerName ?? 'Undefined'} </strong>,
    valueFormatter: (params) => {
      return camelCaseToSentence(params.value, true);
    },
    minWidth: 150,
    flex: 1,
  },
  {
    field: 'entry_origin',
    headerName: 'Entry Origin',
    renderHeader: (params) => <strong> {params?.colDef?.headerName ?? 'Undefined'} </strong>,
    minWidth: 200,
    flex: 1,
  },
  {
    field: 'entry_source',
    headerName: 'Entry Source',
    renderHeader: (params) => <strong> {params?.colDef?.headerName ?? 'Undefined'} </strong>,
    minWidth: 200,
    flex: 1,
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
    field: 'trigger',
    headerName: 'Trigger',
    renderHeader: (params) => <strong> {params?.colDef?.headerName ?? 'Undefined'} </strong>,
    minWidth: 250,
    flex: 1,
    cellClassName: 'multi-row',
  },
  {
    field: 'entity_type',
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
    field: 'case_id',
    headerName: 'Case Id',
    type: 'number',
    renderHeader: (params) => <strong> {params?.colDef?.headerName ?? 'Undefined'} </strong>,
    minWidth: 130,
    flex: 1,
  },
  {
    field: 'case_summary',
    headerName: 'Case Summary',
    renderHeader: (params) => <strong> {params?.colDef?.headerName ?? 'Undefined'} </strong>,
    minWidth: 300,
    flex: 1,
    cellClassName: 'multi-row',
  },
  {
    field: 'case_detail',
    headerName: 'Case Details',
    renderHeader: (params) => <strong> {params?.colDef?.headerName ?? 'Undefined'} </strong>,
    minWidth: 400,
    flex: 1,
    cellClassName: 'multi-row',
  },
  {
    field: 'entity_uuid',
    headerName: 'Entity UUID',
    renderHeader: (params) => <strong> {params?.colDef?.headerName ?? 'Undefined'} </strong>,
    minWidth: 200,
    flex: 1,
    cellClassName: 'multi-row',
  },
  {
    field: 'ioa_count',
    headerName: 'IOA Count',
    type: 'number',
    renderHeader: (params) => <strong> {params?.colDef?.headerName ?? 'Undefined'} </strong>,
    minWidth: 100,
    flex: 1,
  },
  {
    field: 'last_modified',
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
    field: 'created_at',
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

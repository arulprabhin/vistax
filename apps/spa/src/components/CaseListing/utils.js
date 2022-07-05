import React, { forwardRef } from 'react';
import AddBox from '@mui/icons-material/AddBox';
import Check from '@mui/icons-material/Check';
import Clear from '@mui/icons-material/Clear';
import DeleteOutline from '@mui/icons-material/DeleteOutline';
import ChevronRight from '@mui/icons-material/ChevronRight';
import Edit from '@mui/icons-material/Edit';
import SaveAlt from '@mui/icons-material/SaveAlt';
import FilterList from '@mui/icons-material/FilterList';
import FirstPage from '@mui/icons-material/FirstPage';
import LastPage from '@mui/icons-material/LastPage';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import Search from '@mui/icons-material/Search';
import ArrowDownward from '@mui/icons-material/ArrowDownward';
import Remove from '@mui/icons-material/Remove';
import ViewColumn from '@mui/icons-material/ViewColumn';
import DragHandleIcon from '@mui/icons-material/DragHandle';

export const TABLE_ICONS = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} color={'info'} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} color={'info'} />),
  Resize: forwardRef((props, ref) => <DragHandleIcon {...props} sx={{ transform: 'rotate(90deg)' }} ref={ref} />),
};

export const COLUMN_CONFIG = [
  {
    field: 'timestamp',
    title: 'Timestamp',
    align: 'left',
    defaultSort: 'desc',
    disableClick: false,
    emptyValue: 'n/a',
    export: true,
    filtering: false,
    hiddenByColumnsButton: true,
    resizable: false,
    searchable: false,
    sorting: true,
    tooltip: 'Event Timestamp',
    type: 'datetime',
    width: 180,
    exportTransformer: (row) => row.timestamp,
  },
  { field: 'score', title: 'Score', width: 80, hiddenByColumnsButton: true },
  { field: 'certainty', title: 'Certainty', width: 100, hiddenByColumnsButton: true },
  { field: 'severity', title: 'Severity', width: 100, hiddenByColumnsButton: true },
  { field: 'case_id', title: 'Case ID', width: 100, hiddenByColumnsButton: true },
  /*{ field: 'category', title: 'Category', width: 180, hidden: true },*/
  { field: 'entry_origin', title: 'Entry Origin', width: 200 },
  { field: 'entry_source', title: 'Entry Source', width: 120 },
  { field: 'entry_type', title: 'Entry Type', width: 130 },
  { field: 'src', title: 'Src', width: 130 },
  { field: 'dest', title: 'Dest', width: 140 },
  { field: 'victim_user_uuid', title: 'Target User', width: 150, hidden: true },
  { field: 'victim_host_uuid', title: 'Target Host', width: 120, hidden: true },
  { field: 'attacker_user_uuid', title: 'Actor User', width: 120, hidden: true },
  { field: 'attacker_host_uuid', title: 'Actor Host', width: 120, hidden: true },
  { field: 'created-at', title: 'Created At', width: 160, type: 'datetime', hidden: true },
  {
    field: 'entry_uuid',
    title: 'Entry UUID',
    width: 160,
    cellClassName: 'multi-row',
    hidden: true,
  },
  { field: 'victim_is_src', title: 'Target Src', width: 110, hidden: true },
  { field: 'victim_ip', title: 'Target IP', width: 130, hidden: true },
  { field: 'admin_state', title: 'Admin State', width: 150, hidden: true },
  {
    field: 'last_modified',
    title: 'Last Modified',
    width: 170,
    type: 'datetime',
    hidden: true,
  },
  { field: 'attacker_is_dest', title: 'Actor is Dest', width: 120, hidden: true },
  { field: 'attacker_ip', title: 'Actor IP', width: 130, hidden: true },
  { field: 'ioa_count', title: 'Src', width: 130, hidden: true },
  { field: 'entity_type', title: 'Entity Type', width: 150, hidden: true },
  { field: 'positive', title: 'Positive', width: 120, hidden: true },
  /*  { field: 'case_summary', title: 'Summary', width: 600, cellClassName: 'multi-row' },
  { field: 'case_detail', title: 'Details', width: 600, cellClassName: 'multi-row' },
  { field: 'recommendation', title: 'Recommendation', width: 500, cellClassName: 'multi-row' },
  { field: 'main_event', title: 'Entity', width: 140 },*/
];

export const TABLE_CONFIG = {
  debounceInterval: 700,
  padding: 'dense',
  exportButton: true,
  columnsButton: true,
  filtering: false,
  search: false,
  pageSize: 10,
  pageSizeOptions: [10, 25, 50, 100],
  paginationType: 'stepped',
  toolbarButtonAlignment: 'left',
  tableLayout: 'fixed',
  showTitle: false,
  emptyRowsWhenPaging: false,
  grouping: true,
  headerStyle: {
    wordBreak: 'break-word',
    fontSize: '0.9rem',
  },
};

import React from 'react';
import { Tooltip, Typography } from '@mui/material';
import EditEmailPreference from './EditEmailPreference';
import AddEmailPreference from './AddEmailPreference';
import { GridActionsCellItem } from '@mui/x-data-grid';
import { Delete } from '@mui/icons-material';

export const ColumnConfig = (deleteEmail) => [
  {
    field: 'email',
    headerName: 'Email',
    renderHeader: (params) => (
      <Typography fontWeight={'bold'}> {params?.colDef?.headerName ?? 'Undefined'} </Typography>
    ),
    width: 700,
  },
  {
    field: 'mailPerIncident',
    headerName: 'Per Incident',
    renderHeader: (params) => (
      <Typography fontWeight={'bold'}> {params?.colDef?.headerName ?? 'Undefined'} </Typography>
    ),
    renderCell: (params) => {
      return params.value ? 'yes' : 'no';
    },
    width: 180,
  },
  {
    field: 'mailPerPolicy',
    headerName: 'Per Policy',
    renderHeader: (params) => (
      <Typography fontWeight={'bold'}> {params?.colDef?.headerName ?? 'Undefined'} </Typography>
    ),
    renderCell: (params) => {
      return params.value ? 'yes' : 'no';
    },
    width: 180,
  },
  {
    field: 'mailPerCases',
    headerName: 'Per Case',
    renderHeader: (params) => (
      <Typography fontWeight={'bold'}> {params?.colDef?.headerName ?? 'Undefined'} </Typography>
    ),
    renderCell: (params) => {
      return params.value ? 'yes' : 'no';
    },
    width: 180,
  },
  {
    field: 'mailPerTests',
    headerName: 'Per Test',
    renderHeader: (params) => (
      <Typography fontWeight={'bold'}> {params?.colDef?.headerName ?? 'Undefined'} </Typography>
    ),
    renderCell: (params) => {
      return params.value ? 'yes' : 'no';
    },
    width: 180,
  },
  {
    field: 'mailScoreThreshold',
    headerName: 'Score Threshold',
    renderHeader: (params) => (
      <Typography fontWeight={'bold'}> {params?.colDef?.headerName ?? 'Undefined'} </Typography>
    ),
    align: 'left',
    headerAlign: 'left',
    type: 'number',
    width: 180,
  },
  {
    field: 'New',
    headerName: 'New',
    headerAlign: 'center',
    align: 'center',
    sortable: false,
    width: 100,
    renderHeader: () => <AddEmailPreference />,
    flex: 1,
    renderCell: (params) => {
      if (params.row.email !== 'mistalert101@mistnet.io') {
        return (
          <>
            <EditEmailPreference row={params.row} />
            <Tooltip title={'Delete Email'} arrow>
              <GridActionsCellItem
                icon={<Delete color={'error'} />}
                label="Delete"
                key={params.id + '_delete'}
                onClick={(event) => deleteEmail(event, params.id)}
              />
            </Tooltip>
          </>
        );
      }
    },
  },
];

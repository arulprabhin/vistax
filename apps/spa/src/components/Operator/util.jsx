import React from 'react';
import { Avatar } from '@mui/material';
import NewOperator from './NewOperator';
import { GridActionsCellItem } from '@mui/x-data-grid';
import UpdateOperator from './UpdateOperator';
import { Delete } from '@mui/icons-material';
import Typography from '@mui/material/Typography';

export const operatorColumn = (deleteOperator) => [
  {
    field: 'username',
    headerName: 'Login ID',
    renderHeader: (params) => <strong> {params?.colDef?.headerName ?? 'Undefined'} </strong>,
    minWidth: 300,
    renderCell: (params) => {
      return (
        <>
          <Avatar src={params.row.photo} />
          <Typography sx={{ ml: 1 }}>{params.value}</Typography>
        </>
      );
    },
  },
  {
    field: 'name',
    headerName: 'Operator Name',
    renderHeader: (params) => <strong> {params?.colDef?.headerName ?? 'Undefined'} </strong>,
    minWidth: 300,
  },
  {
    field: 'email',
    headerName: 'Email',
    renderHeader: (params) => <strong> {params?.colDef?.headerName ?? 'Undefined'} </strong>,
    minWidth: 400,
  },
  {
    field: 'role',
    headerName: 'Role',
    renderHeader: (params) => <strong> {params?.colDef?.headerName ?? 'Undefined'} </strong>,
    minWidth: 200,
  },
  {
    field: 'status',
    headerName: 'Status',
    renderHeader: (params) => <strong> {params?.colDef?.headerName ?? 'Undefined'} </strong>,
    width: 200,
  },
  {
    field: 'action',
    headerName: 'Action',
    align: 'center',
    headerAlign: 'center',
    renderHeader: (params) => <NewOperator />,
    width: 120,
    sortable: false,
    renderCell: (params) => {
      return (
        <>
          {params.row.username === 'mistnet' ? (
            ''
          ) : (
            <>
              <UpdateOperator row={params.row} />
              <GridActionsCellItem
                label="Delete Operator"
                key={params.id + '_delete'}
                icon={<Delete color={'error'} />}
                onClick={(event) => deleteOperator(event, params.id)}
              />
            </>
          )}
        </>
      );
    },
  },
];

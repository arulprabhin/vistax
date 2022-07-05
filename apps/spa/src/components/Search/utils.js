import moment from 'moment';
import { GridActionsCellItem } from '@mui/x-data-grid';
import { Delete, Edit as EditIcon, Search as SearchIcon } from '@mui/icons-material';
import React from 'react';

export const getSavedQueryColumnConfig = (searchQuery, updateSavedQuery, deleteSavedQuery) => [
    {
      field: '_id',
      headerName: 'S.No',
      width: 80,
      disableColumnMenu: true,
      filterable: false,
      sortable: false,
      hideable: false,
      renderCell: (params) => {
        return params.api.getRowIndex(params.id) + 1;
      },
    },
    { field: 'name', headerName: 'Name', minWidth: 250, flex: 1 },
    { field: 'query', headerName: 'Query', minWidth: 300, flex: 1, cellClassName: 'multi-row' },
    {
      field: 'created_on',
      headerName: 'Created On',
      valueFormatter: (params) => {
        return moment(params.value).format('YYYY-MM-DD hh:mm A');
      },
      width: 200,
    },
    {
      field: 'actions',
      type: 'actions',
      width: 120,
      disableClickEventBubbling: true,
      getActions: (params) => [
        <GridActionsCellItem
          key={params.id + '_search'}
          icon={<SearchIcon />}
          label="Search"
          onClick={(event) => searchQuery(event, params.row)}
        />,
        <GridActionsCellItem
          key={params.id + '_edit'}
          icon={<EditIcon />}
          label="Edit"
          onClick={(event) => updateSavedQuery(event, params)}
        />,
        <GridActionsCellItem
          key={params.id + '_delete'}
          icon={<Delete />}
          label="Delete"
          onClick={(event) => deleteSavedQuery(event, params.id)}
        />,
      ],
    },
  ],
  getSearchHistoryColumnConfig = (searchHistory, deleteHistory) => [
    {
      field: '_id',
      headerName: 'S.No',
      width: 80,
      disableColumnMenu: true,
      filterable: false,
      sortable: false,
      hideable: false,
      renderCell: (params) => {
        return params.api.getRowIndex(params.id) + 1;
      },
    },
    { field: 'query', headerName: 'Query', minWidth: 300, flex: 1, cellClassName: 'multi-row' },
    {
      field: 'created_on',
      headerName: 'Created On',
      valueFormatter: (params) => {
        return moment(params.value).format('YYYY-MM-DD hh:mm A');
      },
      width: 200,
    },
    {
      field: 'actions',
      type: 'actions',
      width: 100,
      disableClickEventBubbling: true,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<SearchIcon />}
          label="Search"
          onClick={(event) => searchHistory(event, params.row)}
        />,
        <GridActionsCellItem icon={<Delete />} label="Delete" onClick={(event) => deleteHistory(event, params.id)} />,
      ],
    },
  ],
  proceedToSearch = (query, history) => {
    const params = { search: query };
    params.site = document.querySelector('#nodeSelector').nextSibling.value;
    params.startDate = moment(document.querySelector('#DateTimeInput_start').value, 'MM-DD-YYYY HH:mm')
      .toDate()
      .getTime();
    params.endDate = moment(document.querySelector('#DateTimeInput_end').value, 'MM-DD-YYYY HH:mm').toDate().getTime();
    history.push({
      pathname: '/hunt-activity',
    });
  };

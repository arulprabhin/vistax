import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, Paper, InputBase, Divider } from '@mui/material';

export default function ElasticSearchDataTable(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const searchHandler = (arg) => {
    alert(arg || 'Default Message');
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      {props.title && <h2>{props.title}</h2>}
      <Paper
        component="div"
        sx={{
          height: props.height ? props.height : 400,
          width: props.width ? props.width : '100%',
          marginBottom: '65px',
        }}
      >
        <Paper component="div" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 'calc(100% - 8px)' }}>
          <InputBase
            id={'search_{props.id}'}
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search..."
            inputProps={{ 'aria-label': 'Search...' }}
          />
          <IconButton
            type="submit"
            sx={{ p: '10px' }}
            aria-label="search"
            onClick={() => searchHandler('Under Construction')}
          >
            <SearchIcon />
          </IconButton>
        </Paper>
        <Divider />
        <DataGrid
          pageSize={props.pagesize || 5}
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          columns={props.cols}
          rows={props.rows}
          rowCount={props.rows ? props.rows.length : 0}
          rowsPerPage={rowsPerPage}
          count={props.rows ? props.rows.length : 0}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}

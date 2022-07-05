import * as React from 'react';
import { DataGrid, GridOverlay, GridToolbar } from '@mui/x-data-grid';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import PropTypes from 'prop-types';

const PAGE_SIZE = 10;

function escapeRegExp(value) {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

function QuickSearchToolbar(props) {
  return (
    <Box
      sx={{
        p: 0.5,
        pb: 0,
        justifyContent: 'space-between',
        display: 'flex',
        alignItems: 'flex',
        flexWrap: 'wrap',
      }}
    >
      <div>
        <GridToolbar />
      </div>
      <TextField
        variant="standard"
        value={props.value}
        onChange={props.onChange}
        placeholder="Search…"
        InputProps={{
          startAdornment: <SearchIcon fontSize="small" />,
          endAdornment: (
            <IconButton
              title="Clear"
              aria-label="Clear"
              size="small"
              style={{ visibility: props.value ? 'visible' : 'hidden' }}
              onClick={props.clearSearch}
            >
              <ClearIcon fontSize="small" />
            </IconButton>
          ),
        }}
        sx={{
          width: {
            xs: 1,
            sm: 'auto',
          },
          m: (theme) => theme.spacing(1, 0.5, 1.5),
          '& .MuiSvgIcon-root': {
            mr: 0.5,
          },
          '& .MuiInput-underline:before': {
            borderBottom: 1,
            borderColor: 'divider',
          },
        }}
      />
    </Box>
  );
}

QuickSearchToolbar.propTypes = {
  clearSearch: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

function loadServerRows(cursor, data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const start = cursor ? data.rows.findIndex((row) => row.id === cursor) : 0;
      const end = start + PAGE_SIZE;
      // const rows = data.rows.slice(start, end);
      const rows = data.rows;

      resolve({ rows, nextCursor: data.rows[end]?.id });
    }, Math.random() * 200 + 100); // simulate network latency
  });
}

function CustomLoadingOverlay() {
  return (
    <GridOverlay>
      <div style={{ position: 'absolute', top: 0, width: '100%' }}>
        <LinearProgress />
      </div>
    </GridOverlay>
  );
}

export default function MongoTable(props) {
  const pagesNextCursor = React.useRef({});

  const [rows, setRows] = React.useState([]);
  const [searchText, setSearchText] = React.useState('');

  const [page, setPage] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(props.pageSize);
  const [loading, setLoading] = React.useState(false);

  const requestSearch = (searchValue) => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
    const filteredRows = props.rows.filter((row) => {
      return Object.keys(row).some((field) => {
        return searchRegex.test(row[field].toString());
      });
    });
    setRows(filteredRows);
  };

  const handlePageChange = (newPage) => {
    // We have the cursor, we can allow the page transition.
    if (newPage === 0 || pagesNextCursor.current[newPage - 1]) {
      setPage(newPage);
    }
  };

  React.useEffect(() => {
    let active = true;

    (async () => {
      const nextCursor = pagesNextCursor.current[page - 1];

      if (!nextCursor && page > 0) {
        return;
      }

      setLoading(true);
      const response = await loadServerRows(nextCursor, props);

      if (response.nextCursor) {
        pagesNextCursor.current[page] = response.nextCursor;
      }

      if (!active) {
        return;
      }

      setRows(response.rows);
      setLoading(false);
    })();

    return () => {
      active = false;
    };
  }, [page, props]);
  return (
    <Box component="div" sx={{ height: props.height, width: props.width }}>
      <DataGrid
        rows={rows}
        columns={props.columns}
        columnBuffer={props.columns.length}
        loading={loading}
        components={{
          LoadingOverlay: CustomLoadingOverlay,
          Toolbar: QuickSearchToolbar,
        }}
        hideFooterPagination={props.hideFooterPagination}
        pagination
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[10, 20, 50]}
        rowCount={rows.length}
        onPageChange={handlePageChange}
        page={page}
        componentsProps={{
          toolbar: {
            value: searchText,
            onChange: (event) => requestSearch(event.target.value),
            clearSearch: () => requestSearch(''),
          },
        }}
      />
    </Box>
  );
}

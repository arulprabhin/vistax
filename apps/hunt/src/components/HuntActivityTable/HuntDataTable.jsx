import * as React from 'react';
import { useState } from 'react';
import {
  Box,
  Collapse,
  Grid,
  IconButton,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  useTheme,
} from '@mui/material';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import LastPageIcon from '@mui/icons-material/LastPage';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import moment from 'moment';
import SplitButton from '../CaseActionButton';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import HistoryIcon from '@mui/icons-material/History';
import { JSONTree } from 'react-json-tree';
import Handlebars from 'handlebars';

let activity = '';
const flattenJSON = (obj = {}, res = {}, extraKey = '') => {
  if (typeof obj === 'object' && Array.isArray(obj)) {
    res = [];
    obj.forEach((o) => res.push(flattenJSON(o)));
  } else {
    for (let key in obj) {
      if (typeof obj[key] !== 'object') {
        res[extraKey + key] = obj[key];
      } else {
        flattenJSON(obj[key], res, `${extraKey}${key}.`);
      }
    }
  }
  return res;
};

const LogTable = ({ expandComponent, rows, ...otherProps }) => {
  const [isLog, setIsLog] = React.useState(false);
  return (
    <>
      <TableRow {...otherProps}>
        <TableCell>
          <IconButton data-testid="toggle-btn" onClick={() => setIsLog(!isLog)} style={{ color: 'white' }}>
            {isLog ? (
              <RemoveCircleIcon data-testid="collapse-btn" />
            ) : (
              <AddCircleOutlinedIcon data-testid="expand-btn" />
            )}
          </IconButton>
        </TableCell>
        <TableCell sx={{ width: '15%' }}>{`${moment(rows.date).format('YYYY MMM D ddd ')},${moment(
          rows.timestamp
        ).format('h:mm:ss')}`}</TableCell>
        <TableCell>
          <SplitButton
            certainty={rows.certainty}
            eventType={rows.entry_type}
            options={[
              { label: 'View Logs', icon: HistoryIcon, onClick: () => alert('LOG') },
              { label: 'Create Case', icon: PlaylistAddIcon, onClick: () => alert('CASE') },
            ]}
          />
        </TableCell>
        <TableCell>{activitycolumn(rows)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={isLog} timeout="auto" unmountOnExit sx={{ backgroundColor: '#12202f' }}>
            <Grid
              data-testid="details-pane"
              container
              spacing={{ md: 2 }}
              columns={{ md: 12 }}
              sx={{ width: '100%', padding: '2%' }}
            >
              {expandComponent}
            </Grid>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};
const activitycolumn = (row) => {
  if (row.entry_type == 'Http') {
    const c = Handlebars.compile('host {{host_uuid}} accessed {{dest}} {{uri}} resulting in {{status_msg}}');
    activity = c(row);
  } else if (row.entry_type == 'StatsNAE') {
    const c = Handlebars.compile(
      'Packets Processed: {{pkts_proc}}, TCP Connections: {{tcp_conns}}, UDP Connections: {{udp_conns}} From Source {{entry_source}}'
    );
    activity = c({
      pkts_proc: row.pkts_proc,
      tcp_conns: row.tcp_conns,
      udp_conns: row.udp_conns,
      entry_source: row.entry_source,
    });
  } else if (row.entry_type == 'IntelEvent') {
    const c = Handlebars.compile(
      'Host {{host_uuid}} accessed known bad {{sources}} at destination IP {{destination_ip}}:{{destination_port}} seen in {{where}} has moderate chance to become a threat'
    );
    activity = c({
      host_uuid: row.host_uuid,
      sources: row.sources,
      destination_ip: row['destination.ip'],
      destination_port: row['destination.port'],
      where: row.where,
    });
  } else if (row.entry_type == 'Connection') {
    const c = Handlebars.compile('host {{host_uuid}} connected to {{dest}}:{{dest_port}}');
    activity = c(row);
  } else if (row.entry_type == 'Ssl') {
    const c = Handlebars.compile('host {{host_uuid}} accessed {{server_name}} via SSL');
    activity = c({ host_uuid: row.host_uuid, server_name: row.server_name });
  } else if (row.entry_type == 'Dns') {
    const c = Handlebars.compile('host {{host_uuid}} queried {{query}}');
    activity = c({ host_uuid: row.host_uuid, server_name: row.query });
  } else if (row.entry_type == 'NoticeEvent') {
    const c = Handlebars.compile(
      'host {{host_uuid}} triggered {{event_trigger}} against {{dest}}:{{dest_port}} has moderate chance to become a threat'
    );
    activity = c({
      host_uuid: row.host_uuid,
      event_trigger: row.event_trigger,
      dest: row.dest,
      dest_port: row.dest_port,
    });
  } else if (row.entry_type == 'X509') {
    const c = Handlebars.compile(
      'host {{host_uuid}} used X509 certificate with subject {{certificate_subject}} at {destination_ip}'
    );
    activity = c({
      host_uuid: row.host_uuid,
      certificate_subject: row.certificate_subject,
      destination_ip: row['destination.ip'],
    });
  } else if (row.entry_type == 'Files') {
    const c = Handlebars.compile('host {{host_uuid}} downloaded {{mime_type}} file at {{destination_ip}}');
    activity = c({ host_uuid: row.host_uuid, mime_type: row.mime_type, destination_ip: row['destination.ip'] });
  } else if (row.entry_type == 'ThirdPartyEvent') {
    const c = Handlebars.compile('user {{user_uuid}} triggered {{event_trigger}} unlikely to become a threat');
    activity = c({ user_uuid: row.user_uuid, event_trigger: row.event_trigger });
  } else if (row.entry_type == 'Sip') {
    const c = Handlebars.compile('Session initiated from request {{request_from}} to request {{request_to}} ');
    activity = c({ request_from: row.request_from, request_to: row.request_to });
  } else if (row.entry_type == 'Software') {
    const c = Handlebars.compile(
      'AWS EC2 Instance {{cloud_instance_id}} Role {{role}} host {{private_dns_name}} is using Software: {{name}} type {{software_type}}, version {{unparsed_version}} '
    );
    activity = c({
      cloud_instance_id: row['source.cloud_metadata.cloud_instance.cloud_instance_id'],
      role: row['source.cloud_metadata.cloud_instance.tags.Role'],
      private_dns_name: row['source.cloud_metadata.private_dns_name'],
      name: row.name,
      software_type: row.software_type,
      unparsed_version: row.unparsed_version,
    });
  } else {
    const c = Handlebars.compile('{{entry_type}}');
    activity = c({ entry_type: row.entry_type });
  }
  return activity;
};

const handleTablePagination = (props) => {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPage = (event) => {
    onPageChange(event, 0);
  };

  const handleBack = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNext = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPage = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box>
      <TableCell>
        <IconButton onClick={handleFirstPage} disabled={page === 0} aria-label="First page">
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
      </TableCell>
      <TableCell>
        <IconButton onClick={handleBack} disabled={page === 0} aria-label="Previous page">
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
      </TableCell>
      <TableCell>
        <IconButton onClick={handleNext} disabled={page >= Math.ceil(count / rowsPerPage) - 1} aria-label="Next page">
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
      </TableCell>
      <TableCell>
        <IconButton
          onClick={handleLastPage}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Last page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </TableCell>
    </Box>
  );
};

const jsonKeyToProperWord = (jsonKey) => {
  let tempStr = jsonKey.split('.').join(' ').split('_').join(' ');
  return tempStr.charAt(0).toUpperCase() + tempStr.slice(1);
};

const Logs = ({ logrows, uuid }) => {
  const [value, setValue] = React.useState('1');
  const [json] = useState(logrows);

  let testcols;
  if (logrows?.source?.cloud_metadata) delete logrows.source.cloud_metadata;
  if (logrows?.destination?.cloud_metadata) delete logrows.destination.cloud_metadata;
  logrows = flattenJSON(logrows);
  testcols = Object.keys(logrows);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <TabContext value={value}>
          <Box sx={{ borderColor: 'divider', backgroundColor: '#12202f', width: '15%' }}>
            <TabList onChange={handleChange}>
              <Tab label="Details" value="1" />
              <Tab label="JSON" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1" sx={{ backgroundColor: '#12202f' }}>
            <Grid container spacing={2}>
              {testcols.sort().map((col) => (
                <>
                  <Grid item xs={12} sm={6} md={3} lg={2} xl={1}>
                    {jsonKeyToProperWord(col)}
                  </Grid>
                  <Grid item xs={12} sm={6} md={3} lg={2} xl={1}>
                    {col == 'timestamp'
                      ? moment(logrows[col]).format('YYYY MMM D ddd ')
                      : col == 'created_at'
                      ? moment(logrows[col]).format('YYYY MMM D ddd h:mm:ss zz')
                      : col == 'start_time'
                      ? moment(logrows[col]).format()
                      : col == 'end_time'
                      ? moment(logrows[col]).format()
                      : logrows[col].toString()}
                  </Grid>
                </>
              ))}
            </Grid>
          </TabPanel>
          <TabPanel value="2" sx={{ backgroundColor: '#12202f' }}>
            <JSONTree
              shouldExpandNode={(key, data, level) => level == 1}
              hideRoot={true}
              sortObjectKeys={true}
              data={json}
            />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
};

export default function HuntDataTable({ rows, cols, height, width, jsons }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  return (
    <>
      <TableContainer
        sx={{
          height: height ?? 400,
          width: width ?? '100%',
        }}
      >
        <Table stickyHeader aria-label="sticky table" sx={{ height: 'max-content' }}>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox"></TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Info</TableCell>
              <TableCell>Activity</TableCell>
            </TableRow>
          </TableHead>
          {rows && (
            <TableBody>
              {(rowsPerPage > 0 ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : rows).map(
                (row) => (
                  <LogTable
                    key={row}
                    expandComponent={<Logs logrows={row} uuid={row.entry_uuid} jsons={jsons} />}
                    rows={flattenJSON(row)}
                  ></LogTable>
                )
              )}
            </TableBody>
          )}
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[10, 25, 50]}
                colSpan={4}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    'aria-label': 'rows per page',
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={handleTablePagination}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
}

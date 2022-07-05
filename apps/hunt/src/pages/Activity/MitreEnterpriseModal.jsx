import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import cloneDeep from 'lodash.clonedeep';
import { useHistory, useLocation } from 'react-router-dom';
import Draggable from 'react-draggable';

import { Groups, matrixCoverage, matrixos, mitre_data, mitre_header, Software } from './mitre';
import MitreEnterpriseInsideModal from './MitreEnterpriseInsideModal';

const BUTTONS = [
  {
    name: 'Mac',
    value: 'Mac',
  },
  {
    name: 'Windows',
    value: 'Windows',
  },
  {
    name: 'Linux',
    value: 'Linux',
  },
  {
    name: 'Matrix Coverage',
    value: 'matrix-coverage',
  },
  {
    name: 'Malicious Software',
    value: 'mailicious-software',
  },
  {
    name: 'Threat Group',
    value: 'threat-group',
  },
];

const OPTIONS = [
  {
    label: 'Cloud',
    value: 'Cloud',
  },
  {
    label: 'AWS',
    value: 'AWS',
  },
  {
    label: 'GCP',
    value: 'GCP',
  },
  {
    label: 'Azure',
    value: 'Azure',
  },
  {
    label: 'Office 365',
    value: 'Office 365',
  },
  {
    label: 'Azure AD',
    value: 'Azure AD',
  },
  {
    label: 'SaaS',
    value: 'SaaS',
  },
];

const columns = mitre_header.map(({ title }) => ({ label: title }));

const MAX_LENGTH = Math.max(...mitre_data.map(({ types }) => types.length));
const data = new Array(MAX_LENGTH).fill(0).map((_, rowIndex) => {
  const row = [];
  columns.forEach((column, colIndex) => {
    row.push({ value: mitre_data[colIndex]?.types?.[rowIndex], background: 'transparent' });
  });
  return row;
});

const BACKGROUNDS = {
  Linux: '#2c9cdb',
  Windows: '#e85757',
  Mac: '#f89c5b',
  AWS: '#5ec975',
  GCP: '#00b3b3',
  Azure: '#cc00cc',
  'Office 365': '#9966ff',
  'Azure AD': '#ff140C',
  SaaS: '#328035',
  White: '#ffffff73',
  Yellow: '#ffd60073',
  Blue: '#00b3b373',
  Green: '#00b30073',
  Fullcoverage: '#00b3b3',
  groupmatrix1: '#116466',
  groupmatrix2: '#94618e',
  groupmatrix3: '#479761',
  groupmatrix4: '#675682',
  groupmatrix5: '#426eb1',
  groupmatrix6: '#984b43',
  matrixcover1: '#984b43',
  matrixcover2: '#335c98',
  matrixcover3: '#177b42',
  matrixcover4: '#984b43',
  matrix1: '#116466',
  matrix2: '#d43f3a',
  matrix3: '#177b42',
  matrix4: '#675682',
  matrix5: '#3c8a92',
  matrix6: '#822b5b',
  matrix7: '#71616a',
  matrix8: '#9c5246',
  matrix9: '#4b5d22',
  matrix10: '#39225d',
  matrix11: '#225d4d',
  matrix12: '#672929',
  matrix13: '#650303',
  matrix14: '#a94c4c',
  matrix15: '#1a6565',
  matrix16: '#3e651a',
  matrix17: '#337e82',
  matrix18: '#3589ca',
  matrix19: '#345c98',
  matrix20: '#845454',
  matrix21: '#5a5a5a',
  matrix22: '#356161',
  matrix23: '#7d4d2b',
  matrix24: '#924040',
  matrix25: '#904646',
  matrix26: '#3c7f6a',
  matrix27: '#3b7b4e',
  matrix28: '#537132',
  matrix29: '#bf762a',
  matrix30: '#26818a',
  'bg-gray': '#313131',
  'matrixos-lin': '#116466',
  'matrixos-mac': '#672929',
  'matrixos-windows': '#822b5b',
};

const SoftwareRows = Object.keys(Software).map((item) => ({
  label: item,
  on: false,
}));

const GroupsRows = Object.keys(Groups).map((item) => ({
  label: item,
  on: false,
}));

function PaperComponent(props) {
  return (
    <Draggable handle="#first-modal" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper
        sx={{
          width: 'min(1440px, 90%) !important',
          maxWidth: '100vw !important',
          height: '100%',
          p: '1rem',
          display: 'flex',
          flexDirection: 'column',
          backgroundImage: 'none',
        }}
        {...props}
      />
    </Draggable>
  );
}

export default function MitreEnterpriseModal({ open, onClose }) {
  const [rows, setRows] = useState([]);
  const [filterOS, setFilterOS] = useState('Cloud');
  const [softwareModalOpen, setSoftwareModalOpen] = useState(false);
  const [groupsModalOpen, setGroupsModalOpen] = useState(false);
  const [groupRows, setGroupRows] = useState(GroupsRows);
  const [softwareRows, setSoftwareRows] = useState(SoftwareRows);
  const [query, setQuery] = useState([]);

  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    let myQuery = [];
    if (!filterOS || !(matrixos[filterOS] || matrixCoverage)) {
      setRows(cloneDeep(data));
      setQuery(myQuery);
      return;
    }
    const cloneData = cloneDeep(data);
    if (filterOS === 'matrix-coverage') {
      columns.forEach((column, colIndex) => {
        Object.entries(matrixCoverage).forEach(([key, coverage]) => {
          if (coverage[column.label]) {
            for (let i = 0; i < coverage[column.label].length; i += 1) {
              for (let rowIndex = 0; rowIndex < MAX_LENGTH; rowIndex += 1) {
                if (cloneData[rowIndex]?.[colIndex]?.value === coverage[column.label][i]) {
                  cloneData[rowIndex][colIndex].background = BACKGROUNDS[key];
                }
              }
            }
          }
        });
      });
    } else if (matrixos[filterOS]) {
      columns.forEach((column, colIndex) => {
        if (matrixos[filterOS][column.label]) {
          for (let i = 0; i < matrixos[filterOS][column.label].length; i += 1) {
            for (let rowIndex = 0; rowIndex < MAX_LENGTH; rowIndex += 1) {
              if (cloneData[rowIndex]?.[colIndex]?.value === matrixos[filterOS][column.label][i]) {
                cloneData[rowIndex][colIndex].background = BACKGROUNDS[filterOS];
                myQuery.push(
                  `event_extra_attributes:MITRE:${columns[colIndex].label}/${cloneData[rowIndex][colIndex].value}`
                );
              }
            }
          }
        }
      });
    }
    setQuery(myQuery);
    setRows(cloneData);
  }, [filterOS]);

  useEffect(() => {
    const cloneData = cloneDeep(rows.length > 0 ? rows : data);
    columns.forEach((column, colIndex) => {
      softwareRows
        .filter((software) => software.on === false)
        .forEach((software) => {
          if (Software[software.label][column.label]) {
            for (let i = 0; i < Software[software.label][column.label].length; i += 1) {
              for (let rowIndex = 0; rowIndex < MAX_LENGTH; rowIndex += 1) {
                if (cloneData[rowIndex]?.[colIndex]?.value === Software[software.label][column.label][i]) {
                  cloneData[rowIndex][colIndex].background = 'transparent';
                }
              }
            }
          }
        });
      softwareRows
        .filter((software) => software.on === true)
        .forEach((software) => {
          if (Software[software.label][column.label]) {
            for (let i = 0; i < Software[software.label][column.label].length; i += 1) {
              for (let rowIndex = 0; rowIndex < MAX_LENGTH; rowIndex += 1) {
                if (cloneData[rowIndex]?.[colIndex]?.value === Software[software.label][column.label][i]) {
                  cloneData[rowIndex][colIndex].background = BACKGROUNDS[Software[software.label].Color];
                }
              }
            }
          }
        });
    });
    setRows(cloneData);
  }, [softwareRows]);

  useEffect(() => {
    const cloneData = cloneDeep(rows.length > 0 ? rows : data);
    columns.forEach((column, colIndex) => {
      groupRows
        .filter((group) => group.on === false)
        .forEach((group) => {
          if (Groups[group.label][column.label]) {
            for (let i = 0; i < Groups[group.label][column.label].length; i += 1) {
              for (let rowIndex = 0; rowIndex < MAX_LENGTH; rowIndex += 1) {
                if (cloneData[rowIndex]?.[colIndex]?.value === Groups[group.label][column.label][i]) {
                  cloneData[rowIndex][colIndex].background = 'transparent';
                }
              }
            }
          }
        });
      groupRows
        .filter((group) => group.on === true)
        .forEach((group) => {
          if (Groups[group.label][column.label]) {
            for (let i = 0; i < Groups[group.label][column.label].length; i += 1) {
              for (let rowIndex = 0; rowIndex < MAX_LENGTH; rowIndex += 1) {
                if (cloneData[rowIndex]?.[colIndex]?.value === Groups[group.label][column.label][i]) {
                  cloneData[rowIndex][colIndex].background = BACKGROUNDS[Groups[group.label].Color];
                }
              }
            }
          }
        });
    });
    setRows(cloneData);
  }, [groupRows]);

  const handleFilterOS = (os) => () => {
    if (os === 'mailicious-software') return setSoftwareModalOpen(true);
    if (os === 'threat-group') return setGroupsModalOpen(true);
    if (os === 'matrix-coverage') {
      if (os === filterOS) {
        setFilterOS('');
      } else {
        setFilterOS(os);
      }
      return;
    }
    if (!matrixos[os]) return;
    if (os === filterOS) {
      setFilterOS('');
    } else {
      setFilterOS(os);
    }
  };

  const handleSowtwareModalClose = () => {
    setSoftwareModalOpen(false);
  };

  const handleGroupsModalClose = () => {
    setGroupsModalOpen(false);
  };

  const handleSoftwareRowChange = (checked, index) => {
    const newRows = cloneDeep(softwareRows);
    newRows[index].on = checked;
    setSoftwareRows(newRows);
  };

  const handleGroupsRowChange = (checked, index) => {
    const newRows = cloneDeep(groupRows);
    newRows[index].on = checked;
    setGroupRows(newRows);
  };

  const handleCellClick = (columnLabel, cellLabel) => {
    const myQuery = `event_extra_attributes:MITRE:${columnLabel}/${cellLabel}`;
    if (query.includes(myQuery)) {
      setQuery(query.filter((q) => q !== myQuery));
    } else {
      setQuery([...query, myQuery]);
    }
  };

  useEffect(() => {
    if (query.length === 0) {
      try {
        const queries = location.search.split('?')[1].split('&');
        let exQuery = queries.filter((q) => !q.includes('search'));
        if (open) {
          const search = 'search=event_extra_attributes:MITRE*';
          exQuery.push(search);
        } else {
          exQuery.push('search=*');
        }
        history.replace({
          pathname: location.pathname,
          search: `?${exQuery.join('&')}`,
        });
      } catch (e) {
        console.log(e);
      }
    } else {
      const queries = location.search.split('?')[1].split('&');
      let exQuery = queries.filter((q) => !q.includes('search'));
      const search = 'search=' + query.join(' OR ');
      exQuery.push(search);
      history.replace({
        pathname: location.pathname,
        search: `?${exQuery.join('&')}`,
      });
    }
  }, [query]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="first-modal"
      PaperComponent={PaperComponent}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <MitreEnterpriseInsideModal
        title="Software"
        open={softwareModalOpen}
        onClose={handleSowtwareModalClose}
        rows={softwareRows}
        onChange={handleSoftwareRowChange}
      />
      <MitreEnterpriseInsideModal
        title="Threat Group"
        open={groupsModalOpen}
        onClose={handleGroupsModalClose}
        rows={groupRows}
        gridColumnCount={4}
        onChange={handleGroupsRowChange}
      />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
        id="first-modal"
      >
        <Button size="small" onClick={onClose}>
          <ClearIcon />
        </Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          paddingBlock: 1,
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Select
          size="small"
          variant="outlined"
          value={OPTIONS.findIndex((item) => item.value === filterOS) > -1 ? filterOS : 'Cloud'}
          onChange={(event) => setFilterOS(event.target.value)}
        >
          {OPTIONS.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          {BUTTONS.map((item) => (
            <Button
              key={item.value}
              variant="contained"
              color={filterOS === item.value ? 'secondary' : 'primary'}
              onClick={handleFilterOS(item.value)}
            >
              {item.name}
            </Button>
          ))}
        </Box>
      </Box>
      <Paper elevation={0} sx={{ overflow: 'hidden', flex: 1, borderRadius: 0 }}>
        <TableContainer sx={{ maxHeight: '100%' }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column, colIndex) => (
                  <TableCell key={colIndex} color="secondary">
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody
              sx={{
                'tr, td': {
                  borderCollapse: 'collapse',
                  border: '1px solid #8b8b8b73',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  maxWidth: '200px',
                },
              }}
            >
              {rows.map((row, rowIndex) => {
                return (
                  <TableRow hover tabIndex={-1} key={rowIndex}>
                    {row.map((column, colIndex) => (
                      <TableCell
                        key={`${rowIndex}_${colIndex}`}
                        style={{
                          background: column?.background || 'transparent',
                        }}
                        onClick={() => handleCellClick(columns[colIndex].label, column.value)}
                      >
                        {column?.value || ''}
                      </TableCell>
                    ))}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Dialog>
  );
}

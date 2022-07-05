import React, { useEffect, useRef, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Autocomplete, IconButton, InputBase, Menu, MenuItem, Paper, TextField, Tooltip } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import SaveQuery from './SaveQuery';
import { makeApiRequest } from '../../utils/index';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ClearIcon from '@mui/icons-material/Clear';
import { DEFAULT_QUERIES, getQueryPath } from './utils';
import { buildMoment } from '@logrhythm/shared/common';
import { SET_SEARCH, SET_SITE } from '../../store/types';
import { actions as userActions } from '../../store/modules/user';

const GlobalSearch = () => {
  const history = useHistory();
  const location = useLocation();
  const searchButtonRef = useRef();
  const [site, setSite] = useState('all');
  const [sites, setSites] = useState([]);
  const [searchLog, setSearchLog] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);
  const [anchorElSearchMenu, setAnchorElSearchMenu] = React.useState(null);
  const { global, search } = useSelector((state) => state.user);
  const { searchRange, searchStart, searchEnd, searchMoment } = global;
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const response = await makeApiRequest({ key: 'huntActivitySiteList' });
        const data = response.data.body || {};
        let sites = [{ value: 'all', label: 'Sites: All' }];
        sites.push(...Object.keys(data).map((key) => ({ value: key, label: 'Site: ' + data[key] })));
        setSites(sites);
        const [historyRes] = await Promise.all([
          makeApiRequest({
            key: 'huntActivityQueryHistory',
            method: 'GET',
          }),
        ]);
        if (historyRes) setSearchHistory(historyRes.data.body);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    if (
      ['incidents', 'hunt-activity', 'hunt-geo-activity', 'hunt-mitre', 'policy', 'cases'].includes(
        location.pathname.slice(1)
      )
    ) {
      setSearchLog(search);
    }
  }, [location]);

  useEffect(() => {
    dispatch(userActions[SET_SITE]({ site: site }));
  }, [site]);

  const handleChangeSite = (event) => {
    setSite(event.target.value);
  };

  const handleSearch = (type, query) => {
    const params = {};

    if (searchLog || query) {
      params.search = searchLog || query;
    } else {
      setSearchLog(DEFAULT_QUERIES[type].query);
      params.search = DEFAULT_QUERIES[type].query;
      params.anomaly = DEFAULT_QUERIES[type].anomaly;
      params.score = DEFAULT_QUERIES[type].score;
    }

    if (site) {
      params.site = site;
    }

    if (searchStart) {
      params.startDate = (searchMoment ? buildMoment(searchMoment.from) : searchStart).getTime();
    }
    if (searchEnd) {
      params.endDate = (searchMoment ? buildMoment(searchMoment.to) : searchEnd).getTime();
    }
    try {
      (async () => {
        await makeApiRequest({
          key: 'huntActivityQueryHistory',
          method: 'POST',
          body: { query: params.search, type: type },
        })
          //.then((t) => console.log('RE', t?.config?.data, t.status, t.data))
          .catch((e) => console.log('ERR', e))
          .finally(() => {
            setSearchHistory([
              {
                id: '' + Math.floor(Math.random() * 90000) + 10000,
                type: type,
                query: params.search,
                created_on: new Date(),
              },
              ...searchHistory,
            ]);
            dispatch(userActions[SET_SEARCH]({ search: params.search }));
            history.push({
              pathname: getQueryPath(type),
            });
            params.type = type;
          });
      })();
    } catch (error) {
      console.log(error);
    }
  };

  const handleKeyUp = (event) => {
    if (event.key === 'Enter' || event.keyCode === 13) {
      setAnchorElSearchMenu(searchButtonRef.current);
    }
  };

  const handleSaveQuery = ({ name, query }) => {
    try {
      makeApiRequest({
        key: 'huntActivitySaveQuery',
        method: 'POST',
        body: { name, query },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleQuerySelection = (queryItem) => {
    setSearchLog(queryItem.query);
    //handleSearch('TYPE', queryItem.query);
  };

  const handleSearchClick = (action) => {
    handleSearch(action);
    setAnchorElSearchMenu(null);
  };

  const clearSearch = () => {
    setSearchLog('');
  };

  return (
    <>
      <TextField select size="small" value={site} id={'nodeSelector'} onChange={handleChangeSite}>
        {sites.map((site, idx) => (
          <MenuItem key={idx} value={site.value} selected={idx === 0}>
            {site.label}
          </MenuItem>
        ))}
      </TextField>
      <Paper
        elevation={0}
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.25)',
          display: 'flex',
          alignItems: 'center',
          padding: '5px 10px',
          borderRadius: '5px',
          flexGrow: 1,
          marginLeft: 2,
        }}
      >
        <Autocomplete
          autoHighlight={true}
          freeSolo={true}
          clearOnBlur={false}
          options={searchHistory}
          getOptionLabel={(option) => option.query || option}
          inputValue={searchLog}
          onChange={(event, value) => {
            if (value) {
              setAnchorElSearchMenu(searchButtonRef.current);
            }
          }}
          onInputChange={(event, newInputValue) => setSearchLog(newInputValue)}
          sx={{ flexGrow: 1 }}
          id={'globalSearch'}
          renderInput={(params) => (
            <InputBase
              {...params}
              ref={params.InputProps.ref}
              placeholder="Search Logs"
              fullWidth
              sx={{
                color: 'white',
              }}
              InputProps={{
                ...params.InputProps,
                onKeyUp: handleKeyUp,
                id: 'globalSearchQuery',
              }}
            />
          )}
        />
        <Tooltip title={'Clear Search'} arrow>
          <IconButton sx={{ color: 'white' }} onClick={clearSearch}>
            <ClearIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title={'Search'} arrow>
          <IconButton
            sx={{ color: 'white' }}
            ref={searchButtonRef}
            onClick={() => setAnchorElSearchMenu(searchButtonRef.current)}
          >
            <SearchIcon />
            <ArrowDropDownOutlinedIcon sx={{ color: 'white' }} />
          </IconButton>
        </Tooltip>
        <Menu
          anchorEl={anchorElSearchMenu}
          open={Boolean(anchorElSearchMenu)}
          onClose={() => setAnchorElSearchMenu(null)}
          sx={{ mt: 5 }}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={() => handleSearchClick('INCIDENTS')}>Incidents</MenuItem>
          <MenuItem onClick={() => handleSearchClick('HUNT_ACTIVITY')}>Hunt - Activity</MenuItem>
          <MenuItem onClick={() => handleSearchClick('HUNT_GEO_ACTIVITY')}>Hunt - Geo Activity</MenuItem>
          <MenuItem onClick={() => handleSearchClick('HUNT_MITRE')}>Hunt - MITRE</MenuItem>
          <MenuItem onClick={() => handleSearchClick('POLICY')}>Policy</MenuItem>
          <MenuItem onClick={() => handleSearchClick('CASES')}>Cases</MenuItem>
        </Menu>
        <SaveQuery onSaveQuery={handleSaveQuery} onQuerySelected={handleQuerySelection} />
      </Paper>
    </>
  );
};

export default GlobalSearch;

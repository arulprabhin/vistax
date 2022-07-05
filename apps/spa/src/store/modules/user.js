import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';
import { SET_GLOBAL_SEARCH_RANGE, SET_SEARCH, SET_SITE, SET_USER, TOGGLE_THEME } from '../types';

export const user = createSlice({
  name: 'user',
  initialState: {
    theme: 'dark',
    user: null,
    global: {
      searchRange: 'Last 14 days',
      searchStart: moment().subtract(14, 'days').toDate(),
      searchEnd: moment().toDate(),
      searchMoment: {
        from: [
          { action: 'subtract', on: 'days', value: 14 },
          { action: 'startOf', on: 'day', value: null },
        ],
        to: [{ action: 'now', on: null, value: null }],
      },
    },
    site: 'all',
    search: '',
  },
  reducers: {
    [TOGGLE_THEME]: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    [SET_USER]: (state, action) => {
      state.user = action.payload;
    },
    [SET_GLOBAL_SEARCH_RANGE]: (state, action) => {
      state.global.searchRange = action.payload.range;
      state.global.searchStart = action.payload.start;
      state.global.searchEnd = action.payload.end;
      state.global.searchMoment = action.payload.moment;
    },
    [SET_SITE]: (state, action) => {
      state.site = action.payload.site;
    },
    [SET_SEARCH]: (state, action) => {
      state.search = action.payload.search;
    },
  },
});

export const actions = user.actions;

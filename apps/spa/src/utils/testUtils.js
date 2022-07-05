import React from 'react';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

function configureTestStore(initialState = {}) {
  const store = createStore(
    combineReducers({
      router: (state = {}) => state,
      user: (state = {}) => state,
    }),
    initialState,
    applyMiddleware(thunk)
  );
  const origDispatch = store.dispatch;

  store.dispatch = jest.fn(origDispatch);

  return store;
}

export function renderWithProviders(
  ui,
  { initialState, store = configureTestStore(initialState), ...renderOptions } = {}
) {
  const theme = createTheme();
  const history = createMemoryHistory();

  const Wrapper = ({ children }) => (
    <Provider store={store}>
      <Router history={history}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Router>
    </Provider>
  );

  return {
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
    store,
    history,
  };
}

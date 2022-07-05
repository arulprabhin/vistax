import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { user } from './user';

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    user: user.reducer,
  });

export default createRootReducer;

import { combineReducers } from 'redux';
import { columnReducer } from './columnReducer';

const reducers = combineReducers({
  allColumn: columnReducer,
})

export default reducers;
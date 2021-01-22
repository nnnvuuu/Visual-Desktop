import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import todosReducer from './todosReducer';

export default combineReducers({
  error: errorReducer,
  auth: authReducer,
  todos: todosReducer,
});
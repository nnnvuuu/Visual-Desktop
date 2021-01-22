import {GET_TODOS,ADD_TODO,DELETE_TODO,TODOS_LOADING} from './types';
import axios from 'axios';
import { tokenConfig } from './authAction';

export const getTodos = () => (dispatch,getState) =>{
  //  console.log(state()) ;
  //  console.log(user);
   dispatch(setTodosLoading());
   axios.get("http://localhost:4000/todos/", tokenConfig(getState))
   .then(res => dispatch({
      type: GET_TODOS,
      payload: res.data
   }));
};

export const deleteTodos = id => (dispatch,getState) =>{
    // axios.delete(`http://localhost:4000/todos/${id}`)
    axios.delete(`http://localhost:4000/todos/${id}`,tokenConfig(getState))
    .then(res => dispatch({
        type: DELETE_TODO,
        payload:id,
    }));
};

export const addTodos = todo => (dispatch,getState) =>{
  axios.post("http://localhost:4000/todos/add",todo,tokenConfig(getState))
  .then(res => dispatch({
      type: ADD_TODO,
      payload: res.data
  }));
};

export const setTodosLoading = () =>{
    return{
      type:TODOS_LOADING
    };
};
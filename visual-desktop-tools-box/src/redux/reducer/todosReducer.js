import { GET_TODOS, ADD_TODO, DELETE_TODO,TODOS_LOADING} from "../actions/types";

const initState ={
  todos : [],
  // status:"",
  loading:false,
}

export default function (state = initState, action){
  switch(action.type){
    case GET_TODOS:
    return{
      ...state,
      todos:action.payload,
      // status:action.payload, //maybe
      loading:false
    }
    case DELETE_TODO:
    return{
      ...state,
      todos: state.todos.filter(todo => todo._id !== action.payload)
    }
    case ADD_TODO:
    return{
      ...state,
      todos:[action.payload, ...state.todos]
    }
    case TODOS_LOADING:
    return{
      ...state,
      loading:true
    }
    default:
    return state;
  }



}
import {
  ADD_TODO,
  CLEAR_INPUT_FIELD,
  TOGGLE_COMPLETE,
  DELETE_TODO,
  UPDATE_TODO,
} from "./Action-types";

const defaultstate =
{
  current_todo: "",
  todos: [],
}


export const reducer = (
  state = defaultstate,
  action
) => {
  if (action.type === UPDATE_TODO) {
    return {
      ...state,
      current_todo: action.payload,
    };
  }
  if (action.type === CLEAR_INPUT_FIELD) {
    return {
      ...state,
      current_todo: "",
    };
  }
  if (action.type === ADD_TODO) {
    if (state.current_todo !== "")
      return {
        ...state,
        todos: [...state.todos, {content: state.current_todo,completed:false ,id:state.todos.length,}],
      };

  }

  if (action.type === TOGGLE_COMPLETE) {
    return {
      ...state,
      todos:state.todos.map((todo) => {
        if (todo.id === action.payload) return ({
          ...todo,
          completed: !todo.completed
        }
        )
        else {
          return todo;
        }
      })
    
      
      
    };
  }
  if (action.type === DELETE_TODO) {
    return {
      ...state,
      todos: state.todos.filter((item) =>  item.id !== action.payload )
,
    };
  }
  return state;
};

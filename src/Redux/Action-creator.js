import {
  ADD_TODO,
  COMPLETED_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  CLEAR_INPUT_FIELD,
  TOGGLE_COMPLETE,
} from "./Action-types";

export function updateTodo(data) {
  return {
    type: UPDATE_TODO,
    payload: data,
  };
}
export function clearInputFields() {
  return {
    type: CLEAR_INPUT_FIELD,
  };
}

export function addTodo(data) {
  return {
    type: ADD_TODO,
    payload: data,
  };
}
export function completedTodo(id) {
  return {
    type: COMPLETED_TODO,
    payload: id,
  };
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    payload: id,
  };
}
export function toggleComplete(id) {
  return {
    type: TOGGLE_COMPLETE,
    payload:id,
  }
}

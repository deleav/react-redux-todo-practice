// action type
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const REAET_EDIT = "REAET_EDIT";
export const SAVE_TODO = "SAVE_TODO";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";

// action creator
export function addTodo( text ) {
  return {
    type: ADD_TODO,
    text
  }
}

export function toggleTodo( index ) {
  return {
    type: TOGGLE_TODO,
    index
  }
}

export function deleteTodo( index ) {
  return {
    type: DELETE_TODO,
    index
  }
}

export function editTodo( index ) {
  return {
    type: EDIT_TODO,
    index
  }
}

export function resetEdit() {
  return {
    type: REAET_EDIT
  }
}

export function saveTodo( index, text ) {
  return {
    type: SAVE_TODO,
    index,
    text
  }
}

export function clearCompleted() {
  return {
    type: CLEAR_COMPLETED
  }
}
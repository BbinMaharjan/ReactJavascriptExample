// Actions Types
export const ADD_TODOS = "ADD_TODOS";

export const MARK_AS_COMPLETE = "MARK_AS_COMPLETE";

// Action Generators

export const addTodos = (todo) => ({
  type: ADD_TODOS,
  payload: todo,
});

export const markAsComplete = (todoId) => ({
  type: MARK_AS_COMPLETE,
  payload: todoId,
});

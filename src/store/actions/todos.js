// Actions Types
export const ADD_TODOS = "ADD_TODOS";
export const GET_ALL_TODOS = "GET_ALL_TODOS";

// Action Generators

export const addTodos = (todo) => ({
  type: ADD_TODOS,
  payload: todo,
});

export const getTodos = (todos) => ({
  type: GET_ALL_TODOS,
  payload: todos,
});

// Actions

export const addTodosToLocalStorage = (todo) => async (dispatch) => {
  const response = await localStorage.setItem("todos", JSON.stringify(todo));
  todo = response;
  dispatch(addTodos(todo));
};

export const getAllTodos = (todos) => async (dispatch) => {
  const response = await JSON.parse(localStorage.getItem("todos"));
  console.log("action", response);
  todos = response;
  dispatch(getTodos(todos));
};

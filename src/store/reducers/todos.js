import { ADD_TODOS, GET_ALL_TODOS } from "../actions/todos";

const initialState = {
  todos: [],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODOS:
      const updatedTodos = [action.payload, ...state.todos];
      return {
        ...state,
        todos: updatedTodos,
      };

    case GET_ALL_TODOS:
      return {
        todos: action.payload,
        ...state,
      };
    default:
      return state;
  }
};

export default todosReducer;

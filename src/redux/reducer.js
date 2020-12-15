import {
  ADD_TODO, REMOVE_TODO, UPDATE_TODO,
} from './constants';

const initialState = { todos: [] };

const reducer = (state = initialState, {
  type, payload,
}) => {
  switch (type) {
  case ADD_TODO:
    return {
      ...state,
      todos: [...state.todos, payload],
    };
  case REMOVE_TODO:
    return {
      ...state,
      todos: state.todos.filter(todo => todo.id !== payload),
    };
  case UPDATE_TODO:
    return {
      ...state,
      todos: state.todos.map(todo => (todo.id === payload.id ? {
        ...todo,
        ...payload,
      } : todo)),
    };

  default:
    return state;
  }
};

export default reducer;

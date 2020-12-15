import {
  ADD_TODO, REMOVE_TODO, UPDATE_TODO,
} from './constants';

export const addTodo = todo => ({
  type: ADD_TODO,
  payload: todo,
});

export const removeTodo = todoId => ({
  type: REMOVE_TODO,
  payload: todoId,
});

export const updateTodo = todo => ({
  type: UPDATE_TODO,
  payload: todo,
});

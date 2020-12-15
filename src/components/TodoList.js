import React from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import { useSelector } from 'react-redux';

function TodoList() {

  const todos = useSelector(state => state.todos);


  return (
    <div>
      <h1>What's the Plan for Today?</h1>
      <TodoForm />
      {
        todos.map(todo => <Todo
          todo={todo}
          key={todo.id} />)
      }
    </div>
  );
}

export default TodoList;

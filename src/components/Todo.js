import React, { useState } from 'react';
import TodoEdit from './TodoEdit';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../redux/actions';


function Todo({ todo }) {

  const dispatch = useDispatch();

  const [isEdit, setIsEdit] = useState(false);

  const handleUpdateTodo = () => {
    dispatch(updateTodo({
      id: todo.id,
      isCompleted: !todo.isCompleted,
    }));
  };

  if (isEdit) {
    return <TodoEdit
      todo={todo}
      handleEdit={() => setIsEdit(state => !state)}
    />
  }
  return (
    <div
      className={todo.isCompleted ?
        'todo-row complete' : 'todo-row'}
    >
      <>
        <div onClick={handleUpdateTodo}>
          {todo.text}
        </div>

        <div className="icons">
          <TiEdit
            onClick={() => setIsEdit(state => !state)}
            className="edit-icon"
          />
          <RiCloseCircleLine
            onClick={() => dispatch(removeTodo(todo.id))}
            className="delete-icon"
          />
        </div>

      </>
        




    </div>
  );

}

export default Todo;

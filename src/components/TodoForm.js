import React, {
  useState, useEffect, useRef,
} from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { addTodo } from '../redux/actions';


function TodoForm() {

  const dispatch = useDispatch();

  const [text, setText] = useState();

  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  const handleChange = e => {
    setText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo({
        id: v4(),
        text: text,
      }));
    }

    setText('');
  };

  return (
    <form
      className="todo-form"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Add a todo"
        value={text}
        name="text"
        autoComplete="off"
        className="todo-input"
        onChange={handleChange}
        ref={inputRef}
      />

      <button className="todo-button">
        Add todo
      </button>




    </form>
  );
}

export default TodoForm;

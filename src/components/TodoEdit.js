import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { v4 } from 'uuid';
import { updateTodo } from '../redux/actions'


function TodoEdit({ todo, handleEdit }) {

  const dispatch = useDispatch()

  const [text, setText] = useState('')

  const inputRef = useRef(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  })

  const handleChange = e => {
    setText(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(updateTodo({
        id: v4(),
        text: text
      }))      
    }
    setText('')
    handleEdit()
  }

  return (
    <form
      className="todo-form"
      onSubmit={handleSubmit}
    >

      <input
        type="text"
        placeholder="Update your item"
        value={text}
        name="text"
        autoComplete="off"
        className="todo-input edit"
        onChange={handleChange}
        ref={inputRef}
      />

      <button className="todo-button edit" onClick={() => 
        dispatch(updateTodo({
          id: todo.id,
          text: text
        }))
      }>
        Update
      </button>
    </form>
  )
}

export default TodoEdit

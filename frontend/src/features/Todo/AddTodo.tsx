import React, { useState, useContext } from 'react'
import stateContext from '../reducer/context/context'
import { type Todo } from '../reducer/types/types'
import './Todo.scss'

const AddTodo = (): JSX.Element => {
  const [userId, setUserId] = useState(0)
  const [title, setTitle] = useState('')

  const { state, dispatch } = useContext(stateContext)

  const addTodo = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (userId !== 0 && title !== '') {
      const todoNew: Todo = {
        userId,
        title,
        id: state.todos[0].id + 1,
        completed: false
      }
      dispatch({ type: 'ADD_TODO', payload: todoNew })
    }
  }

  return (
    <form onSubmit={addTodo} className='container__form'>
    <h2 className='form__name'>New todo</h2>
    <div className='form__content'>
      <input placeholder='user' onChange={(e) => { setUserId(Number(e.target.value)) }} type='number' className='form__input'></input>
      <input placeholder='task' onChange={(e) => { setTitle(e.target.value) }} type='text' className='form__input'></input>
      <button type='submit' className='form__btn'>add todo</button>
    </div>
  </form>
  )
}

export default AddTodo

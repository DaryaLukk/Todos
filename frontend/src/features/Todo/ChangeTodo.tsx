import React, { useState, useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import stateContext from '../reducer/context/context'
import { type Todo } from '../reducer/types/types'
import './Todo.scss'

const ChangeTodo = (): JSX.Element => {
  const [userId, setUserId] = useState(0)
  const [title, setTitle] = useState('')

  const { state, dispatch } = useContext(stateContext)

  const id = useParams()
  const nav = useNavigate()

  useEffect(() => {
    const todo = state.todos.find((todo) => todo.id === Number(id.id))
    if (todo != null) {
      setUserId(todo.userId)
      setTitle(todo.title)
    }
  }, [])

  const changeTodo = (): void => {
    const todo = state.todos.find((todo) => todo.id === Number(id.id))
    if (todo != null) {
      const todoNew: Todo = {
        userId,
        title,
        id: todo.id,
        completed: todo.completed
      }
      dispatch({ type: 'EDIT_TODO', payload: todoNew })
      nav('/')
    }
  }

  return (
    <div className='container'>
    <div className='container__name'>
      <h1>To Do</h1>
    </div>
    <form onSubmit={changeTodo} className='container__form'>
      <h2 className='form__name'>Change todo</h2>
      <div className='form__content'>
        <input defaultValue={userId} placeholder='user' onChange={(e) => { setUserId(Number(e.target.value)) }} type='number' className='form__input'></input>
        <input defaultValue={title} placeholder='task' onChange={(e) => { setTitle(e.target.value) }} type='text' className='form__input'></input>
        <button type='submit' className='form__btn'>change todo</button>
      </div>
    </form>
  </div>
  )
}

export default ChangeTodo

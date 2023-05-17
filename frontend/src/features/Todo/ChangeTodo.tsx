import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { type Todo } from '../../store/types'
import './Todo.scss'
import todoStore from '../../store/todoStore'
import { observer } from 'mobx-react-lite'

const ChangeTodo = observer((): JSX.Element => {
  const [userId, setUserId] = useState(0)
  const [title, setTitle] = useState('')

  const id = useParams()
  const nav = useNavigate()

  useEffect(() => {
    const todo = todoStore.todos.find((todo) => todo.id === Number(id.id))
    if (todo !== undefined) {
      setUserId(todo.userId)
      setTitle(todo.title)
    }
  }, [])

  const changeTodo = (): void => {
    const todo = todoStore.todos.find((todo) => todo.id === Number(id.id))
    if (todo != null) {
      const todoNew: Todo = {
        userId,
        title,
        id: todo.id,
        completed: todo.completed
      }
      todoStore.changeTodo(todoNew)
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
})

export default ChangeTodo

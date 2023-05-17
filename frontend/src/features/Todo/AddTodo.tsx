/* eslint-disable @typescript-eslint/restrict-plus-operands */
import React, { useState } from 'react'
import { type Todo } from '../../store/types'
import { observer } from 'mobx-react-lite'
import './Todo.scss'
import todoStore from '../../store/todoStore'

const AddTodo = observer((): JSX.Element => {
  const [userId, setUserId] = useState(0)
  const [title, setTitle] = useState('')

  const addTodo = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (userId !== 0 && title !== '') {
      const todoNew: Todo = {
        userId,
        title,
        id: todoStore.todos[0].id + 1,
        completed: false
      }
      todoStore.addTodo(todoNew)
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
})

export default AddTodo

/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect, useState } from 'react'
import './Todo.scss'
import TodoCard from './TodoCard'
import AddTodo from './AddTodo'
import todoStore from '../../store/todoStore'
import { observer } from 'mobx-react-lite'

const TodoList = observer((): JSX.Element => {
  const [status, setStatus] = useState(0)
  const [userId, setUserId] = useState(0)
  const [todos, setTodos] = useState(todoStore.todos)

  useEffect(() => {
    todoStore.axiosTodos()
    setTodos(todoStore.todos)
  }, [])

  useEffect(() => {
    if (status !== 0 && userId !== 0) {
      setTodos(todoStore.todos.filter(todo => {
        if (status === 1) {
          return todo.completed && todo.userId === userId
        } else return !todo.completed && todo.userId === userId
      }))
    } else if (status !== 0 && userId === 0) {
      setTodos(todoStore.todos.filter(todo => {
        if (status === 1) {
          return todo.completed
        } else return !todo.completed
      }))
    } else if (status === 0 && userId !== 0) {
      setTodos(todoStore.todos.filter(todo => todo.userId === userId))
    } else setTodos(todoStore.todos)
  }, [todoStore.todos, status, userId])

  return (
    <div className='container'>
    <div className='container__name'>
      <h1>To Do</h1>
    </div>
    <AddTodo />
    <div className='container__search'>
      <h2 className='search__name'>Search</h2>
      <input className='search__input' placeholder='user' type='number' onChange={(e) => { setUserId(Number(e.target.value)) }}></input>
      <select className='search__label' onChange={(e) => { setStatus(Number(e.target.value)) }}>
        <option className='search__option' value={0}>task status</option>
        <option value={1}>done</option>
        <option value={2}>not done</option>
      </select>
    </div>
    {todos.map((todo) =>
      <TodoCard todo={todo} key={todo.id}/>)}
  </div>
  )
})

export default TodoList

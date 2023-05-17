import React, { useEffect, useState } from 'react'
import './Todo.scss'
import TodoCard from './TodoCard'
import AddTodo from './AddTodo'
import todoStore from '../../store/todoStore'
import { observer } from 'mobx-react-lite'

const TodoList = observer((): JSX.Element => {
  const [filterCM, setFilterCM] = useState(0)
  const [filterUI, setFilterUI] = useState(0)
  const [todos, setTodos] = useState(todoStore.todos)

  useEffect(() => {
    todoStore.axiosTodos()
    setTodos(todoStore.todos)
  }, [])

  useEffect(() => {
    setTodos(todoStore.todos)
  }, [todoStore.todos])

  return (
    <div className='container'>
    <div className='container__name'>
      <h1>To Do</h1>
    </div>
    <AddTodo />
    <div className='container__search'>
      <h2 className='search__name'>Search</h2>
      <input className='search__input' placeholder='user' type='number' onChange={(e) => { setFilterUI(Number(e.target.value)) }}></input>
      <select className='search__label' onChange={(e) => { setFilterCM(Number(e.target.value)) }}>
        <option className='search__option' value={0}>task status</option>
        <option value={1}>done</option>
        <option value={2}>not done</option>
      </select>
    </div>
    {filterCM === 0 && filterUI === 0 && todos.map((todo) =>
      <TodoCard todo={todo} key={todo.id}/>
    )}
    {filterCM === 1 && filterUI === 0 && todoStore.todos.filter((todo) => todo.completed).map((todo) =>
      <TodoCard todo={todo} key={todo.id}/>
    )}
    {filterCM === 2 && filterUI === 0 && todoStore.todos.filter((todo) => !todo.completed).map((todo) =>
      <TodoCard todo={todo} key={todo.id}/>
    )}
    {filterCM === 0 && filterUI !== 0 && todoStore.todos.filter((todo) => todo.userId === filterUI).map((todo) =>
      <TodoCard todo={todo} key={todo.id}/>
    )}
    {filterCM === 1 && filterUI !== 0 && todoStore.todos.filter((todo) => todo.completed && todo.userId === filterUI).map((todo) =>
      <TodoCard todo={todo} key={todo.id}/>
    )}
    {filterCM === 2 && filterUI !== 0 && todoStore.todos.filter((todo) => !todo.completed && todo.userId === filterUI).map((todo) =>
      <TodoCard todo={todo} key={todo.id}/>
    )}
  </div>
  )
})

export default TodoList

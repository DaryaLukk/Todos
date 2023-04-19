import React, { useContext, useState } from 'react';
import './Todo.scss'
import stateContext from '../reducer/context/context';
import TodoCard from './TodoCard';
import AddTodo from './AddTodo';

export default function TodoList(): JSX.Element {
  const { state } = useContext(stateContext)
  const [filterCM, setFilterCM] = useState(0)
  const [filterUI, setfilterUI] = useState(0)

  return (
    <div className='container'>
    <div className='container__name'>
      <h1>To Do</h1>
    </div>
    <AddTodo />
    <div className='container__search'>
      <h2 className='search__name'>Search</h2>
      <input className='search__input' placeholder='user' type='number' onChange={(e) => setfilterUI(Number(e.target.value))}></input>
      <select className='search__label' onChange={(e) => setFilterCM(Number(e.target.value))}>
        <option className='search__option' value={0}>task status</option>
        <option value={1}>done</option>
        <option value={2}>not done</option>
      </select>
    </div>
    {filterCM === 0 && filterUI === 0 && state.todos.map((todo) => 
      <TodoCard todo={todo} key={todo.id}/>
      )}
    {filterCM === 1 && filterUI === 0 && state.todos.filter((todo) => todo.completed === true).map((todo) => 
      <TodoCard todo={todo} key={todo.id}/>
      )}
    {filterCM === 2 && filterUI === 0 && state.todos.filter((todo) => todo.completed === false).map((todo) => 
      <TodoCard todo={todo} key={todo.id}/>
      )}
    {filterCM === 0 && filterUI !== 0 && state.todos.filter((todo) => todo.userId === filterUI).map((todo) => 
      <TodoCard todo={todo} key={todo.id}/>
      )}
    {filterCM === 1 && filterUI !== 0 && state.todos.filter((todo) => todo.completed === true && todo.userId === filterUI).map((todo) => 
      <TodoCard todo={todo} key={todo.id}/>
      )}
    {filterCM === 2 && filterUI !== 0 && state.todos.filter((todo) => todo.completed === false && todo.userId === filterUI).map((todo) => 
      <TodoCard todo={todo} key={todo.id}/>
      )}
  </div>
  )
}

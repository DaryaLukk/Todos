import React from 'react'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import TodoList from './features/Todo/TodoList'
import ChangeTodo from './features/Todo/ChangeTodo'

function App (): JSX.Element {
  return (
    <div className="App">
        <Routes>
          <Route path={'/'} element={<TodoList />}></Route>
          <Route path='/:id/change' element={<ChangeTodo />}></Route>
        </Routes>
    </div>
  )
}

export default App

import React, {useReducer, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { reducer, init } from './features/reducer/reducer';
import stateContext from './features/reducer/context/context';
import TodoList from './features/Todo/TodoList';
import ChangeTodo from './features/Todo/ChangeTodo';

function App() {
  const [state, dispatch] = useReducer(reducer, init)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(res => {
      const todos = res.data
      dispatch({type: "INIT_TODO", payload:todos.sort((a: { id: number; }, b: { id: number; }) => b.id - a.id)})
    });
  }, []);
  
  return (
    <div className="App">
      <stateContext.Provider value={{ state, dispatch }}>
        <Routes>
          <Route path={'/'} element={<TodoList />}></Route>
          <Route path='/:id/change' element={<ChangeTodo />}></Route>
        </Routes>
      </stateContext.Provider>
    </div>
  );
}

export default App;

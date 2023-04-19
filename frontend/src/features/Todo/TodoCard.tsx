import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import stateContext from '../reducer/context/context'
import { type Todo } from '../reducer/types/types'
import './Todo.scss'

const TodoCard = ({ todo }: { todo: Todo }): JSX.Element => {
  const { dispatch } = useContext(stateContext)

  const nav = useNavigate()

  const completedTodo = (): void => {
    dispatch({ type: 'COMPLETED_TODO', payload: todo })
  }

  const deleteTodo = (): void => {
    dispatch({ type: 'DELETE_TODO', payload: todo.id })
  }

  return (
    <div className='container__todo' >
      <div className='todo__content'>
        <h2 className='todo__title'>{todo.title}</h2>
        <div className='todo__completed' onClick={() => { completedTodo() }}>
          <div className={todo.completed ? 'completed__done' : 'completed_not'}></div>
        </div>
      </div>
      <div className='todo__content'>
        <p className='todo__userId'>user {todo.userId}</p>
        <div className='todo__change'>
          <div onClick={() => { nav(`/${todo.id}/change`) }} className='change__changeTodo'>change</div>
          <div onClick={() => { deleteTodo() }} className='change__deleteTodo'>delete</div>
        </div>
      </div>
    </div>
  )
}

export default TodoCard

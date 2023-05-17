import React from 'react'
import { useNavigate } from 'react-router-dom'
import { type Todo } from '../../store/types'
import './Todo.scss'
import todoStore from '../../store/todoStore'

const TodoCard = ({ todo }: { todo: Todo }): JSX.Element => {
  const nav = useNavigate()

  return (
    <div className='container__todo' >
      <div className='todo__content'>
        <h2 className='todo__title'>{todo.title}</h2>
        <div className='todo__completed' onClick={() => { todoStore.completeTodo(todo.id) }}>
          <div className={todo.completed ? 'completed__done' : 'completed_not'}></div>
        </div>
      </div>
      <div className='todo__content'>
        <p className='todo__userId'>user {todo.userId}</p>
        <div className='todo__change'>
          <div onClick={() => { nav(`/${todo.id}/change`) }} className='change__changeTodo'>change</div>
          <div onClick={() => { todoStore.removeTodo(todo.id) }} className='change__deleteTodo'>delete</div>
        </div>
      </div>
    </div>
  )
}

export default TodoCard

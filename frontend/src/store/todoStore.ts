/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { makeAutoObservable } from 'mobx'
import axios from 'axios'
import { type Todo, type TodoId } from './types'

class TodoStore {
  todos: Todo[] = []

  constructor () {
    makeAutoObservable(this)
  }

  addTodo (todo: Todo): void {
    this.todos.unshift(todo)
  }

  removeTodo (id: TodoId): void {
    this.todos = this.todos.filter(todo => todo.id !== id)
  }

  completeTodo (id: TodoId): void {
    this.todos = this.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !(todo.completed)
      }
      return todo
    })
  }

  changeTodo (todoN: Todo): void {
    this.todos = this.todos.map(todo => {
      if (todo.id === todoN.id) {
        todo.userId = todoN.userId
        todo.title = todoN.title
      }
      return todo
    })
  }

  axiosTodos (): void {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => {
        const json = res.data
        this.todos = [...this.todos, ...json.sort((a: { id: number }, b: { id: number }) => b.id - a.id)]
      })
      .catch((e) => { console.log(e) })
  }
}

export default new TodoStore()

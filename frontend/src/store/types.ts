export interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

export interface State {
  todos: Todo[]
}

export type TodoId = Todo['id']

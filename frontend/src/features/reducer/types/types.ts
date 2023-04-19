export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export type State = {
    todos: Todo[];
  }

export type TodoId = Todo['id']
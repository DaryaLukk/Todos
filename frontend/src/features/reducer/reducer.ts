import Action from './types/Action';
import { State } from './types/types';

export const init = { todos: [] };
export const reducer = (
    state: State,
    action: Action
   ): State => {
    switch (action.type) {
      case 'INIT_TODO':
        return {
          ...state,
          todos: action.payload,
        };
        case 'ADD_TODO':
        return {
          ...state,
          todos: [action.payload, ...state.todos],
        };
        case 'DELETE_TODO':
        return {
          ...state,
          todos: state.todos.filter((todos) => todos.id !== action.payload)
        };
        case 'COMPLETED_TODO':
        return {
          ...state,
          todos: state.todos.map((todo) => {
                if(todo.id === action.payload.id) {
                  todo.completed = !todo.completed
                }
                return todo
              })
        };
        case 'EDIT_TODO':
        return {
          ...state,
          todos: state.todos.map((todo) => {
                if(todo.id === action.payload.id) {
                  todo.title = action.payload.title
                  todo.userId = action.payload.userId
                }
                return todo
              })
        };    
    }
   };
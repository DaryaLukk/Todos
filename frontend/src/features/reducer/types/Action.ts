import { Todo, TodoId } from './types';

type Action =
  | {
      type: 'INIT_TODO',
      payload: Todo[],
    }
  | {
      type: 'ADD_TODO',
      payload: Todo,
    }
  | {
      type: 'DELETE_TODO',
      payload: TodoId,
    }
  | {
      type: 'EDIT_TODO',
      payload: Todo,
    }
  | {
      type: 'COMPLETED_TODO',
      payload: Todo,
    }
    
export default Action;

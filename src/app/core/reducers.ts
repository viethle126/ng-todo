import { Todo } from './todo.model'
import * as TodoActions from './actions'

export interface TodosState {
  query: string;
  results: Todo[];
}

const initialState: TodosState = {
  query: '',
  results: []
}

export interface State {
  todos: TodosState;
}

export function todos(state = initialState, action: TodoActions.All): TodosState {
  switch (action.type) {
    case TodoActions.FETCH_TODOS: {
      return {
        ...state,
        query: action.payload
      }
    }

    case TodoActions.FETCH_TODOS_SUCCESS: {
      return {
        ...state,
        results: action.payload
      }
    }

    default: {
      return state
    }
  }
}

export const reducers = {
  todos
}

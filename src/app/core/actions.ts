import { Action } from '@ngrx/store'
import { Todo } from './todo.model'

export const FETCH_TODOS = 'FETCH_TODOS'
export class FetchTodos implements Action {
  readonly type = FETCH_TODOS

  constructor(public payload: string) { }
}

export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS'
export class FetchTodosSuccess implements Action {
  readonly type = FETCH_TODOS_SUCCESS

  constructor(public payload: Todo[]) { }
}

export const ADD_TODO = 'ADD_TODO'
export class AddTodo implements Action {
  readonly type = ADD_TODO

  constructor(public payload: string) { }
}

export const TOGGLE_TODO = 'TOGGLE_TODO'
export class ToggleTodo implements Action {
  readonly type = TOGGLE_TODO

  constructor(public payload: Todo) { }
}

export type All = FetchTodos | FetchTodosSuccess | AddTodo | ToggleTodo

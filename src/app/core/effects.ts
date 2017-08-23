import { Injectable } from '@angular/core'
import { Effect, Actions } from '@ngrx/effects'
import { Action } from '@ngrx/store'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/switchMap'

import { TodoService } from './services/todo.service'
import * as TodoActions from './actions'

@Injectable()
export class TodoEffects {

  @Effect()
  fetchTodos$: Observable<Action> = this.actions$.ofType(TodoActions.FETCH_TODOS)
    .map((action: TodoActions.FetchTodos) => action.payload)
    .switchMap(query => this.api.getTodos(query))
    .map(results => new TodoActions.FetchTodosSuccess(results))

  @Effect()
  createTodo$: Observable<Action> = this.actions$.ofType(TodoActions.ADD_TODO)
    .map((action: TodoActions.AddTodo) => action.payload)
    .switchMap(task => this.api.createTodo(task))
    .switchMap(() => this.api.getTodos())
    .map(results => new TodoActions.FetchTodosSuccess(results))

  @Effect()
  toggleTodo$: Observable<Action> = this.actions$.ofType(TodoActions.TOGGLE_TODO)
    .map((action: TodoActions.ToggleTodo) => action.payload)
    .switchMap(todo => this.api.toggleTodo(todo))
    .switchMap(() => this.api.getTodos())
    .map(results => new TodoActions.FetchTodosSuccess(results))

  constructor(
    private actions$: Actions,
    private api: TodoService
  ) { }
}

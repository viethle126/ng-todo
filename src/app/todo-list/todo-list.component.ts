import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Store } from '@ngrx/store'
import { State } from '../core/reducers'
import { Todo } from '../core/todo.model'
import * as TodoActions from '../core/actions'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Observable<Todo[]>
  displayedList: Array<Todo>

  constructor(private store: Store<State>) {
    this.todos = this.store.select(state => state.todos.results)
  }

  ngOnInit() {
    this.store.dispatch(new TodoActions.FetchTodos(''))
  }

  filterData(query: string) {
    this.store.dispatch(new TodoActions.FetchTodos(query.toLowerCase()))
  }

  toggle(todo: Todo) {
    this.store.dispatch(new TodoActions.ToggleTodo(todo))
  }

}

import { Component, OnInit } from '@angular/core'
import { Todo } from '../core/todo.model'
import { Store } from '@ngrx/store'
import { State } from '../core/reducers'
import * as TodoActions from '../core/actions'

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  onSubmit(task: string) {
    this.store.dispatch(new TodoActions.AddTodo(task))
  }

}

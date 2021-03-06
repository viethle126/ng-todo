import { Component, OnInit, Input } from '@angular/core'
import { Todo } from '../core/todo.model'

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-todo]',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input()
  todo: Todo

  constructor() { }

  ngOnInit() {
  }

}

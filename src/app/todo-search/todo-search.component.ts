import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { FormControl } from '@angular/forms'
import 'rxjs/add/operator/debounceTime'

@Component({
  selector: 'app-todo-search',
  templateUrl: './todo-search.component.html',
  styleUrls: ['./todo-search.component.scss']
})
export class TodoSearchComponent implements OnInit {

  query: FormControl = new FormControl()

  @Output()
  newSearch = new EventEmitter<string>()

  constructor() { }

  ngOnInit() {
    this.query
      .valueChanges
      .debounceTime(500)
      .subscribe(term => this.newSearch.emit(term))
  }

}

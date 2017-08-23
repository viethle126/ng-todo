import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Todo } from '../todo.model'
import uuid from 'uuid-v4'

@Injectable()
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodos(query: string = '') {
    return this.http.get<Todo[]>(`/api/todos?q=${query}`)
  }

  createTodo(task: string) {
    return this.http.post<Todo>(`/api/todos`, {
      id: uuid(),
      task,
      status: 'Pending'
    })
  }

  toggleTodo(todo: Todo) {
    return this.http.put<Todo>(`/api/todos/${todo.id}`, {
      task: todo.task,
      status: todo.status === 'Pending' ? 'Completed' : 'Pending'
    })
  }

}

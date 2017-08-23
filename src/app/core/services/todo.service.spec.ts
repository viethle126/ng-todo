import { TodoService } from './todo.service'
import { mockTodos } from './todo.service.helpers.spec'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/of'

fdescribe('TodoService', () => {
  let service: TodoService
  const httpSpy = jasmine.createSpyObj('http', ['get', 'post', 'put'])

  beforeEach(() => {
    service = new TodoService(httpSpy)
  })

  describe('getTodos', () => {

    it('should return list of todos', (done) => {
      const mockResponse = Observable.of(mockTodos)

      httpSpy.get.and.returnValue(mockResponse)

      service.getTodos()
        .subscribe(data => {
          expect(httpSpy.get).toHaveBeenCalledWith('/api/todos?q=')
          expect(data).toEqual(mockTodos)
          done()
        })
    })

    it('should return list of todos when called with search term', (done) => {
      const mockResponse = Observable.of(mockTodos)

      httpSpy.get.and.returnValue(mockResponse)

      service.getTodos('seeded')
        .subscribe(data => {
          expect(httpSpy.get).toHaveBeenCalledWith('/api/todos?q=seeded')
          expect(data).toEqual(mockTodos)
          done()
        })
    })

  })

})

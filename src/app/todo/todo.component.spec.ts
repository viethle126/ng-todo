import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { Component } from '@angular/core'
import { By } from '@angular/platform-browser'
import { TodoComponent } from './todo.component'

@Component({
  template: `
    <tr app-todo [todo]="testTodo"></tr>
  `
})

class TestHostComponent {
  testTodo = {
    id: 'IDSTRING',
    task: 'FOOBAR',
    status: 'PENDING'
  }
}

fdescribe('TodoComponent', () => {
  let testHost: TestHostComponent
  let fixture: ComponentFixture<TestHostComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoComponent, TestHostComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent)
    testHost = fixture.componentInstance
  })

  it('should be created', () => {
    expect(fixture).toBeTruthy()
  })

})
